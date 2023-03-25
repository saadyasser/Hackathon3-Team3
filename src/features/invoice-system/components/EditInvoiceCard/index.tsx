import React, { useState } from "react";
import FormHeader from "../FormHeader";
import { Button, Input, Select } from "components";
import { useForm } from "react-hook-form";
import { VALIDATION_RULES, countriesList, currencies } from "data";
import { getFieldHelperText, getUniqueID } from "utils";
import { ErrorIconMini, XMarkIconMini } from "lib/@heroicons";

export const EditInvoiceCard = ({
  errors,
  register,
  onSubmit,
  remove: removeField,
  append: handleAddNewJob,
  fields: jobDetailsArr,
  isMutating,
  error,
  mockData: mock,
}: any) => {
  return (
    <div className="w-9/12 mx-auto">
      <FormHeader />
      <div className="mb-5">
        <h2 className="inline text-2xl font-semibold pr-5">Link</h2>
        <span className="text-sm text-gray-400">#LNK-003</span>
      </div>
      <form onSubmit={onSubmit}>
        <h2 className="text-lg mb-2">Client Information</h2>
        <Input
          placeholder="Full Name"
          {...register("fullName", { required: "This field is required" })}
          helperText={getFieldHelperText("error", errors.fullName?.message)}
        />
        <Input
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: VALIDATION_RULES.isEmail,
              message: "Enter a valid Email",
            },
          })}
          helperText={getFieldHelperText("error", errors.email?.message)}
        />
        {/* Country + Currency */}
        <div className="flex gap-2">
          {/* country */}
          <Select
            options={countriesList}
            className="w-2/3"
            placeholder="Country"
            {...register("country", {
              required: "This field is required",
            })}
            helperText={getFieldHelperText("error", errors.country?.message)}
          ></Select>
          {/* currency */}
          <Select
            options={currencies}
            className="w-1/3"
            placeholder="Currency"
            {...register("currency", {
              required: "This field is required",
            })}
            helperText={getFieldHelperText("error", errors.currency?.message)}
          ></Select>
        </div>
        {/* job details */}
        <div className="job-details mb-8">
          {/* Job details */}
          {jobDetailsArr.map((job: any, idx: number) => {
            return (
              <JobDetails
                register={register}
                errors={errors}
                index={idx}
                deleteJobFn={removeField}
                key={job.id}
                withRemoveIcon={idx == 0 ? false : true}
              />
            );
          })}
          {/* new added job details fields */}
          <span
            className="cursor-pointer text-blue-light mb-8"
            onClick={() =>
              handleAddNewJob({ itemName: "", price: "", description: "" })
            }
          >
            Add item or service
          </span>
        </div>
        <Button fullWidth={true} className="font-semibold" type="submit">
          {isMutating ? "Loading..." : "Update Invoice"}
        </Button>
        <span className="text-red text-xs text-center mb-3 block">
          {error && error}
        </span>
        <Button
          fullWidth={true}
          className="bg-white !text-blue-light border border-gray-300 hover:bg-white font-semibold"
        >
          Back
        </Button>
      </form>
    </div>
  );
};

const JobDetails = ({
  register,
  errors,
  index = "",
  withRemoveIcon = true,
  deleteJobFn,
}: any) => {
  return (
    <div className="base-job-details mb-8">
      <div className="flex justify-between items-center  mb-3">
        <h2 className="text-lg mb-2">Job Details</h2>{" "}
        {withRemoveIcon && (
          <span className="cursor-pointer w-4 h-4 border rounded-full flex justify-center items-center">
            {" "}
            <XMarkIconMini
              className="w-3 h-3"
              onClick={() => deleteJobFn(index)}
            />{" "}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Job title"
          className="w-2/3"
          {...register(`jobDetails.${index}.itemName`, {
            required: "This field is required",
          })}
          helperText={getFieldHelperText(
            "error",
            errors.jobDetails?.[index]?.itemName?.message
          )}
        />
        <Input
          placeholder="$0.00"
          className="w-1/3 text-center placeholder:text-center"
          {...register(`jobDetails.${index}.price`, {
            required: "This field is required",
            pattern: {
              value: VALIDATION_RULES.isNumber,
              message: "Only Numbers are valid",
            },
          })}
          helperText={getFieldHelperText(
            "error",
            errors.jobDetails?.[index]?.price?.message
          )}
        />
      </div>
      <textarea
        id=""
        rows={5}
        placeholder="Description"
        className=" w-full border-gray focus:ring-0 focus:border-blue rounded-md  resize-none"
        {...register(`jobDetails.${index}.description`, {
          required: "This field is required",
        })}
      ></textarea>
      {errors.jobDetails?.[index]?.description && (
        <p className="inline-flex min-h-[20px] text-xs text-red mt-1">
          <ErrorIconMini className="w-5 h-5" />{" "}
          {errors.jobDetails?.[index]?.description.message}
        </p>
      )}
    </div>
  );
};

export default EditInvoiceCard;
