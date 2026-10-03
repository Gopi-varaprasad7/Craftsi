export type RideBookingState =
  | 'IDLE'
  | 'SEARCHING'
  | 'BIDDING'
  | 'DRIVER_SELECTED'
  | 'EN_ROUTE'
  | 'TRIP_STARTED'
  | 'COMPLETED';

export type Bid = {
  id: string;
  driverName: string;
  rating: number;
  totalTrips: number;
  vehicle: string;
  vehicleNumber: string;
  etaMinutes: number;
  distanceKm: number;
  price: number;
};