import React,{useState}from 'react'
import {AdjustmentsHorizontalIcon,MagnifyingGlassIcon ,Send,PlusIconMini} from "lib/@heroicons";
import { NoSsr,Input,Button,Card,Link} from "components";
import { URL_PATHS } from "data"
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
  
  )
}
export default Search;
 {/* {showInvoice &&
  (

    <div className="shadow-md absolute text-center bg-white rounded-md w-[200px] p-4 top-12 right-0 text-sm leading-6 cursor-pointer">
   
</div>



 */}
   
    
    
//  <div className=" flex justify-center text-center cursor-pointer ">
//  <div className='w-[88px] bg-[#FFFFFF] h-[40px] px-4 ml-4 py-2 text-[#4375FF] rounded flex'> <span className=''><PlusIconMini height={24} width={24}/></span>Link</div>
// <div  className='w-[88px] bg-[#FFFFFF] h-[40px] px-4 relative  ml-4  py-2 text-[14px] rounded text-[#707070] 'onClick={optionInvoice}><div className='flex'><span className='px-1 -ml-2'><Send width={18} height={18} className="text-[#4375FF]"/></span><span className='text-[#4375FF]'>Invoice</span>
// {showInvoice &&
// (

//  <div className="shadow-md absolute text-center bg-white rounded-md w-[200px] p-4 top-12 -right-10 text-sm leading-6 cursor-pointer">
//   <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Active</label>
//      <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Inactive</label>
//     <label className="flex flex-row justify-start "><input type="checkbox"  className="ml-2 mr-4 flex "/>Pending Payment</label>
//     <label className="flex flex-row justify-start" ><input type="checkbox"  className="ml-2 mr-4 flex"/>Pending </label>
//   <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Disapproved</label>

// </div>
// )}
// </div>

//    </div>
//    <div className='w-[88px] bg-[#FFFFFF] h-[40px] px-4 ml-4 py-2 relative text-[#707070] rounded flex' onClick={optionTest}> <span className=''><AdjustmentsHorizontalIcon height={24} width={24}/></span>Filter
//    {showSelect &&
// (

//  <div className="shadow-md absolute text-center bg-white rounded-md w-[200px] p-4 top-12 right-0 text-sm leading-6 cursor-pointer">
// <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 inlnie"/>Paid</label>
// <label className="flex flex-row justify-start"><input type="checkbox" className="ml-2 mr-4 flex"/>Sent</label>
// <label className="flex flex-row justify-start "><input type="checkbox"  className="ml-2 mr-4 flex "/>Pending Payment</label>
// <label className="flex flex-row justify-start" ><input type="checkbox"  className="ml-2 mr-4 flex"/>Pending </label>
// <label className="flex flex-row justify-start "><input type="checkbox"  className="ml-2 mr-4 flex"/>Canceled</label>
// <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Active</label>
// <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Inactive</label>
// <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Disapproved</label>
// <label className="flex flex-row justify-start"><input type="checkbox"  className="ml-2 mr-4 flex"/>Refunded</label>


// </div>
// )}