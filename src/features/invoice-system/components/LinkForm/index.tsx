import FormHeader from "../FormHeader";
import { useRouter } from "next/router";
import useForm, { Controller } from "lib/react-hook-form";
import {
  Input,
  Button,
  Select,
  PhoneInput,
  HelperText,
  Card,
  NoSsr,
} from "components";
import { useAxios } from "hooks";
import {
  currenciesList,
  API_SERVICES_URLS,
  URL_PATHS,
  FORM_VALIDATION,
} from "data";
import { ErrorIconMini, XMarkIconMini } from "lib/@heroicons";
import {
  getAuthorizationHeader,
  getFieldHelperText,
  returnFlattenObject,
} from "utils";
import {
  CreateLinkInputsType,
  CreateLinkResponseType,
} from "features/authentication/types";
import { Fragment, useState } from "react";
import returnArrayOfObjects from "utils/returnArrayOfObjects";
import LinkPreview from "../LinkPreview";

export const LinkForm = ({
  id,
  url,
  data,
}: {
  id: string;
  url: string;
  data: any;
}): JSX.Element => {
  data.fixed = data.fixed.map((obj: any) => {
    delete obj._id;
    return obj;
  });
  const [LinkData, setLinkData] = useState(
    id
      ? data
      : {
          currency: "",
          fixed: [
            {
              itemName: "",
              description: "",
              price: "",
            },
          ],
        }
  );

  const authHeader = getAuthorizationHeader();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
    clearErrorOnChange,
  } = useForm<any>({
    defaultValues: {
      currency: LinkData.currency,
      ...returnFlattenObject(LinkData.fixed),
    },
  });
  const {
    fetchData: createLink,
    error,
    loading,
  } = useAxios<CreateLinkResponseType, CreateLinkInputsType>({
    config: {
      url: id
        ? url + id
        : "https://talents-valley-backend.herokuapp.com/api/service/create", //API_SERVICES_URLS.INVOICES.CREATE_LINK
      method: id ? "PUT" : "POST",
      headers: authHeader,
    },
    options: {
      manual: true,
    },
    onSuccess: () => {
      router.push(URL_PATHS.HOME);
    },
  });

  const onSubmit = handleSubmit((data) => {
    const currency = { currency: data["currency"] };
    delete data.currency;
    const objAarr = returnArrayOfObjects(data);
    console.log(
      {
        ...currency,
        ...objAarr,
      },
      "for reg"
    );

    if (loading) return;
    createLink({
      ...currency,
      ...objAarr,
    });
  });

  return (
    <NoSsr>
      <Card
        className="relative basis-6/12 h-[calc(100vh-60.46px)] py-8 border-t-[1px] border-gray overflow-auto"
        hasBorderRadius={false}
      >
        <div className="w-9/12 mx-auto">
          <FormHeader
            title="Link"
            currentUrl="/invoices-page/create-link"
            prevUrl="/invoices-page"
            prevUrlTitle="Invoices"
            currenUrlTitle="Create Link"
          />

          <form className="py-4" onSubmit={onSubmit}>
            <Select
              options={currenciesList}
              id="currency-select"
              label="Currency"
              className="mb-5"
              placeholder="Enter currency"
              selectSize="small"
              {...register("currency", {
                ...FORM_VALIDATION.currency,
                onChange: () => clearErrorOnChange("currency"),
              })}
              error={!!errors.currency}
              helperText={getFieldHelperText("error", errors.currency?.message)}
            />
            {LinkData.fixed.map((job: any, index: any) => (
              <Fragment key={index}>
                <div className="relative flex flex-wrap sm:flex-nowrap sm:gap-3">
                  <div className="basis-8/12">
                    {LinkData.fixed.length > 1 ? (
                      <XMarkIconMini
                        className="absolute top-[-15px] right-0 w-4 h-4 cursor-pointer"
                        onClick={() => {
                          const values = watch();
                          const currency = { currency: watch("currency") };
                          delete values.currency;
                          const objAarr = returnArrayOfObjects(values);
                          objAarr.fixed.splice(index, 1);

                          setLinkData({
                            ...currency,
                            ...objAarr,
                          });
                          reset({
                            ...currency,
                            ...returnFlattenObject(objAarr.fixed),
                          });
                        }}
                      />
                    ) : null}
                    <Input
                      id="job-title-input"
                      label="Job Title"
                      placeholder="Enter Job Title"
                      className="w-full"
                      inputSize="small"
                      {...register("itemName" + "_" + index, {
                        ...FORM_VALIDATION.itemName,
                        onChange: () =>
                          clearErrorOnChange("itemName" + "_" + index),
                      })}
                      error={!!errors["itemName" + "_" + index]}
                      helperText={getFieldHelperText(
                        "error",
                        errors["itemName" + "_" + index]?.message
                      )}
                    />
                  </div>
                  <div className="basis-4/12">
                    <Input
                      id="price-input"
                      label="Price"
                      placeholder="Enter Price"
                      className="w-full"
                      inputSize="small"
                      endIcon={watch("currency")}
                      {...register("price" + "_" + index, {
                        ...FORM_VALIDATION.price,
                        onChange: () =>
                          clearErrorOnChange("price" + "_" + index),
                      })}
                      error={!!errors["price" + "_" + index]}
                      helperText={getFieldHelperText(
                        "error",
                        errors["price" + "_" + index]?.message
                      )}
                    />
                  </div>
                </div>
                <Input
                  id="description-input"
                  placeholder="Enter Description"
                  className={`w-full ${
                    index !== LinkData.fixed.length - 1 ? "mb-5" : "mb-0"
                  }`}
                  inputSize="small"
                  {...register("description" + "_" + index, {
                    ...FORM_VALIDATION.description,
                    onChange: () =>
                      clearErrorOnChange("description" + "_" + index),
                  })}
                  error={!!errors["description" + "_" + index]}
                  helperText={getFieldHelperText(
                    "error",
                    errors["description" + "_" + index]?.message
                  )}
                />
              </Fragment>
            ))}

            <p
              className="text-blue text-sm cursor-pointer mb-10"
              onClick={() => {
                const values = watch();
                const currency = { currency: watch("currency") };
                delete values.currency;
                const objAarr = returnArrayOfObjects(values);
                objAarr.fixed.push({
                  itemName: "",
                  price: "",
                  description: "",
                });
                setLinkData({
                  ...currency,
                  ...objAarr,
                });
              }}
            >
              +Add item or service
            </p>

            <Button type="submit" buttonSize="small" fullWidth>
              {loading ? "Loading..." : "Create Link"}
            </Button>
          </form>
        </div>
      </Card>
      <div className="basis-6/12 h-[calc(100vh-60.46px)] overflow-auto">
        {<LinkPreview data={watch()} />}
      </div>
    </NoSsr>
  );
};

export default LinkForm;
