import React, { HTMLAttributes } from "react";

export type TPopupProps = HTMLAttributes<HTMLElement> & {
  popupName: string,
  title: React.ReactNode,
}
