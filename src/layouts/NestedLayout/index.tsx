import { Card } from "components";
import { Children } from "react";
import LeftSideBar from "./components/LeftSideBar";

export const NestedLayout = ({ children }: { children: JSX.Element }) => {
  return <div className="w-full flex">{children}</div>;
};
export default NestedLayout;
