"use client";

import Link from "next/link";
import { type ReactNode, type ComponentPropsWithoutRef, type JSX } from "react";

import { theme } from "@/styles/theme";

type ButtonVariant = "primary" | "pill" | "ghost" | "nav" | "active";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  activeClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: never };
type LinkProps = CommonProps & ComponentPropsWithoutRef<"a"> & { href: string; download?: string };

export default function Button(props: ButtonProps | LinkProps): JSX.Element {
  const isLink = "href" in props && props.href !== undefined;

  // Base styles
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500/80";

  // Size styles
  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs",
    md: "", // Defaulting to theme sizes
    lg: "px-6 py-3 text-base",
  };

  const getVariantStyles = (variant: ButtonVariant, isActive: boolean, activeClassName: string): string => {
    const variants: Record<ButtonVariant, string> = {
      primary: theme.components.button,
      pill: theme.components.pill,
      ghost: theme.components.pageLink,
      nav: theme.components.pageLink,
      active: "rounded-md px-3 py-2 text-sm font-medium transition-colors bg-cyan-100 text-cyan-900 ring-1 ring-cyan-200 dark:bg-cyan-400/15 dark:text-cyan-100 dark:ring-cyan-400/30",
    };

    let styles = variants[variant];
    if (isActive) {
      if (activeClassName) {
        styles = activeClassName;
      } else if (variant === "nav" || variant === "ghost") {
        styles = variants.active;
      } else if (variant === "pill") {
        styles = `${theme.components.pill} bg-cyan-500/10 border-cyan-500/50 text-cyan-700 dark:text-cyan-300`;
      }
    }
    return styles;
  };

  if (isLink) {
    const { href, ...otherLinkProps } = props as LinkProps;
    const {
      variant = "primary",
      size = "md",
      isActive = false,
      activeClassName = "",
      leftIcon,
      rightIcon,
      children,
      className = "",
      download,
      target,
      rel,
      ...linkRest
    } = otherLinkProps as Omit<LinkProps, "href">;

    const variantStyles = getVariantStyles(variant, isActive, activeClassName);
    const combinedClassName = `${baseStyles} ${variantStyles} ${sizes[size]} ${className}`.trim();

    const content = (
      <>
        {leftIcon && <span className={variant === "pill" ? theme.components.pillIcon : "mr-2"}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={variant === "pill" ? theme.components.pillIcon : "ml-2"}>{rightIcon}</span>}
      </>
    );

    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || !!download;

    if (isExternal) {
      return (
        <a
          href={href}
          download={download}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className={combinedClassName}
          aria-current={isActive ? "page" : undefined}
          {...(linkRest as ComponentPropsWithoutRef<"a">)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-current={isActive ? "page" : undefined}
        {...(linkRest as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}
      >
        {content}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    isActive = false,
    activeClassName = "",
    leftIcon,
    rightIcon,
    children,
    className = "",
    type = "button",
    ...buttonRest
  } = props as ButtonProps;

  const variantStyles = getVariantStyles(variant, isActive, activeClassName);
  const combinedClassName = `${baseStyles} ${variantStyles} ${sizes[size]} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClassName}
      aria-pressed={variant === "ghost" || variant === "pill" ? isActive : undefined}
      {...(buttonRest as ComponentPropsWithoutRef<"button">)}
    >
      <>
        {leftIcon && <span className={variant === "pill" ? theme.components.pillIcon : "mr-2"}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={variant === "pill" ? theme.components.pillIcon : "ml-2"}>{rightIcon}</span>}
      </>
    </button>
  );
}
