import { JSX, ReactNode } from "react";

import { theme } from "@/styles/theme";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = "",
}: CardProps): JSX.Element {
  return (
    <div className={`${theme.components.card} ${className}`}>
      <h3 className={theme.typography.h3}>{title}</h3>
      <p
        className={`${theme.typography.body} ${theme.colors.text.muted} mb-4`}
      >
        {description}
      </p>
      {children}
    </div>
  );
}
