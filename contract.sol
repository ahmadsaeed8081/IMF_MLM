//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface Token {
    function transfer(address to, uint tokens) external returns (bool success);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) ;
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    }
contract IMF
    {
        struct Data{
            
            uint total_donation;
            uint donation_count;
            uint ref_code;
            uint total_referrals;
            bool ref_activate;
            uint ref_consecutive_count;
            address upliner;
            uint queue_rew;
            uint ref_earning;
            uint ref_consecutive_earning;
            uint ref_ahead_count;
            uint cashBack;
            
        }
        
        struct queueData{
            
            address add;
            bool jump_up;
            
        }

        address public usdt_address=0x341343568948459e5b7017eDDb05110cfA3EF699;
        // address public usdt_address=0xc2132D05D31c914a87C6611C10748AEb04B58e8F;

        address public owner1=0x2039bF16F99cF99f41FA097D29e7ef326E665F2B;
        address public owner2=0xA2f92E94a7f86E34D742901D28fB768c02342881;
        address public owner3=0xb7F2258497Cc7aFFa3bbcfbda5Aca6A9F0623312;

        address public marketing_add=0x4306B92EBd008c1bf48e96C8680d45E6Ae5edFC6;


        uint public Donation_Amount= 30 *10**6;
        uint public Direct_comm= 8 *10**6;
        uint public queue_comm= 30*10**6;
        uint public reinvest_rew= 20*10**6;

        uint public marketing_comm= 1 *10**6;
        uint public owner_comm= 1 *10**6;
        uint public Total_Donations;


        mapping(uint=>address) public codeToAdress;
        mapping(address=>uint) public sponsorOf;

        mapping(address=>Data) public user;
        queueData[] public queue_array;

        uint public total_members;

        constructor(address _add)
        {
            user[_add].total_donation+=Donation_Amount;
            user[_add].ref_activate = true;
            user[_add].ref_code = total_members+1;
            user[_add].donation_count++;
            codeToAdress[total_members+1]=_add;
            Total_Donations += Donation_Amount;

            total_members++;

            queueData memory temp_data;

            temp_data.add=_add;
            temp_data.jump_up=false;

            queue_array.push(temp_data);
        }


        function remove() internal 
        {      


            for (uint i = 0; i<queue_array.length-1; i++)
            {
                queue_array[i] = queue_array[i+1];
             
            }
            queue_array.pop();

        }


        function Donate(uint ref_code) external returns(bool)
        {

            address _ref= codeToAdress[ref_code];
            require(user[_ref].ref_activate);
            require(!user[msg.sender].ref_activate);
            require(Token(usdt_address).balanceOf(msg.sender) >= Donation_Amount ,"not enough usdt");
            require(Token(usdt_address).allowance(msg.sender,address(this))>= Donation_Amount ,"less allowance");   
            
            queueData memory temp_data;

            if(user[msg.sender].total_donation==0 || (user[msg.sender].donation_count+1) % 2==1 )
            {

                if(user[msg.sender].total_donation==0 )
                {
                    user[msg.sender].ref_code = total_members+1;
                    codeToAdress[total_members+1] = msg.sender;
                    sponsorOf[msg.sender]=ref_code;
                    total_members++;
                }

                user[_ref].total_referrals++;



                user[msg.sender].total_donation += Donation_Amount;
                user[msg.sender].ref_activate = true;
                user[msg.sender].upliner = _ref;
                user[msg.sender].donation_count++;
                Total_Donations += Donation_Amount;


                temp_data.add=msg.sender;
                temp_data.jump_up=false;

                queue_array.push(temp_data);


                if(queue_array.length>0)
                {
                    Token(usdt_address).transferFrom(msg.sender,queue_array[0].add,Donation_Amount);
                    user[queue_array[0].add].queue_rew += Donation_Amount;

                    
                    user[queue_array[0].add].ref_activate=false;
                    remove(); //removing first person from the queue

                    

                }


                if(user[_ref].total_referrals == 5)
                {
                    queueData memory temp_data1;
                    queueData memory temp_data2;

                    temp_data.add=_ref;
                    temp_data.jump_up=true;

                    for(uint i=0;i<queue_array.length;i++)  //loop to find a place in queue
                    {
                        if(!queue_array[i].jump_up)
                        {
                            temp_data1 = queue_array[i];

                            for(uint j =i; j<queue_array.length-1; j++)
                            {
                                if(temp_data1.add != temp_data.add)
                                {
                                    temp_data2 = queue_array[j+1];
                                    queue_array[j+1] = temp_data1;
                                    temp_data1 = temp_data2;

                                }
                                else{
                                    
                                    queue_array[i] = temp_data;
                                    j=queue_array.length;
                                }

                            }

                            i=queue_array.length;
                        }
                            
                    } 
                    user[_ref].total_referrals=0;
                    user[_ref].ref_ahead_count++;


                }



            }
            else
            {

                user[msg.sender].total_donation+=Donation_Amount;
                user[msg.sender].ref_activate = true;
                user[msg.sender].donation_count++;
                Total_Donations += Donation_Amount;
                user[msg.sender].cashBack+=reinvest_rew;

                if(user[msg.sender].upliner==address(0) || user[msg.sender].upliner==_ref)
                {
                    user[msg.sender].ref_consecutive_count++;
                }
                else
                {
                    user[msg.sender].ref_consecutive_count=1;
                }

                user[msg.sender].upliner = _ref;

                temp_data.add=msg.sender;
                temp_data.jump_up=false;

                queue_array.push(temp_data);

                Token(usdt_address).transferFrom(msg.sender,msg.sender,reinvest_rew);
                
                

                if(user[msg.sender].ref_consecutive_count==3)
                {
                    Token(usdt_address).transferFrom(msg.sender,msg.sender, Direct_comm);
                    user[msg.sender].ref_consecutive_count=0;
                    user[msg.sender].ref_consecutive_earning += Direct_comm;


                }
                else
                {
                    Token(usdt_address).transferFrom(msg.sender,_ref,Direct_comm);
                    user[_ref].ref_earning = user[_ref].ref_earning + Direct_comm;

                }

                Token(usdt_address).transferFrom(msg.sender,marketing_add,marketing_comm);
                Token(usdt_address).transferFrom(msg.sender,owner1,350000);
                Token(usdt_address).transferFrom(msg.sender,owner2,450000);
                Token(usdt_address).transferFrom(msg.sender,owner3,200000);


            }

                





            return true;

        }


        function get_queuePosition() public view returns(uint)
        {
            uint index=0;
            for(uint j =0; j<queue_array.length; j++)
            {
                if(queue_array[j].add == msg.sender)
                {
                    
                    index=j+1;
                    j=queue_array.length;
                }
                
            }
            return index;
        }

    


    }