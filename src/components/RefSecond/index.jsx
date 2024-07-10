import React from 'react'

const RefSecond = () => {
  return (
    <div className='container'>
         <div className="row    g-3 tw-pt-16">
          <div className=" col-md-6">
            <div className=" tw-border-2 tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center tw-p-2 tw-border-[#003459]">
              
              <div>
                <img src={require('../../assets/images/files.png')} className=" tw-w-12" alt="" />
              </div>

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-[#003459]  tw-font-semibold tw-text-2xl">Transection History    </span>
                <p className=" tw-pt-1 tw-m-0 tw-text-xl  tw-leading-4 tw-font-semibold tw-text-[#003459] tw-border-[#003459] tw-border-b">Here</p>
              </div>


            </div>
          </div>
          <div className=" col-md-6">
            <div className=" tw-border-2 tw-flex tw-rounded-md tw-justify-center  tw-gap-2 tw-items-center tw-p-2 tw-border-[#003459]">
              
              <div>
                <img src={require('../../assets/images/market.png')} className=" tw-w-12" alt="" />
              </div>

              <div className=" tw-flex tw-items-center tw-gap-4">
                <span className=" tw-text-[#003459]   tw-font-semibold tw-text-2xl">Marketing Budget    </span>
                <p className=" tw-pt-1 tw-m-0 tw-text-xl  tw-leading-4 tw-font-bold tw-text-[#003459] tw-border-[#003459] tw-border-b">ADDRESS</p>
              </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default RefSecond
