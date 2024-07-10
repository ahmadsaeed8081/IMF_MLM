import React from 'react';
import Team from '../../components/TasksComponent';
import DonateNow from '../../components/DonateNow';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <Header/>
      <main className='flex-grow px-4  tw-min-h-screen py-8 md:px-8 md:py-12'>
        <DonateNow />
        <Team />
      </main>
      <Footer className='absolute bottom-0 left-0 right-0' />
    </div>
  );
};

export default Home;
