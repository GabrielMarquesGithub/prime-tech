import { SpecificationList } from "../SpecificationList";
import styles from "./styles.module.scss";

import { IProductCardProps } from "./types";

function ProductCard({
  imageUrl,
  imageAlt,
  specifications,
}: IProductCardProps) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imageUrl} alt={imageAlt} />
      <div className={styles["specification-list-container"]}>
        <SpecificationList specifications={specifications} />
      </div>
    </div>
  );
}

export { ProductCard };
