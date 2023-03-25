import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Card } from "components";
import LeftSideBar from "./components/LeftSideBar";
import useSwrMutationFetch from "hooks/useSwrMutationFetch";
import { API_SERVICES_URLS } from "data";
import { useRouter } from "next/router";
export const NestedLayoutEditInvoice = ({
  form,
  preview,
}: {
  form: Function;
  preview: Function;
}) => {
  const [error, setError] = useState();
  const router = useRouter();
  const mock = {
    client: {
      fullName: "taymaa",
      email: "taymaa@gmail.com",
      address: {
        country: "Palestine",
      },
    },
    fixed: [
      {
        itemName: "Create App UI design",
        description: " this is new invoice from postman",
        price: 500,
      },
      {
        itemName: "new job",
        description: "test invoice",
        price: 150,
      },
    ],
    currency: "USD",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<any>({
    defaultValues: {
      fullName: mock.client.fullName,
      email: mock.client.email,
      currency: mock.currency,
      country: mock.client.address,
      jobDetails: [...mock.fixed],
    },
  });

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "jobDetails",
  });

  const useFormObj = { register, watch, errors };
  const fieldsArrObj = { fields, append, remove };
  const { trigger, isMutating } = useSwrMutationFetch(
    API_SERVICES_URLS.FREELANCER.UPDATE_INVOICE("63c7cfe9a3cab6ac129534a2"),
    { method: "PUT", headers: { "Content-Type": "application/json" } }
  );
  const onSubmit = async (data: any) => {
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
          mockData: mock,
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
export default NestedLayoutEditInvoice;
