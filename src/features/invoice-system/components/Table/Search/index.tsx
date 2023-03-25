import React, { useState } from "react";
import {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
    Send,
    PlusIconMini,
} from "lib/@heroicons";
import { NoSsr, Input, Button, Card, Link } from "components";
import { URL_PATHS } from "data";
export const Search = ({searchValue,setSearchValue,setAllTab,setInvoiceTab,showLinks,setServiceTab,showInvoice,setData,data,setshowLinks,setToggle,setShowInvoice,toggle}:any) => {
    const [filter, setFilter] = useState({
        all: true,
        invoice: false,
        service: false,
      });
    
    
    console.log(filter);

    // const filteredData = data.filter((item:any) => {
    //     if (filter.all) {
    //       return true;
    //     } else if (filter.invoice) {
    //       const invoiceStatuses = ['sent', 'paid', 'pending', 'rejected', 'refunded', 'cancelled'];
    //       if (invoiceStatuses.includes(item.status)) {
    //         return true;
    //       }
    //     } else if (filter.service) {
    //       const serviceStatuses = ['active', 'inactive', 'rejected', 'pending'];
    //       if (serviceStatuses.includes(item.status)) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   });
    
      const handleFilterChange = () => {
        setToggle(!toggle);
        setShowInvoice(!showInvoice);
        setshowLinks(!showLinks);
      };
    
    return (
        <NoSsr>
        <div className="flex gap-10">
            <div className="w-[50%]">
            <Input
                className=""
                inputClassName="pl-12 text-sm"
                startIcon={<MagnifyingGlassIcon className="w-5" />}
                placeholder="Search for invoice, title, client or description"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            </div>
            <div className="flex gap-3">
            <Button
                buttonSize="medium"
                className="flex justify-center items-center 
                        h-12 bg-[#ffffff] text-[#4375FF] hover:bg-[#ffffff]"
            >
                <PlusIconMini className="w-6 h-6 pr-2" />
                Link
            </Button>
            <Link href={URL_PATHS.HOME}>
                <Button
                buttonSize="medium"
                className="flex justify-center items-center 
                        h-12 bg-[#ffffff] text-[#4375FF] hover:bg-[#ffffff]"
                >
                <Send className="w-6 h-6 pr-2" />
                Invoice
                </Button>
            </Link>
            <Button
            onClick={handleFilterChange}
                buttonSize="medium"
                className="flex justify-center items-center 
                        h-12 bg-[#ffffff] text-[#707070] hover:bg-[#ffffff]"
            >
                <AdjustmentsHorizontalIcon className="w-6 h-6 pr-2" />
                Filter
            </Button>
       
         
            </div>
        </div>
        </NoSsr>
    );
};
export default Search;