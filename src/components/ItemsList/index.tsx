import styles from "./styles.module.scss";
import { IItemsListProps } from "./types";

function ItemsList({ ...rest }: IItemsListProps) {
  return <ul className={styles.list} {...rest} />;
}

export { ItemsList };
