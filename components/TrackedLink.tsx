"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
  children: ReactNode;
};

export function TrackedLink({
  href,
  eventName,
  eventProperties,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    track(eventName, eventProperties);
    onClick?.(event);
  };

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
