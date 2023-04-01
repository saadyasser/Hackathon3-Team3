import { LeftArrowIcon } from "lib/@heroicons";
import { useState } from "react";

const Drawel = (props:any) => {
    // console.log(props)

    const [showDrawel, setShowDrawel] = useState(false);

    const toggleDrawel = () => {
        setShowDrawel((prevState) => !prevState);
    };

    const closeDrawel = () => {
        setShowDrawel(false)
    }

    return (
        <div>
            <button onClick={toggleDrawel} className="border p-2 bg-blue-500 rounded mt-4 text-white" >Toggle Drawel</button>
            {showDrawel && (
                <>
                    <div className="drawel fixed top-0 right-0 h-screen w-4/12 bg-[#F2F4F7] border z-10 overflow-y-auto scrollbar-thumb-purple-500 scrollbar-track-gray-300">
                        <div className="flex gap-44 mt-3">
                            <button onClick={closeDrawel}>
                                <LeftArrowIcon className="w-6 h-6 ml-2" />
                            </button>
                            <h2 className="font-bold">Invoice</h2>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Drawel;
