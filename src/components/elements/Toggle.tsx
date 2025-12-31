import { Button } from "./Button";
import { TButtonVariants, TToggleButtonProps } from "./types";

export function ToggleButton({
  options,
  value,
  onChange,
  size = "md",
  variant = "theme",
}: TToggleButtonProps & {
  size?: TButtonVariants["size"];
  variant?: TButtonVariants["variant"];
}) {
  return (
    <Button
      size={size}
      variant={variant}
      onClick={() => {
        const currentIndex = options.findIndex(
          (option) => option.value === value
        );
        const nextIndex = (currentIndex + 1) % options.length;
        onChange(options[nextIndex].value);
      }}
    >
      {options.find((option) => option.value === value)?.icon ||
        options.find((option) => option.value === value)?.label}
    </Button>
  );
}
