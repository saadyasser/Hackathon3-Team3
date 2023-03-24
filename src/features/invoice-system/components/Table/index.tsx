import React, { useEffect, useState } from "react";
import { Skeleton, NoSsr, Button } from "components";

import StatusMap from "./StatusMap";
import Pagination from "./Pagination";

import useSwrFetch from "hooks/useSwrFetch";

import classNames from "classnames";
import { Tab } from "@headlessui/react";

export const Table = ({searchValue}:any) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredValue, setFilteredValue] = useState();
  const [type, setType] = useState("all");
  const [activeTab, setActiveTab] = useState(null);
  const [dropdownTab, setDropdownTab] = useState(null);

  // const pageCount = () => Math.floor(data?.pageSize / 5);


 const {data: d, error, isLoading} = useSwrFetch(`/transactions/invoice-service-listing?offset=${currentPage}&limit=10&sort=${sortOrder}&search=${searchValue}&type={type}`, {method: "GET", headers: {}});
 console.log(d, error, isLoading);
 useEffect(()=>{
  if(d)setData(d.data?.transactions);
 },[d])
  
const sortData = (property) => {
  const sortedData = [...data].sort((a, b) => a[property] > b[property] ? 1 : -1);
  setData(sortedData);
}
const NextPaginate = () => {
  setCurrentPage((prev) => prev + 1);
};
const PrevPaginate = () => {
  setCurrentPage((prev) => prev - 1);
};
const paginateCount = () => Math.floor(d?.count / 5);


  return (
    <NoSsr>
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
      <table className="w-full text-sm text-left text-gray-500 cursor-pointer  ">
        <thead className="text-xs text-gray-700 uppercase bg-white border-b ">
          <tr className="text-[#9E9E9E] ">
            <th className="px-8 py-4">
              {" "}
              <div className="flex ">
                Name
                <div className="flex flex-col ml-2 -mt-2 mr-3">
                <p onClick={() => sortData('"name')}>
                  &#9650;
                </p>
                <p onClick={() =>sortData('"-name')}>&#9660;</p>
                </div>
                Date
                <div className="flex flex-col ml-2 -mt-2">
                <p onClick={() =>sortData('data')}>
                  &#9650;
                </p>
                <p onClick={() =>sortData('data')}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4 ml-4">
                {" "}
                Amount{" "}
                <div className="flex flex-col ml-2 -mt-2">
                <p onClick={() =>sortData('subTotal')}>
                  &#9650;
                </p>
                <p onClick={() =>sortData('subTotal')}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Client{" "}
                <div className="flex flex-col ml-2 -mt-2">
                <p onClick={() =>sortData('fullName')}>
                  &#9650;
                </p>
                <p onClick={() =>sortData('fullName')}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Status{" "}
                <div className="flex flex-col ml-2 -mt-2">
                <p onClick={() =>sortData('status')} >
                  &#9650;
                </p>
                <p onClick={() =>sortData('status')}>&#9660;</p>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
        {!isLoading&& data.length === 0 && <tr>No data found</tr>}
          {data && data.map((item) => ( 
            <tr
                key={item._id}
                className="hover:bg-gray-light border-b  hover:cursor-pointer  px-8 py-2"
                onClick={() => console.log(item._id)}
              >
                <td className=" px-8 py-2">
                  {item.invoice?.fixed?.itemName||item.service?.fixed?.itemName}
                  <br />
                  <span className="text-[12px] text-[#BEC2C6]  px-8 py-2">
                    <FormatData updatedAt={item.updatedAt}/>
                  </span>
                </td>
                <td className="px-8 py-2">${item.invoice?.subTotal}</td>
                <td>{item.invoice?.client?.fullName||item.service?.client?.fullName}</td>
                <td className="px-8 py-2">
                <StatusMap status={item.invoice?.status} />
                </td>
              </tr>
            ))}
            {/* <tr ><td className="text-center m-auto left-[50%]">  <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        setData={setData}
      /></td></tr> */}
        </tbody>
       
        <div className="text-center left-[50%]">
      
        {currentPage > 0 && (<button onClick={PrevPaginate} className="p-1 cursor-pointer"><span>&#8826;</span> </button>     )}
        
          <span className="px-2"> Page {currentPage} - {paginateCount()}</span>
        {currentPage < paginateCount() && ( <button onClick={NextPaginate} className="p-1 cursor-pointer" > <span>&#8827;</span></button>  )}    
          </div>
      </table>
    </NoSsr>
  );
};
export function FormatData({updatedAt}:any) {
  const dateObject = new Date(updatedAt);
  const dayString = dateObject.toLocaleDateString("en-US",{ weekday: "long", hour: "numeric"});
  return (
    <div>{dayString}</div>
  )
}
export default Table;
