import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Card } from "components";
import LeftSideBar from "./components/LeftSideBar";
import useSwrMutationFetch from "hooks/useSwrMutationFetch";
import { API_SERVICES_URLS } from "data";
import { useRouter } from "next/router";

export const NestedLayoutCreateInvoice = ({
  form,
  preview,
}: {
  form: Function;
  preview: Function;
}) => {
  const router = useRouter();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<any>({
    defaultValues: {
      jobDetails: [{ itemName: "", description: "", price: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "jobDetails",
  });

  const useFormObj = { register, watch, errors };
  const fieldsArrObj = { fields, append, remove };
  const { trigger, isMutating } = useSwrMutationFetch(
    API_SERVICES_URLS.FREELANCER.CREATE_INVOICE,
    { method: "POST", headers: {} }
  );
  const onSubmit = async (data: any) => {
    console.log(data);
    const formatObject = {
      client: {
        fullName: data.fullName,
        email: data.email,
        address: {
          country: data.country,
        },
      },
      fixed: [...data.jobDetails],
      currency: data.currency,
    };
    const response = await trigger(formatObject);
    if (response.status == "failed") setError(response.message);
    else {
      console.log(response);
      router.push("/invoices-page");
    }
    console.log(response);
  };

  return (
    <div className="w-full flex">
      <Card
        className="relative basis-6/12 h-[calc(100vh-60.46px)] overflow-y-auto py-8 border-t-[1px] border-gray"
        hasBorderRadius={false}
      >
        {form({
          ...useFormObj,
          onSubmit: handleSubmit(onSubmit),
          ...fieldsArrObj,
          isMutating,
          error,
        })}
      </Card>
      <div
        className="basis-6/12 
      h-[calc(100vh-60.46px)]"
      >
        {preview({ data: useFormObj.watch() })}
      </div>
    </div>
  );
};
export default NestedLayoutCreateInvoice;
