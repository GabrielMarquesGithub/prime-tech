import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";

import styles from "./styles.module.scss";
import { ICartProps } from "./types";

import { Icon } from "../Icon";
import { Text } from "../Text";

function Cart({ ...rest }: ICartProps) {
  return (
    <section className={styles.container}>
      <Text is="span">CART</Text>
      <div className={styles["icon-container"]}>
        <Icon icon={<CartIcon />} />
        <span className={styles["icon-number-container"]}>
          <Text is="span" variant="invert" size="little">
            10
          </Text>
        </span>
      </div>
    </section>
  );
}

export { Cart };
