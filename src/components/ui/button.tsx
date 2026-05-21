import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
  secondary:
    "border border-border bg-surface text-foreground hover:border-primary/50 hover:text-primary",
  ghost: "text-muted hover:text-primary",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm font-medium",
  lg: "h-12 px-8 text-base font-medium",
};

type BaseProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    href,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const { external } = rest as LinkButtonProps;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, ...buttonRest } =
    rest as NativeButtonProps;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
