import React from 'react'
import { NoSsr, Card} from "components";
export const Contant1 = ({toggle,statusFilter}:any) => {
  return (
    <NoSsr>     
        <div>
        {toggle && (
        <Card className="fixed right-[454px] top-[155px] pr-6">
            <ul>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4 " name="paid" />
                    Paid
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="sent"  />
                    Sent
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="pendingPayment" />
                    Pending Payment
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="canceled" />
                    Canceled
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="active" />
                    Active
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="inactive" />
                    Inactive
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="disapproved" />
                    Disapproved
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="refunded" />
                    Refunded
                </label>
                </li>
            </ul>
            </Card>
         )}
            </div>
       </NoSsr>
  )
}
export default Contant1;
