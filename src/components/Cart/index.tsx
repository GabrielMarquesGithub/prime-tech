import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";

import styles from "./styles.module.scss";
import { ICartProps } from "./types";

import { Icon } from "../Icon";
import { Text } from "../Text";
import { Button } from "../Button";

function Cart({ ...rest }: ICartProps) {
  return (
    <Button variant="transparent" role="button" title="Abrir carrinho">
      <Text is="span">CART</Text>
      <div className={styles["icon-container"]}>
        <Icon icon={<CartIcon />} />
        <span className={styles["icon-number-container"]}>
          <Text is="span" variant="invert" size="little">
            10
          </Text>
        </span>
      </div>
    </Button>
  );
}

export { Cart };
