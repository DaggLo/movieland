import type React from "react";

export type ButtonProps = React.PropsWithChildren<{
  badge?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  spinner?: React.ReactNode;
}>;
