import { ComponentProps } from "@stitches/react";
import { Button } from "../Button";

export type TToggleOption = {
  value: string;
  label?: string;
  icon?: React.ReactNode;
};

export type TToggleButtonProps = {
  options: TToggleOption[];
  value: string;
  onChange: (value: string) => void;
};

export type TButtonVariants = ComponentProps<typeof Button>;
