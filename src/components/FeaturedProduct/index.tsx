import styles from "./styles.module.scss";

import { Text } from "../Text";
import { IFeaturedProductProps } from "./types";
import { SpecificationList } from "../SpecificationList";

function FeaturedProduct({
  heading,
  caption,
  imageUrl,
  imageAlt,
  specifications,
}: IFeaturedProductProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Text is="h2" variant="highlighted" size="huge">
          {heading}
        </Text>
      </header>
      <section className={styles.body}>
        <img className={styles.img} src={imageUrl} alt={imageAlt} />
        <Text is="h3" size="large" lineLimit={2}>
          {caption}
        </Text>
      </section>
      <section className={styles.specifications}>
        <span>
          <Text is="span" variant="highlighted">
            SPECS
          </Text>
        </span>
        <div>
          <SpecificationList specifications={specifications} />
        </div>
      </section>
      <section className={styles.control}>
        <Text is="h3">controle</Text>
      </section>
      <section className={styles.next}>
        <Text is="h3">proximo</Text>
      </section>
    </section>
  );
}

export { FeaturedProduct };
