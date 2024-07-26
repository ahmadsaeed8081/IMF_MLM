import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import Footer from "../../components/footer";
import Header from "../../components/header";

const FAQS = () => {
  const [accordions, setAccordion] = useState([
    {

      key: 1,
      title: "What is IMF?",
      data: " IMFund is a mutual aid queueing system that enables everyone on the waiting line to get paid double or 60% and above of their donations. IMF maintains a zero balance at all times hence it’s risk free and not susceptible to hackers. The main goal of this project is to save the world from scam and eradicate poverty in the world.",
      isOpen: false,
    },
    {
      key: 2,
      title: "How does IMF earning percentages work?",
      data: "You can earn your cash back and 60% increase of your donation when you don’t invite any member.You can earn 92% when you invite two members, you can earn 76% when you invite one member, And you can 100% and above when you invite more than 3 members",
      isOpen: false,
    },
    {
      key: 3,
      title: "How much is the minimum and maximum?",
      data: "IMF has no minimum or maximum amount. IMF operates on the principle of equality. There is only a fixed amount of 50 USDT Matic for all.      ",
      isOpen: false,
    },
    {
      key: 4,
      title: "Who is the creator of the IMF?",
      data: "Knowing the creator is crucial in a traditional centralized system. Similar to Bitcoin, IMF also utilizes blockchain technology with polygon smart contracts created by anonymous developers. Trust is not necessary when we can validate all transactions on the blockchain. In the IMF, the smart code is our laws.",
      isOpen: false,
    },
    {
      key: 5,
      title: "Can I earn income without recruiting any member?      ",
      data: " Participants can earn up to 60% of their income from each queue cycle without needing to recruit anyone. However, by building a team, they can earn an unlimited amount of $8 from each person they invite. The system model allows both participants and leaders to make unlimited profits.      ",
      isOpen: false,
    },

    {
      key: 6,
      title: "What is the risk of participating in the IMF? ",
      data: " The main downside of being part of the IMF is the time you have to wait. It's similar to the risk of waiting in line at the Bank to withdraw your money.",
      isOpen: false,
    },

    {
      key: 7,
      title: "How does the IMF fund its maintenance and marketing budget when it has a zero balance contract?",
      data: "The IMF has a carefully planned budget for marketing and maintenance costs. The budget is funded by IMF members, who each contribute a small percentage from donations made through the smart contract.      ",
      isOpen: false,
    },
    
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
    <>
      <Header />
      <main className="flex-grow px-4  tw-min-h-screen py-8 md:px-8 md:py-12">
        <div className=" tw-bg-white   tw-bg-no-repeat tw-w-full tw-bg-cover   tw-pb-12 tw-h-auto ">
          <div className=" container">
            <div className="row tw-items-center">
              <div className="col-lg-6 col-md-12">
                <h5 className=" tw-font-semibold  tw-flex tw-items-end tw-gap-2 tw-text-2xl sm:tw-text-start tw-text-center  tw-text-[#003459]">
                  {" "}
                  <p className="  tw-w-14  tw-h-[2px] tw-bg-[#003459]"></p> FAQS
                </h5>

                <h1 className="  tw-font-semibold tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#003459]">
                  Frenquently Questions
                </h1>
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
                <div className="row">
                  <div className="col-md-10 tw-mx-auto">
                    <img
                      src={require("../../assets/images/faqs.png")}
                      className=" tw-w-full"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div>
        
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQS;
