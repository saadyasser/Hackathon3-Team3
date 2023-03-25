import { Card, Logo, Skeleton } from "components";
import { useInvoicePreview, usePayInvoice } from "features/invoices";
import { getFullName } from "utils";
import returnArrayOfObjects from "utils/returnArrayOfObjects";

const LinkPreview = ({ data }: { data: any }) => {
  const currency = { currency: data["currency"] };
  console.log(currency.currency, "dddd");

  delete data.currency;
  const fixedObj = returnArrayOfObjects(data);
  const arrangedData = {
    ...currency,
    ...fixedObj,
  };
  let total = 0;

  const { invoiceId } = usePayInvoice();
  const { preview } = useInvoicePreview(invoiceId);
  const clientFullName = preview
    ? getFullName(preview.client.firstName, preview.client.lastName)
    : "";

  return (
    <div className="py-8 mb-4 border shadow-sm px-11">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">
          Invoice{" "}
          <span className="text-xs font-normal">
            #
            {preview?.invoiceNo || (
              <Skeleton
                width={49}
                height={14}
                className="inline-block align-text-bottom"
              />
            )}
          </span>
        </h4>
        <Logo className="cursor-pointer" />
      </div>
      <div className="flex justify-between">
        <div>
          <h5 className="mt-5 mb-4 text-gray-dark">From</h5>
          <h6>Talents Valley LLC</h6>
          <p className="flex flex-col text-sm text-gray-dark">
            <span>30 North Gould St.</span>
            <span>Sheridan, Wyoming 82801</span>
            <span>United States</span>
            <span>+1 307-217-6666</span>
          </p>
        </div>
        <div>
          <h5 className="mt-5 mb-4 text-gray-dark">Bill To</h5>
          <p>{clientFullName ? clientFullName : <Skeleton width={150} />}</p>
          <span className="text-sm text-gray-dark">
            {preview?.client.email || <Skeleton width={130} className="mt-1" />}
          </span>
          <p className="mt-3">Issue Date</p>
          <span className="text-sm text-gray-dark">
            {preview ? (
              new Date(preview.createdAt).toDateString()
            ) : (
              <Skeleton width={110} />
            )}
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between mt-14">
        <p className="mb-2 text-gray-dark">Service</p>
        <p className="mb-2 text-gray-dark">Amount</p>
      </div>
      {arrangedData ? (
        arrangedData?.fixed.map((item: any) => {
          total += parseFloat(item.price);
          return (
            <div key={item._id} className="flex items-start justify-between">
              <span>{item.itemName}</span>
              <span>
                {item.price} {currency.currency}
              </span>
            </div>
          );
        })
      ) : (
        <div className="flex items-start justify-between">
          <span>
            <Skeleton width={160} />
          </span>
          <span>
            <Skeleton width={60} />
          </span>
        </div>
      )}
      <div className="h-px my-3 bg-gray" />
      <div className="ml-auto max-w-max min-w-[160px] text-gray-dark text-sm">
        <p className="flex">
          Total
          <span className="ml-auto">
            {total ? `${currency?.currency} ${total}` : <Skeleton width={60} />}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LinkPreview;
