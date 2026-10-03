import { useState } from 'react';

import type { Bid, RideBookingState } from '../types/ride';
import { mockBids } from '../data/mockBids';

function useRideBooking() {
  const [state, setState] =
    useState<RideBookingState>('IDLE');

  const [bids, setBids] = useState<Bid[]>([]);

  const [selectedBid, setSelectedBid] =
    useState<Bid | null>(null);

  const findDrivers = () => {
    setState('SEARCHING');

    setTimeout(() => {
      setBids(mockBids);
      setState('BIDDING');
    }, 2500);
  };

  const selectDriver = (bid: Bid) => {
    setSelectedBid(bid);
    setState('DRIVER_SELECTED');
  };

  const resetBooking = () => {
    setState('IDLE');
    setBids([]);
    setSelectedBid(null);
  };

  return {
    state,
    bids,
    selectedBid,
    findDrivers,
    selectDriver,
    resetBooking,
  };
}

export default useRideBooking;