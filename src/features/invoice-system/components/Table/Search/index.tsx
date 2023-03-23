import React, { useState } from "react";
import {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
    Send,
    PlusIconMini,
} from "lib/@heroicons";
import { NoSsr, Input, Button, Card, Link } from "components";
import { URL_PATHS } from "data";
export const Search = () => {
    const [filter, setFilter] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);
    console.log(filter);

    function handleFilterClick() {
        // setFilter({ status });
    }

    return (
        <NoSsr>
        <div className="flex gap-10">
            <div className="w-[50%]">
            <Input
                className=""
                inputClassName="pl-12 text-sm"
                startIcon={<MagnifyingGlassIcon className="w-5" />}
                placeholder="Search for invoice, title, client or description"
            />
            </div>
            <div className="flex gap-3">
            <Button
                buttonSize="medium"
                onClick={() => setShowInvoice(!showInvoice)}
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
                onClick={() => setToggle(!toggle)}
                buttonSize="medium"
                className="flex justify-center items-center 
                        h-12 bg-[#ffffff] text-[#707070] hover:bg-[#ffffff]"
            >
                <AdjustmentsHorizontalIcon className="w-6 h-6 pr-2" />
                Filter
            </Button>
            {toggle && (
                <Card className="fixed right-[458px] top-[155px] pr-6">
                <ul>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4 " />
                        Paid
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Sent
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Pending Payment
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Pending Payment
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Canceled
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Active
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Inactive
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Disapproved
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Refunded
                    </label>
                    </li>
                </ul>
                </Card>
            )}
            {showInvoice && (
                <Card className="fixed right-[458px] top-[155px] pr-6">
                <ul>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Active
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Inactive
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Pending Payment
                    </label>
                    </li>

                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Pending
                    </label>
                    </li>
                    <li>
                    <label className="text-[#707070] text-sm">
                        <input type="checkbox" className="mr-4" />
                        Disapproved
                    </label>
                    </li>
                </ul>
                </Card>
            )}
            </div>
        </div>
        </NoSsr>
    );
};
export default Search;