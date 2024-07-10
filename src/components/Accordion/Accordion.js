// Accordion.js

import { FaAngleDown } from "react-icons/fa";

export default function Accordion(props) {
  return (
    <>
      <div className=" tw-border-b tw-border-[#054776]">
        <button
          className="tw-w-full tw-text-[#054776]   tw-bg-transparent tw-py-4  tw-flex sm:tw-text-[18px] tw-text-[15px] tw-justify-between  tw-text-left
                            tw-transition tw-duration-300"
          onClick={props.toggleAccordion}
        >
          <p className=" m-0 tw-font-semibold tw-text-[20px]">{props.title}</p>
          


          <div className='  tw-w-12 tw-flex tw-justify-end  tw-text-center'>
           <div className=" tw-w-12 tw-flex tw-justify-center tw-items-center tw-h-12 tw-rounded-xl tw-bg-[#054776]">
           <FaAngleDown color="white" />
           </div>
          </div>


        </button>
        {props.isOpen && (
        <div className="  tw-text-[#054776]  tw-font-medium  tw-pb-4 sm:tw-text-[16px] tw-text-[13px]">{props.data}</div>
      )}
      </div>

     
    </>
  );
}
