import React from 'react'
import { NoSsr, Card} from "components";

export const Contant2 = ({showInvoice,statusFilter,handleStatusFilterChange}:any) => {
  return (
    <NoSsr>     
    <div>
    {showInvoice && ( 
        <Card className="fixed right-[454px] top-[155px] pr-6">
            <ul>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="sent"   onChange={handleStatusFilterChange}/>
                    sent
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="paid"    onChange={handleStatusFilterChange}/>
                    paid
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="pending "    onChange={handleStatusFilterChange}/>
                    pending 
                </label>
                </li>

                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value=" rejected"   onChange={handleStatusFilterChange}/>
                    rejected
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="refunded"    onChange={handleStatusFilterChange}/>
                    refunded
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="cancelled"   onChange={handleStatusFilterChange}/>
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