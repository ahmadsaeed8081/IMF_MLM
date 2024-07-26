import React from "react";
import { Link } from "react-router-dom";


import {
  usdt_address,
  token_abi,
  cont_address,
  cont_abi,
} from "../../configs/Contracts";

const Footer = () => {
  return (
 
       <div className="  tw-bg-[#054776]">
        <div className="container tw-py-1 ">
          <div className="row g-4 tw-items-center">
            <div className="col-md-2">
             <div className=" tw-flex  sm:tw-justify-start tw-justify-center tw-items-center tw-gap-2"> 
             <div>
             <img src={require("../../assets/images/white_logo.png")} className="" />
             </div>
           <div>
           <h2 className="   tw-font-bold tw-text-white">IMF</h2>
           </div>
             </div>
             
             
            </div>

            <div className='col-md-4'>
            <div className=" border tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center  tw-border-white">
              
              <div>
                <img src={require('../../assets/images/files.png')} className=" tw-w-12" alt="" />
              </div>
              <Link to={'https://polygonscan.com/address/'+cont_address} target="_blank" className=" ">

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-white tw-font-semibold tw-text-xl">Transection History    </span>
                <p className=" tw-pt-1 tw-m-0 tw-text-lg  tw-leading-4 tw-font-semibold tw-text-white tw-border-white tw-border-b">Here</p>
              </div>

              </Link>

            </div>
            </div>
            <div className='col-md-4'>
            <div className=" border tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center tw-border-[#003459]">
              
              <div>
                <img src={require('../../assets/images/market.png')} className=" tw-w-12" alt="" />
              </div>
              <Link to={'https://polygonscan.com/address/0x4306B92EBd008c1bf48e96C8680d45E6Ae5edFC6'} target="_blank" className=" ">

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-white  tw-font-semibold tw-text-xl">Marketing Budget    </span>
                <p className=" tw-pt-1 tw-m-0   tw-leading-4 tw-font-bold tw-text-white tw-border-white tw-border-b">Address</p>
              </div>
              </Link>


            </div>
            </div>

            <div className="col-md-2">
            <ul className=" tw-p-0 tw-pt-4 sm:tw-justify-end tw-justify-center tw-flex tw-gap-2 tw-items-center">
                <li>
                  <Link to={'https://www.facebook.com/groups/imfunding'} target="_blank" className=" ">
                   <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/facebook-02.png")} />
                   </div>
                
                  </Link>
                </li>
                <li>
                  <Link to={'https://chat.whatsapp.com/IRMlIsWP3WS1YbHuoV7Fwu'} target="_blank" >
                  <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/whatsapp.png")} />
                   </div>
                  </Link>
                </li>
                <li>
                  <Link to={'https://t.me/IMFunding'} target="_blank" >
                  <div className="  tw-bg-white tw-w-11  tw-rounded-md tw-flex tw-justify-center tw-items-center tw-h-11">
                   <img src={require("../../assets/images/iconoir_telegram.png")} />
                   </div>
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
  
  );
};

export default Footer;
