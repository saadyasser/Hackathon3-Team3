import { Link } from "components";
import {
  ChevronLeftIconMini,
  ChevronRightIconMini,
  XMarkIconMini,
} from "lib/@heroicons";
import { useRouter } from "next/router";

export const FormHeader = (): JSX.Element => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <ChevronLeftIconMini
        className="h-6 w-6 absolute top-7 left-6 cursor-pointer"
        onClick={() => router.back()}
      />
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-1">
          <Link
            className="text-xs text-gray-500 font-bold"
            href="/invoices-page"
          >
            Invoices
          </Link>
          <ChevronRightIconMini className="w-4 h-4 text-gray-400" />
          <Link
            className="text-xs text-gray-400 font-medium"
            href="/invoices-page/create-link"
          >
            Create Link
          </Link>
        </div>
        <XMarkIconMini
          className="w-4 h-4 cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
    </>
  );
};
export default FormHeader;
