import React from 'react'
import { NoSsr, Card} from "components";

export const Contant3 = ({showLinks}:any) => {
  return (
    <NoSsr>     
    <div>
   {showLinks && ( 
        <Card className="fixed right-[454px] top-[155px] pr-6">
            <ul>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="active" value="Active"/>
                    Active
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="inactive" value="inactive"/>
                    inactive
                </label>
                </li>

                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="rejected" value="rejected"/>
                    rejected
                </label>
                </li>
                <li>
                <label className="text-[#707070] text-sm">
                    <input type="checkbox" className="mr-4" name="pending" value="pending"/>
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