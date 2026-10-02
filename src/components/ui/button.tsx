import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Common = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
};

type BtnProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: BtnProps | LinkProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props as Common & {
    href?: string;
  } & Record<string, unknown>;

  const styles = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 cursor-pointer",
    "rounded-m",
    size === "md" ? "h-11 px-5 text-[15px]" : "h-9 px-3.5 text-sm",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:bg-primary-deep dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent-bright",
    variant === "secondary" &&
      "border border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent dark:hover:border-accent",
    variant === "ghost" && "text-muted hover:text-accent",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={styles} {...anchorRest}>
        {children}
      </a>
    );
  }
  return (
    <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
