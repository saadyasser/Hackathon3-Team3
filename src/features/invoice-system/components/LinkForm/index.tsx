import FormHeader from "../FormHeader";

export const LinkForm = ({
  id,
  url,
  data,
}: {
  id: string;
  url: string;
  data: {}[];
}): JSX.Element => {
  return (
    <div className="w-9/12 mx-auto">
      <FormHeader />
      <h2 className="inline text-lg font-semibold pr-5">Link</h2>
      <span className="text-sm text-gray-400">#LNK-003</span>
    </div>
  );
};

export default LinkForm;
