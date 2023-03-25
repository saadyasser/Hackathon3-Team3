import React, { useEffect, useState } from "react";
import { Skeleton, NoSsr, Button } from "components";
import StatusMap from "./StatusMap";
import useSwrFetch from "hooks/useSwrFetch";
import classNames from "classnames";
import { Tab } from "@headlessui/react";
import Contant1 from "./Search/Contant1";
import Contant2 from "./Search/Contant2";
import Contant3 from "./Search/Contant3";
import NameDisplay from "./NameDisplay";
import ReactPaginate from "react-paginate";
export const Table = ({
  searchValue,
  serviceTab,
  allTab,
  invoiceTab,
  showInvoice,
  toggle,
  data,
  setData,
  showLinks,
}: any) => {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const [sortOrder, setSortOrder] = useState("asc");
  const [type, setType] = useState("all");
  const [statusFilter, setStatusFilter] = useState("sent");
  const pagesVisited = pageNumber * usersPerPage;

  function handleType(type: string) {
    console.log("test");
    console.log(type);

    setType(type);
  }

  const {
    data: d,
    error,
    isLoading,
  } = useSwrFetch(
    `/transactions/invoice-service-listing?offset=${pageNumber}&limit=20&sort=${sortOrder}&search=${searchValue}&type=${type}&filter=${statusFilter}`,
    { method: "GET", headers: {} }
  );

  console.log(d, error, isLoading);

  useEffect(() => {
    if (d) setData(d.data?.transactions);
  }, [d]);

  const sortData = (property: any) => {
    const sortedData = [...data].sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
    setData(sortedData);
  };
  const handleStatusFilterChange = (event: any) => {
    setStatusFilter(event.target.value);
  };

  const pageCount = Math.ceil(data?.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <NoSsr>
      <div className="text-[14px] text-[#9E9E9E] border-b cursor-pointer">
        <Tab.Group>
          <Tab.List className="p-1">
            {allTab && (
              <Tab
                value="all"
                onClick={(e) => handleType("all")}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 px-3 focus:outline-none ",
                    selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                  )
                }
              >
                All
              </Tab>
            )}
            {invoiceTab && (
              <Tab
                value="invoices"
                onClick={(e) => handleType("invoice")}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 px-3 focus:outline-none ",
                    selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                  )
                }
              >
                Invoices
              </Tab>
            )}
            {serviceTab && (
              <Tab
                value="links"
                onClick={(e) => handleType("service")}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 px-3 focus:outline-none",
                    selected ? "border-b-2 border-[#4375FF] text-[#4375FF]" : ""
                  )
                }
              >
                Links
              </Tab>
            )}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div>
                <Contant1
                  toggle={toggle}
                  handleStatusFilterChange={handleStatusFilterChange}
                  statusFilter={statusFilter}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <Contant2
                showInvoice={showInvoice}
                handleStatusFilterChange={handleStatusFilterChange}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Contant3
                showLinks={showLinks}
                handleStatusFilterChange={handleStatusFilterChange}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <table className="w-full text-sm text-left text-gray-500 cursor-pointer  ">
        <thead className="text-xs text-gray-700 uppercase bg-white border-b ">
          <tr className="text-[#9E9E9E] ">
            <th className="px-8 py-4">
              {" "}
              <div className="flex">
                Name
                <div className="flex flex-col ml-2 -mt-2 mr-3">
                  <p onClick={() => sortData('"name')}>&#9650;</p>
                  <p onClick={() => sortData('"-name')}>&#9660;</p>
                </div>
                Date
                <div className="flex flex-col ml-2 -mt-2">
                  <p onClick={() => sortData("data")}>&#9650;</p>
                  <p onClick={() => sortData("-data")}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Amount{" "}
                <div className="flex flex-col ml-2 -mt-2">
                  <p onClick={() => sortData("subTotal")}>&#9650;</p>
                  <p onClick={() => sortData("-subTotal")}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Client{" "}
                <div className="flex flex-col ml-2 -mt-2">
                  <p onClick={() => sortData("fullName")}>&#9650;</p>
                  <p onClick={() => sortData("-fullName")}>&#9660;</p>
                </div>
              </div>
            </th>
            <th>
              <div className="flex px-3 py-4">
                {" "}
                Status{" "}
                <div className="flex flex-col ml-2 -mt-2">
                  <p onClick={() => sortData("status")}>&#9650;</p>
                  <p onClick={() => sortData("status")}>&#9660;</p>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && data?.length === 0 && <tr>No data found</tr>}
          {data &&
            data
              ?.slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item: any) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-light border-b  hover:cursor-pointer  px-8 py-2"
                  onClick={() =>
                    console.log(item._id && item.invoice?.client.fullName)
                  }
                >
                  <td className=" px-8 py-2">
                    <NameDisplay
                      item={
                        item.invoice?.fixed[0]?.itemName ||
                        item.service?.fixed[0]?.itemName
                      }
                    />
                    <br />
                    <span className="text-[12px] text-[#BEC2C6]  px-8 py-2">
                      <FormatData updatedAt={item.updatedAt} />
                    </span>
                  </td>
                  <td className="px-8 py-2">
                    ${item.invoice?.subTotal || item.service?.subTotal}
                  </td>
                  <td>{item.invoice?.client.fullName || "-"}</td>
                  <td className="px-8 py-2">
                    <StatusMap
                      status={item.invoice?.status || item.service?.status}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </NoSsr>
  );
};
export function FormatData({ updatedAt }: any) {
  const dateObject = new Date(updatedAt);
  const dayString = dateObject.toLocaleDateString("en-US", {
    weekday: "long",
    hour: "numeric",
  });
  return <div>{dayString}</div>;
}

export default Table;
