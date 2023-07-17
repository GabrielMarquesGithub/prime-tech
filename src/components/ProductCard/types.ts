import { IProduct } from "../../types/IProduct";

export interface IProductCardProps
  extends Pick<IProduct, "imageAlt" | "imageUrl" | "specifications"> {}
