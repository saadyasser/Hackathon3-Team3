import React from "react";
import { NoSsr, Card } from "components";
export const Contant1 = ({
    toggle,
    statusFilter,
    handleStatusFilterChange,
}: any) => {
    return (
        <NoSsr>
        <div>
            {toggle && (
            <Card className="fixed right-[454px] top-[155px] pr-6">
                <ul>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4 "
                        value="paid"
                        onChange={handleStatusFilterChange}
                    />
                    Paid
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="sent"
                        onChange={handleStatusFilterChange}
                    />
                    Sent
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="pending"
                        onChange={handleStatusFilterChange}
                    />
                    Pending
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="cancelled"
                        onChange={handleStatusFilterChange}
                    />
                    Canceled
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="active"
                        onChange={handleStatusFilterChange}
                    />
                    Active
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="inactive"
                        onChange={handleStatusFilterChange}
                    />
                    Inactive
                    </label>
                </li>
                <li>
                    <label className="text-[#707070] text-sm">
                    <input
                        type="checkbox"
                        className="mr-4"
                        value="disapproved"
                        onChange={handleStatusFilterChange}
                    />
                    Disapproved
                    </label>
                </li>
                </ul>
            </Card>
            )}
        </div>
        </NoSsr>
    );
};
export default Contant1;
