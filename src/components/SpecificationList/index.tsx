import { Text } from "../Text";
import styles from "./styles.module.scss";
import { ISpecificationListProps } from "./types";

function SpecificationList({ specifications }: ISpecificationListProps) {
  return (
    <ul className={styles.list}>
      {specifications.map((specification) => {
        const key = Object.keys(specification)[0];
        const value = specification[key];

        return (
          <li key={key + value}>
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
  );
}

export { SpecificationList };
