export interface IProduct {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  caption: string;
  specifications: Record<string, string>[];
}
