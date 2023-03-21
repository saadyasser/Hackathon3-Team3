import type { FC, HTMLProps } from "react";
import type { Children } from "types";

export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: Children;
  title: string;
  pageDescription?: string;
  withoutNavbar?: boolean;
  contentClassName?: string;
  withoutFooter?: boolean;
  withSidebar?: boolean;
}
export type MainLayoutType = FC<MainLayoutProps>;
