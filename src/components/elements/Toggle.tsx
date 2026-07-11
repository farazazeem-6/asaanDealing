import { Button } from './Button';
import { ComponentProps } from '@stitches/react';

type TToggleOption = {
  value: string;
  label?: string;
  icon?: React.ReactNode;
};

type TToggleButtonProps = {
  options: TToggleOption[];
  value: string;
  onChange: (value: string) => void;
};

type TButtonVariants = ComponentProps<typeof Button>;

export function ToggleButton({
  options,
  value,
  onChange,
  size = 'md',
  variant,
}: TToggleButtonProps & {
  size?: TButtonVariants['size'];
  variant?: TButtonVariants['variant'];
}) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => {
        const currentIndex = options.findIndex(
          (option) => option.value === value,
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
