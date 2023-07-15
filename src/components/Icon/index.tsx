import { IIconProps } from "./types";
import styles from "./styles.module.scss";

function Icon({ icon, size = "base" }: IIconProps) {
  const classNames = `${styles.container} ${styles[size]} `;

  return <div className={classNames}>{icon}</div>;
}

export { Icon };
