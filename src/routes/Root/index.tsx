import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import styles from "./styles.module.scss";

import { ItemsList } from "../../components/ItemsList";
import { Text } from "../../components/Text";
import { ProductCardWithEdge } from "../../components/ProductCardWithEdge";
import { Icon } from "../../components/Icon";
import { HighlightText } from "../../components/HighlightText";

import img from "../../assets/images/erion-tgt-rgb-sem-gpu-amd-01-removebg-preview.png";
import { Cart } from "../../components/Cart";
import { FeaturedProduct } from "../../components/FeaturedProduct";

const mock: Record<string, string>[] = [
  { FONTE: "750W" },
  { RAM: "4BG" },
  { PROCESSADOR: "intel i5" },
  { SSD: "1T" },
];

function Root() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <ItemsList>
          <li>
            <ProductCardWithEdge
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </li>
          <li>
            <ProductCardWithEdge
              selected={true}
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </li>
          <li>
            <ProductCardWithEdge
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </li>
          <li>
            <ProductCardWithEdge
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </li>
        </ItemsList>
      </aside>
      <header className={styles.header}>
        <section className={styles["logo-container"]}>
          <Icon icon={<LogoIcon />} />
          <Text is="h1">
            Prime <HighlightText>Tech</HighlightText>
          </Text>
        </section>
        <Cart />
      </header>
      <main className={styles.main}>
        <FeaturedProduct
          heading="PC.Gamer"
          caption="Hydra"
          specifications={mock}
          imageAlt="teste"
          imageUrl={img}
        />
      </main>
    </div>
  );
}

export { Root };
