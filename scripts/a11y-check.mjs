import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const urls = process.argv.slice(2);

if (!urls.length) {
  console.error("usage: node scripts/a11y-check.mjs <url> [url...]");
  process.exit(1);
}

const browser = await chromium.launch();
let failed = false;

for (const url of urls) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => sessionStorage.setItem("zaffre-intro", "done"));
  await page.waitForTimeout(750);

  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();

  if (violations.length) {
    failed = true;
    console.log(`\n✗ ${url} — ${violations.length} violation type(s)`);
    for (const violation of violations) {
      console.log(`  [${violation.impact}] ${violation.id}: ${violation.help}`);
      for (const node of violation.nodes.slice(0, 3)) {
        console.log(`     -> ${node.target.join(" ")}`);
      }
    }
  } else {
    console.log(`✓ ${url} — clean`);
  }

  await context.close();
}

await browser.close();
process.exit(failed ? 1 : 0);
