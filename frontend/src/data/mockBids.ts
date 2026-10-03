import type { Bid } from '../types/ride';

export const mockBids: Bid[] = [
  {
    id: 'bid-1',
    driverName: 'Rahul Kumar',
    rating: 4.8,
    totalTrips: 1240,
    vehicle: 'Hyundai Aura',
    vehicleNumber: 'AP 39 AB 1234',
    etaMinutes: 6,
    distanceKm: 2.4,
    price: 420,
  },
  {
    id: 'bid-2',
    driverName: 'Suresh Reddy',
    rating: 4.9,
    totalTrips: 980,
    vehicle: 'Maruti Dzire',
    vehicleNumber: 'AP 39 CD 5678',
    etaMinutes: 8,
    distanceKm: 3.1,
    price: 450,
  },
  {
    id: 'bid-3',
    driverName: 'Vijay Kumar',
    rating: 4.7,
    totalTrips: 760,
    vehicle: 'Honda Amaze',
    vehicleNumber: 'AP 39 EF 9012',
    etaMinutes: 7,
    distanceKm: 2.8,
    price: 480,
  },
];
