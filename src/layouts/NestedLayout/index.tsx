import { Card } from "components";
import LeftSideBar from "./components/LeftSideBar";

export const NestedLayout = ({
  form,
  preview,
}: {
  form: JSX.Element;
  preview: JSX.Element;
}) => {
  return (
    <div className="w-full flex">
      <Card
        className="relative basis-6/12 h-[calc(100vh-60.46px)] py-8 border-t-[1px] border-gray"
        hasBorderRadius={false}
      >
        {form}
      </Card>
      <div className="basis-6/12 h-[calc(100vh-60.46px)]">{preview}</div>
    </div>
  );
};
export default NestedLayout;
