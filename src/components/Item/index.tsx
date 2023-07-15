import styles from "./styles.module.scss";
import { IItemProps } from "./types";

function Item({ selected, ...rest }: IItemProps) {
  const classNames = `${styles.item} ${selected && styles.selected}`;

  return <li className={classNames} {...rest} />;
}

export { Item };
