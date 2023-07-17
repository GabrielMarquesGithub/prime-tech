import { Text } from "../Text";
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
      <ul className={styles["specification-list"]}>
        {specifications.slice(0, 4).map((specification) => {
          const key = Object.keys(specification)[0];
          const value = specification[key];

          return (
            <li>
              <Text is="span" variant="invert" size="small" lineLimit={1}>
                {value}
              </Text>
              <Text is="span" variant="info" size="small" lineLimit={1}>
                {key}
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { ProductCard };
