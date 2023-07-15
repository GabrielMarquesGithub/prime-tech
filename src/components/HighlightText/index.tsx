import styles from "./styles.module.scss";
import { IHighlightTextProps } from "./types";

function HighlightText({ ...rest }: IHighlightTextProps) {
  return <b className={styles.text} {...rest} />;
}

export { HighlightText };
