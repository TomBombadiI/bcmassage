import { HTMLAttributes } from "react";

export type TArticleCard = {
  title: string,
  description: string,
  link?: string,
  imageSrc?: string,
}

export type TArticleCardProps = HTMLAttributes<HTMLElement> & TArticleCard;
