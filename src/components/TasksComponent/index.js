import React from "react";

const TasksComponents = (props) => {


  const teamMembers = [
    {
      name: "Total Donations",
      role: Number(props.totalbusiness)/10**6 + " USDT",
      image: require("../../assets/images/d3.png"),
    },
    {
      name: "Position in Queue",
      role: Number(props.position),
      para3:"Your position has been changed due to automatic placement",
  
      image: require("../../assets/images/d2.png"),
    },
    {
      name: "Donation Placement",
      role: ((Number(props.donation_ahead_count)*16) + Number(props.donationCount) )+ " times (" + Number(props.totalDonation)/10**6 +" USDT)",
      
      para3: ((Number(props.donation_ahead_count)*16) + Number(props.donationCount) ) > 0 ?
      ((16 - Number(props.donationCount)) +" donations left to move ahead of queue") : (null),


      para4:Number(props.donation_ahead_count)>0 ? Number(props.donation_ahead_count)+ " times your address has been moved ahead of the queue by donations":null,
  
      image: require("../../assets/images/d4.png"),
  
    },
    {
      name: "Queue Reward",
      role: (Number(props.queueRew)/10**6)/40+ " times (" + Number(props.queueRew)/10**6 +" USDT)",
      image: require("../../assets/images/d1.png"),
  
    },
    {
      name: "Your Referral Code : " + Number(props.refCode),
      role: "Used: "+ Number(props.totalReferrals)+ " times",
      para3:"Total Ref Earning: "+ Number(props.RefEarning)/10**6+ " USDT",
      para4:<p>Sponsor's Code : {Number(props.upliner)} | Current code in use : {Number(props.consecutiveRef)} times <br></br> Loyality Bonus Earned : {Number(props.consecutiveEarning)/10**6}</p>,
      image: require("../../assets/images/d6.png"),
    },
    {
      name: "Referral Placement",
      role:( Number(props.totalReferrals)) > 0 ? (10 - Number(props.totalReferrals)) +" referrals left to move ahead of queue" :"share ref code to move ahead in the queue" ,
      image: require("../../assets/images/d5.png"),
  
      // para3:"5 referrals left to move ahead of queue",
      para4:(Number(props.ref_ahead_count)) > 0 ?(Number(props.ref_ahead_count))+ " times, your address ha been moved ahead of the queue by referral code" : null,
  
    },
    
  ];


  return (
    <div id="taskSection" className="tw-bg-cover  tw-relative tw-bg-center">
      <div className="container  tw-pb-6  tw-pt-6">
        <div className="row tw-g-5 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 tw-pt-12 col-md-6 tw-mb-5">
              <div className="tw-text-center  tw-min-h-60 tw-relative tw-border-2 tw-border-[#003459] tw-rounded-lg tw-rounded-tr-none tw-rounded-bl-none tw-p-3">
                <div className="   tw-h-28 tw-w-32 tw-mx-auto  tw-left-32 tw-absolute  tw--top-12">
                  <img
                    src={member.image}
                    className="tw-h-full tw-mx-auto   tw-w-full  tw-bg-center    tw-bg-white"
                    alt={member.name}
                  />
                </div>
                <div className="tw-pt-12">
                  <h3 className="tw-text-[#003459] tw-text-xl tw-font-poppins tw-font-semibold">
                    {member.name}
                  </h3>
                  <p className="tw-text-[#003459] m-0 tw-text-xl  tw-font-semibold">
                    {member.role}
                  </p>
                  <p className=" m-0 tw-font-medium tw-text-[#003459]">
                    {member.para2}
                  </p>
                  <p className=" m-0 tw-font-medium tw-text-[#003459]">
                    {member.para3}
                  </p>
                  <p className=" m-0 tw-font-medium tw-text-[#003459]" style={{ paddingTop:"10px" ,margin:"0px" ,fontSize:"14px"}}>
                    {member.para4}
                  </p>
                  {/* <p className=" m-0 tw-font-medium tw-text-[#003459]">{member?.para}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>


       
     
      </div>
    </div>
  );
};



export default TasksComponents;
