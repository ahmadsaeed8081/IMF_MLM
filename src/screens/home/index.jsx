import React from 'react';
import Team from '../../components/TasksComponent';
import DonateNow from '../../components/DonateNow';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Home = (props) => {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <Header/>
      <main className='flex-grow px-4  tw-min-h-screen py-8 md:px-8 md:py-12'>
        <DonateNow test={props.test} refCode={props.refCode}  usdtBalance={props.usdtBalance} isRefActive={props.isRefActive} />
        <Team sponsor={props.sponsor} totalbusiness={props.totalbusiness} ref_ahead_count={props.ref_ahead_count} donation_ahead_count={props.donation_ahead_count} RefEarning={props.RefEarning} queueRew={props.queueRew} consecutiveEarning={props.consecutiveEarning} upliner={props.upliner} consecutiveRef={props.consecutiveRef} usdtBalance={props.usdtBalance} position={props.position}  totalReferrals={props.totalReferrals} isRefActive={props.isRefActive} totalDonation={props.totalDonation} donationCount={props.donationCount} refCode={props.refCode} />
      </main>
      <Footer className='absolute bottom-0 left-0 right-0' />
    </div>
  );
};

export default Home;
