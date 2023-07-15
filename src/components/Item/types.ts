import { HTMLAttributes } from "react";

export interface IItemProps
  extends Pick<HTMLAttributes<HTMLLIElement>, "children"> {
  selected?: boolean;
}
