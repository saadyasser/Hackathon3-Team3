import React from 'react'
import { NoSsr, Card} from "components";

export const Contant2 = ({showInvoice,statusFilter}:any) => {
  return (
    <NoSsr>     
    <div>
    {showInvoice && ( 
        <Card className="fixed right-[454px] top-[155px] pr-6">
            <ul>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="sent" />
                    sent
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="paid" />
                    paid
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="pending "/>
                    pending 
                </label>
                </li>

                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name=" rejected"/>
                    rejected
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="refunded"/>
                    refunded
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="cancelled"/>
                    cancelled
                </label>
                </li>
            </ul>
            </Card>
       )} 
        </div>
        </NoSsr>
  )
}
export default Contant2;