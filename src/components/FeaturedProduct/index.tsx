import styles from "./styles.module.scss";

import { Text } from "../Text";
import { IFeaturedProductProps } from "./types";

function FeaturedProduct({
  heading,
  caption,
  imageUrl,
  imageAlt,
}: IFeaturedProductProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Text is="h2" variant="highlighted" size="huge">
          {heading}
        </Text>
      </header>
      <section className={styles.body}>
        <div className={styles["img-container"]}>
          <img className={styles.img} src={imageUrl} alt={imageAlt} />
        </div>
        <Text is="h3" size="large">
          {caption}
        </Text>
      </section>
    </section>
  );
}

export { FeaturedProduct };
