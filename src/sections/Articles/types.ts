import { TArticleCard } from "@/components/ArticleCard/types";
import { HTMLAttributes } from "react";

export type TArticlesProps = HTMLAttributes<HTMLElement> & {
  items: TArticleCard[]
};
