import { IButtonProps } from "./types";

function Button({
  size = "base",
  title,
  shape,
  variant,
  disabled = false,
  ...rest
}: IButtonProps) {
  const classNames = `${size} ${variant} ${shape}`;

  return (
    <button
      title={title}
      aria-label={title}
      aria-disabled={disabled}
      disabled={disabled}
      className={classNames}
      {...rest}
    />
  );
}

export { Button };
