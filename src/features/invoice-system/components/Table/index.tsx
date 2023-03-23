import React, { useEffect, useState } from "react";
import { Skeleton, NoSsr, Button } from "components";
import { API_ENDPOINT } from "data";
import { getAuthorizationHeader } from "utils";
import StatusMap from "./StatusMap";
import Pagination from "./Pagination";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import { useLogout } from "features/authentication";

export const Table = () => {
  const logout = useLogout();
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
  // const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const onPageChange = (page: any) => {
    setOffset(page);
  };
  //     useEffect(()=>{
  // const getListInvose=async()=>{
  //     try{
  //         const { data } = await axios.get(
  //             `${API_ENDPOINT}/invoice/listing?search=${search}&limit=${perPage}&offset=${offset}&sort=${sortOrder}`,
  //             {
  //               headers: {
  //                 Authorization: token,
  //               },
  //             }
  //           );
  //           setData(data.data.invoices);
  //           console.log(data.data.invoices);
  //           setTimeout(() => {
  //             setLoading(false);
  //           }, 300);
  //     }catch(err){
  //         console.log(err);
  //     }
  // }
  // getListInvose();
  //     },[perPage, sortOrder, search, token, offset])
  const data = [
    {
      id: 1,
      name: "React Native Mobile App Development",
      data: "Today By PayPal",
      subTotal: 450,
      client: "Omar Ziara",
      status: "sent",
    },
    {
      id: 2,
      name: "Marketing for noon websites",
      data: "Yesterday",
      subTotal: 200,
      client: "Omar Ziara",
      status: "pending",
    },
    {
      id: 3,
      name: "UI/UX Design for Noon Website",
      data: "Today By PayPal",
      subTotal: 450,
      client: "Omar Ziara",
      status: "canceled",
    },
    {
      id: 4,
      name: "React Native Mobile App Development",
      data: "Today By PayPal",
      subTotal: 450,
      client: "Omar Ziara",
      status: "inactive",
    },
    {
      id: 5,
      name: "React Native Mobile App Development",
      data: "Today By PayPal",
      subTotal: 450,
      client: "Omar Ziara",
      status: "sent",
    },
    {
      id: 6,
      name: "React Native Mobile App Development",
      data: "Today By PayPal",
      subTotal: 450,
      client: "Omar Ziara",
      status: "paid",
    },
    {
      id: 2,
      name: "Marketing for noon websites",
      data: "Yesterday",
      subTotal: 200,
      client: "Omar Ziara",
      status: "pending",
    },
    {
      id: 2,
      name: "Marketing for noon websites",
      data: "Yesterday",
      subTotal: 200,
      client: "Omar Ziara",
      status: "sent",
    },
  ];
  return (
    <NoSsr>
      <Button onClick={logout}>Logout</Button>
      <div className="text-[14px] text-[#9E9E9E] border-b cursor-pointer">
        <Tab.Group>
          <Tab.List className="p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "py-2.5 px-3 focus:outline-none ",
                  selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                )
              }
            >
              All
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "py-2.5 px-3 focus:outline-none ",
                  selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                )
              }
            >
              Invoices
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "py-2.5 px-3 focus:outline-none",
                  selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                )
              }
            >
              Links
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
      <table className="w-full text-sm text-left text-gray-500  ">
        <thead className="text-xs text-gray-700 uppercase bg-white border-b ">
          <tr className="text-[#9E9E9E] ">
            <th className="px-8 py-4">
              {" "}
              <div className="flex">
                Name
                <span className="ml-2 mt-1">
                  <ArrowsUpDownIcon className="h-3 w-3" />
                </span>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Amount{" "}
                <span className="ml-2 mt-1">
                  <ArrowsUpDownIcon className="h-3 w-3" />
                </span>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Client{" "}
                <span className="ml-2 mt-1">
                  <ArrowsUpDownIcon className="h-3 w-3" />
                </span>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Status{" "}
                <span className="ml-2 mt-1">
                  <ArrowsUpDownIcon className="h-3 w-3" />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-light border-b  hover:cursor-pointer  px-8 py-2"
              onClick={() => console.log(item.id)}
            >
              <td className=" px-8 py-2">
                {item.name}
                <br />
                <span className="text-[12px] text-[#BEC2C6]  px-8 py-2">
                  {item.data}
                </span>
              </td>
              <td className="px-8 py-2">${item.subTotal}</td>
              <td>{item.client}</td>
              <td className="px-8 py-2">
                <StatusMap status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
        <Pagination
          items={data.length} // 100
          offset={offset} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </table>
    </NoSsr>
  );
};

export default Table;
