import React from 'react'
import { NoSsr, Card} from "components";

export const Contant3 = ({showLinks,statusFilter,handleStatusFilterChange}:any) => {
  return (
    <NoSsr>     
    <div>
   {showLinks && ( 
        <Card className="fixed right-[454px] top-[155px] pr-6">
            <ul>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="active"    onChange={handleStatusFilterChange}/>
                    Active
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="inactive"    onChange={handleStatusFilterChange}/>
                    inactive
                </label>
                </li>

                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="rejected"    onChange={handleStatusFilterChange}/>
                    rejected
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" value="pending"    onChange={handleStatusFilterChange}/>
                    pending
                </label>
                </li>
            </ul>
            </Card>
         )} 
        </div>
        </NoSsr>
  )
}
export default Contant3;