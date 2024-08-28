import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Header from './components/header';
import Footer from './components/footer';
import Tasks from './screens/tasks';
import FAQS from './screens/FAQs';
import { cont_abi, cont_address, usdt_address, token_abi } from './configs/Contracts';
import { useAccount, useDisconnect } from "wagmi";
import Web3 from "web3";
function App() {



  const [totalDonation, set_totalDonation] = useState(0);
  const [donationCount, set_donationCount] = useState(0);
  const [refCode, set_refCode] = useState(0);
  const [totalReferrals, set_totalReferrals] = useState(0);
  const [isRefActive, set_isRefActive] = useState(false);
  const [consecutiveRef, set_consecutiveRef] = useState(0);
  const [upliner, set_upliner] = useState(0);
  const [sponsor, set_sponsor] = useState(0);


  const [consecutiveEarning, set_consecutiveEarning] = useState(0);
  const [queueRew, set_queueRew] = useState(0);
  const [RefEarning, set_RefEarning] = useState(0);
  const [donation_ahead_count, set_donation_ahead_count] = useState(0);
  const [ref_ahead_count, set_ref_ahead_count] = useState(0);
  const [totalbusiness, set_totalbusiness] = useState(0);

  
 
  const [usdtBalance, set_usdtBalance] = useState(0);
  const [position, set_position] = useState(0);
  const [cashBack, set_cashback] = useState(0);

  const { address, isConnecting ,isDisconnected,isConnected} = useAccount()
  let count=0


 
useEffect(()=>{
  if((count==0))
  {
    count++;

      test();
  }

},[address])





  async function test(){
    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));
  
              
    const imf_contract=new web3.eth.Contract(cont_abi,cont_address);
    const USDT_contract=new web3.eth.Contract(token_abi,usdt_address);

    let USDTBalance;
    let postion;
    let user;
    let upliner_code;

    let balance;
    let business;

    
    if(isConnected)
    {
       balance  =await  web3.eth.getBalance(address)

       USDTBalance = await USDT_contract.methods.balanceOf(address).call(); 
       postion = await imf_contract.methods.get_queuePosition().call({ from: address }); 

       user = await imf_contract.methods.user(address).call();    
  
      let sponsor = await imf_contract.methods.sponsorOf(address).call();      

       upliner_code = await imf_contract.methods.user(user[6]).call(); 
       business = await imf_contract.methods.Total_Donations().call(); 

      set_totalDonation(user[0])
      set_donationCount(user[1])
      set_refCode(user[2])
      set_totalReferrals(user[3])
      set_isRefActive(user[4])
      set_consecutiveRef(user[5])
      set_consecutiveEarning(user[9])
      set_cashback(user[11])

      set_queueRew(user[7])
      set_RefEarning(user[8])
      set_totalbusiness(business)

      // set_donation_ahead_count(user[10])
      set_ref_ahead_count(user[10])


      set_upliner(upliner_code[2])
      set_sponsor(sponsor)

      set_usdtBalance(USDTBalance)
      set_position(postion)
    }




  }  



  return (
    
      <div className="app-container">
        <Routes>

          <Route path="/" element={<Home cashBack={cashBack} sponsor={sponsor} totalbusiness={totalbusiness} ref_ahead_count={ref_ahead_count} donation_ahead_count={donation_ahead_count} RefEarning={RefEarning} queueRew={queueRew} consecutiveEarning={consecutiveEarning} upliner={upliner} consecutiveRef={consecutiveRef} test={test} usdtBalance={usdtBalance} position={position} totalReferrals={totalReferrals} isRefActive={isRefActive} totalDonation={totalDonation} donationCount={donationCount} refCode={refCode}  />} />
          
          <Route path="/faqs" element={<FAQS />} />

        </Routes>

      </div>
      
    
  );
}

export default App;
