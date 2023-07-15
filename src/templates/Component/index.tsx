import styles from "./styles.module.scss";
import { ICOMPONENT_NAMEProps } from "./types";

function COMPONENT_NAME({ ...rest }: ICOMPONENT_NAMEProps) {
  return <div className={styles.container} {...rest} />;
}

export { COMPONENT_NAME };
