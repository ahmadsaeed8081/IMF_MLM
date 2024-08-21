import React,{useState,useEffect} from 'react';
import { GoGift } from 'react-icons/go';
import { useSimulateContract, useWriteContract,useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";


import Web3 from "web3";
import {
  usdt_address,
  token_abi,
  cont_address,
  cont_abi,
} from "../../configs/Contracts";
// import { useNetwork, useSwitchChain } from "wagmi";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";



const DonateNow = (props) => {

  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;


  const { address, isConnecting ,isDisconnected} = useAccount()
  const [count, set_count] = useState(0);


  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract, data:hash, ...states } = useWriteContract();
  const [ refCode,set_refCode] = useState();

  // const notify = () => toast("Token Purchased Successfully!");


  async function Donate1() {
    try {
        const tx = await writeContractAsync({
          abi: cont_abi,
          address: cont_address,
          functionName: "Donate", 
          args: [
            refCode
          ],

        });

        set_count(1)

    } catch (err) {
        console.error(err);
    }
}

  async function usdt_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: usdt_address,
          args: [cont_address, "50000000"],
          functionName: "approve",

        }); 

       } catch (err) {
        console.error(err);
    }
  }



  async function Donate()
  {

    if (isDisconnected) {
      alert("Kindly connect your wallet");
      return;
    }
    if (refCode == "" || refCode == "0") {
      alert("Kidly write referral code");
      return;
    }
    if (refCode == Number(props.refCode)) {
      alert("You can't use your referral code");
      return;
    }

    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));       
    const imf_contract=new web3.eth.Contract(cont_abi,cont_address);
    const add = await imf_contract.methods.codeToAdress(refCode).call();  

    if(add=="0x0000000000000000000000000000000000000000")
    {
      alert("Given Ref code is not available or wrong")
      return;
    }
    else{
      const user = await imf_contract.methods.user(add).call();  
      if(!user[4])
      {
        alert("Given Ref code is Deactivated, contact your sponsor")
        return;
      }

    }




    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await usdt_approval?.();
    } 
    else 
    {
      await usdt_approval?.();
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
    
    
  })



  useEffect(()=>{
    if(isConfirmed)
    {
      // alert(count)
      if(count==0)
      {
        // set_count(1)
        Donate1()

      }
      if(count==1)
      {
        set_count(0)
        // notify();

        props.test();



      }
    }


  },[isConfirmed])

  return (
    <div className="container  tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-center tw-gap-4">
      <div></div>
      <div className="tw-w-full sm:tw-w-auto">
        <div className="tw-bg-[#ECECEC] tw-flex tw-border tw-rounded-md">
          <input
            placeholder="Sponsor's Referral Code"
            className="tw-outline-none tw-px-8 tw-w-full sm:tw-w-72 tw-bg-[#F8F8F8]"
            type="number"
            readOnly={props.isRefActive?(true):(false)}
            value={refCode}
            onChange={(e) => {
              set_refCode(e.target.value);
            }}


          />
          <button className="tw-px-6 tw-text-center tw-py-3 tw-flex tw-items-center tw-justify-center tw-gap-1 tw-bg-[#054776] tw-text-white"
          type='number'
          disabled={props.isRefActive?(true):(false)}
          onClick={()=>Donate()}
          >
            Donate 
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
