import React from 'react';
import { GoGift } from 'react-icons/go';

const DonateNow = () => {
  return (
    <div className="container  tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-center tw-gap-4">
      <div></div>
      <div className="tw-w-full sm:tw-w-auto">
        <div className="tw-bg-[#ECECEC] tw-flex tw-border tw-rounded-md">
          <input
            placeholder="Sponsor's Referral Code"
            className="tw-outline-none tw-px-8 tw-w-full sm:tw-w-72 tw-bg-[#F8F8F8]"
          />
          <button className="tw-px-6 tw-text-center tw-py-3 tw-flex tw-items-center tw-justify-center tw-gap-1 tw-bg-[#054776] tw-text-white">
            Donate 
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
