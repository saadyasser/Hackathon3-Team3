import { Link } from "components";
import {
  ChevronLeftIconMini,
  ChevronRightIconMini,
  XMarkIconMini,
} from "lib/@heroicons";
import { useRouter } from "next/router";

export const FormHeader = ({
  title,
  currentUrl,
  prevUrl,
  currenUrlTitle,
  prevUrlTitle
}: {
  title: string;
  currentUrl: string;
  prevUrl: string;
  currenUrlTitle: string;
  prevUrlTitle: string;
}): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <ChevronLeftIconMini
        className="h-6 w-6 absolute top-7 left-6 cursor-pointer"
        onClick={() => router.back()}
      />
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-1">
          <Link className="text-xs text-gray-500 font-bold" href={prevUrl}>
            {prevUrlTitle}
          </Link>
          <ChevronRightIconMini className="w-4 h-4 text-gray-400" />
          <Link className="text-xs text-gray-400 font-medium" href={currentUrl}>
            {currenUrlTitle}
          </Link>
        </div>
        <XMarkIconMini
          className="w-4 h-4 cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      <h2 className="inline text-lg font-semibold pr-5">{title}</h2>
      <span className="text-sm text-gray-400">#LNK-003</span>
    </>
  );
};
export default FormHeader;
