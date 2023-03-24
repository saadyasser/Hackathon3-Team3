import React, { useEffect, useState } from "react";
import { Skeleton, NoSsr, Button } from "components";
import { API_ENDPOINT } from "data";
import { getAuthorizationHeader } from "utils";
import StatusMap from "./StatusMap";
import Pagination from "./Pagination";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import useSwrFetch from "hooks/useSwrFetch";
import axios from "axios";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import { timeStamp } from "console";
import { useLogout } from "features/authentication";

export const Table = () => {
  const logout = useLogout();
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("all");
  const pageSize = 10;

  function handleType(type: string) {
    console.log('test');
    console.log(type);
    
    setType(type)
  }
  

  const {data: d, error, isLoading} = useSwrFetch(`/transactions/invoice-service-listing?limit=10&sort=-createdAt&offset=0&type=${type}`, {method: "GET", headers: {}});
  console.log(d, error, isLoading);
  console.log(d)
  // if(isLoading) {
    
  // }
  function getTableData() {
    return axios.get(
      `${API_ENDPOINT}/transactions/invoice-service-listing?limit=10&sort=-createdAt&offset=0&type=${type}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTableData();
    setData(result.data?.data.transactions);
      console.log(result.data?.data.transactions);
    };
    fetchData();
  }, []);
  // const date = new Date(timestamp);
  // const formattedTime = date.toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   hour12: true,
  // });
  return (
    <NoSsr>
      <Button onClick={logout}>Logout</Button>
      <div className="text-[14px] text-[#9E9E9E] border-b cursor-pointer">
        <Tab.Group>
          <Tab.List className="p-1">
            <Tab
            onClick={()=> handleType("all")}
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
                onClick={()=> handleType("invoice")}
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
            onClick={()=> handleType("service")}
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
      <table className="w-full text-sm text-left text-gray-500 cursor-pointer  ">
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
          {d && d.data?.transactions.map((item) => ( 
            <tr
                key={item._id}
                className="hover:bg-gray-light border-b  hover:cursor-pointer  px-8 py-2"
                onClick={() => console.log(item._id && item.invoice?.client.fullName) }
              >
                <td className=" px-8 py-2">
                  { item.invoice?.fixed[0].itemName || item.service?.fixed[0].itemName }
                  <br />
                  <span className="text-[12px] text-[#BEC2C6]  px-8 py-2">
                  {item.updatedAt}
                  </span>
                </td>
                <td className="px-8 py-2">${item.invoice?.subTotal || item.service?.subTotal}</td>
                <td>{item.invoice?.client.fullName}</td>
                <td className="px-8 py-2">
                <StatusMap status={item.invoice?.status || item.service?.status} />
                </td>
              </tr>
            ))}
        </tbody>
        {/* <div className="text-center left-[50%]">
          {offset > 0 && ( <button onClick={handlePrevPage} className="p-1 cursor-pointer" disabled={offset === 1}>&#8826;</button>  )}
          <span className="px-2">Page {offset} - {pageCount()}</span>
          {offset < pageCount() && ( <button onClick={handleNextPage} className="p-1 cursor-pointer" disabled={offset === totalPages}>&#8827;</button>  )}
          </div> */}
      </table>
    </NoSsr>
  );
};

export default Table;
