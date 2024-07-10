import React, { useState } from 'react'
import Accordion from '../Accordion/Accordion';

const FAQ = () => {
    const [accordions, setAccordion] = useState([
        {
          key: 1,
          title:
            "What is Crypto Pannel Token?",
          data: "Through Buy4Less, $EBM holders can purchase various cryptocurrencies at discounted rates ranging from 0.1% to 10% basing on monthly average $EBM holdings.",
          isOpen: false,
        },
        {
          key: 2,
          title:
            "What cryptocurrencies can I use to purchase?",
            data: "This staking opportunity is exclusive to the presale buyers to grow their investment with native $EBM token rewards during the presale before listing $EBM for trade for limited period.",
            isOpen: false,
        },
        {
          key: 3,
          title:
            "How can I participate in the Crypto Website?",
            data: "By staking $EBM tokens, community members can earn passive income through daily automated distribution of 40-60% of the company's revenue, fostering community engagement and financial growth.",
            isOpen: false,
        },
        {
          key: 4,
          title: "How do I benefit from the Crypto Website Token?",
          data: "Upon starting of operations, the program start will be announced. Like staking in native token rewards but this staking will reward in USDT/USDC on daily basis.",
          isOpen: false,
        },
        {
          key: 5,
          title:
            "How do I benefit from the Pannel Token?",
            data: "Other than Buy4Less and Stake4PIE, we aim to boost growth of True DeFi blockchains like Bitcoin, Litecoin, Zilliqa, Ethereum Classic, Raven, Kaspa, Dodge, BlockDAG etc.",
            isOpen: false,
        }
      ]);
    
      const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
          if (accord.key === accordionkey) {
            return { ...accord, isOpen: !accord.isOpen };
          } else {
            return { ...accord, isOpen: false };
          }
        });
    
        setAccordion(updatedAccordions);
      };
  return (
    <div className=" tw-bg-white   tw-bg-no-repeat tw-w-full tw-bg-cover  tw-py-24  tw-h-auto ">
       
      <div className=" container">
      <div className='row tw-items-center'>
        <div className='col-lg-12 col-md-12'>
        <h5 className=" tw-font-semibold  tw-flex tw-items-end tw-gap-2 tw-text-2xl sm:tw-text-start tw-text-center  tw-text-[#003459]">  <p className='  tw-w-14  tw-h-[2px] tw-bg-[#003459]'></p> FAQS</h5>

        <h1 className="  tw-font-semibold tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#003459]">Frenquently Questions</h1>
        <div className="  tw-mt-12">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
        </div>
        {/* <div className="col-lg-6 col-md-12  tw-relative">
           
               <div className='row'>
                <div className='col-md-10 tw-mx-auto'>
                <img
                  src={require("../../assets/images/faq.png")}
                  className=" tw-w-full"
                />
                </div>
               </div>
             
           
          </div> */}
      </div>
      </div>
    </div>
  )
}

export default FAQ
