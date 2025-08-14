export type BadgeVariant = "primary" | "secondary" | "default-light";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}
