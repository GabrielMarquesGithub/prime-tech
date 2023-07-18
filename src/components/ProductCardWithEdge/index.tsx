import { ProductCard } from "../ProductCard";
import styles from "./styles.module.scss";
import { IProductCardWithEdgeProps } from "./types";

function ProductCardWithEdge({ selected, ...rest }: IProductCardWithEdgeProps) {
  const classNames = `${styles.container} ${selected && styles.selected}`;

  return (
    <div className={classNames}>
      <ProductCard {...rest} />
    </div>
  );
}

export { ProductCardWithEdge };
