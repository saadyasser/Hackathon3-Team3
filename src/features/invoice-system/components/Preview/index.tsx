import { Card, Logo, Skeleton } from "components";
import { getCookie } from "lib/js-cookie";
import { getFullDate, getFullName } from "utils";

export const Preview = ({ data }: any) => {
  const { fullName, email, country, currency, jobDetails } = data;
  const total = jobDetails.reduce(
    (acc: number, cur: any) => acc + parseFloat(cur.price),
    0
  );

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-[80%]">
        <h2 className="text-xl mb-3">Preview</h2>
        <Card className="py-8 mb-4 border shadow-sm px-11">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">
              Invoice{" "}
              <span className="text-xs font-normal">
                #
                {/* {preview?.invoiceNo || (
              <Skeleton
                width={49}
                height={14}
                className="inline-block align-text-bottom"
              />
            )} */}
                <Skeleton
                  width={49}
                  height={14}
                  className="inline-block align-text-bottom"
                />
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
              <p>{fullName ? fullName : <Skeleton width={150} />}</p>
              <span className="text-sm text-gray-dark">
                {email ? email : <Skeleton width={130} className="mt-1" />}
              </span>
              <p className="mt-3">Issue Date</p>
              <span className="text-sm text-gray-dark">{getFullDate()}</span>
            </div>
          </div>
          <div className="flex items-start justify-between mt-14">
            <p className="mb-2 text-gray-dark">Service</p>
            <p className="mb-2 text-gray-dark">Amount</p>
          </div>

          {jobDetails.map(({ itemName, description, price, id }: any) => {
            return (
              <div className="mb-2" key={id}>
                <div
                  className={`flex items-center justify-between ${
                    description ? "" : "mb-1"
                  }`}
                >
                  <span className="text-lg font-semibold">
                    {itemName ? itemName : <Skeleton width={160} />}
                  </span>
                  <span className="text-lg font-semibold">
                    {data?.currency} {price ? price : <Skeleton width={80} />}
                  </span>
                </div>
                <span className="text-sm text-gray-400 -mt-1 block">
                  {description ? description : <Skeleton width={200} />}
                </span>
              </div>
            );
          })}
          {/* {preview ? (
        preview?.fixed.map((item) => (
          <div key={item._id} className="flex items-start justify-between">
            <span>{item.itemName}</span>
            <span>
              {preview.currency} {item.price}
            </span>
          </div>
        ))
      ) : ( */}

          {/* //   )} */}
          <div className="h-px my-3 bg-gray" />
          <div className="ml-auto max-w-max min-w-[160px] text-gray-dark text-sm">
            <p className="flex">
              Total
              <span className="ml-auto">
                {total ? total : <Skeleton width={60} />}
              </span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Preview;
