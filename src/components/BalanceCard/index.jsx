import { Button, Card, IconButton } from "components";
import { ArrowDownTrayIconMini, PlusIconMini } from "lib/@heroicons";
import { Send } from "components/svg";
import { useCurrentUser } from "features/authentication";

export const BalanceCard = () => {

  const {user} = useCurrentUser();
  const beforeDecimal = Math.trunc(user?.balance);
  var getDecimalVal = user?.balance.toString().indexOf(".");
  // var afterDecimal = user?.balance.toString().substring(getDecimalVal + 1);
  const buttonClasses = {
    button:
      "!bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF] flex items-center gap-2",
    iconButton:
      "!rounded-lg bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF]",
  };

  return (
    <Card className="w-full sm:w-fit">
      <span className="text-[#8c8c8c]">Balance</span>
      <div className="flex gap-3">
        <h3 className=" font-semibold  text-2xl">
          ${beforeDecimal}.
          {/* <span className=" text-base font-medium">{afterDecimal}</span> */}
          <span className=" text-base font-medium">00</span>
        </h3>
        <IconButton buttonSize="small" className={buttonClasses.iconButton}>
          <ArrowDownTrayIconMini />
        </IconButton>
      </div>
      <div className="flex gap-5 mt-5">
        <Button className={buttonClasses.button} buttonSize="small">
          <PlusIconMini height={20} width={20} />
          Create Link
        </Button>
        <Button className={buttonClasses.button} buttonSize="small">
          <Send />
          Send Invoice
        </Button>
      </div>
    </Card>
  );
};
export default BalanceCard;
