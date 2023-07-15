import { createElement } from "react";

import styles from "./styles.module.scss";
import { ITextProps } from "./types";

function Text({
  is,
  variant = "base",
  size = "base",
  decoration,
  lineLimit,
  ...rest
}: ITextProps) {
  const classNames = `${styles.text} ${styles["size-" + size]} ${
    styles["variant-" + variant]
  } ${decoration && styles[decoration]} ${
    lineLimit && `${styles.lineLimit} ${styles["lineLimit-" + lineLimit]}`
  }`;

  return createElement(is, { className: classNames, ...rest });
}

export { Text };
