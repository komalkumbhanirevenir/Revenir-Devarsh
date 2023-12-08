import React from 'react';
import './App.css';
import Onboarding from './module/OnBoarding';
import ReclaimRules from './module/ReclaimRules';
import TripTransaction from './components/TripTransaction/TripTransaction';
import Trip from './module/CreateTrip';
import TransactionOption from './components/TransactionOption/TransactionOption';
import TransactionFeed from './components/TransactionFeed/TransactionFeed';
import Barcode from './components/Barcodes/Barcode';
import TripList from './components/TripList/TripList';


function App() {
  return (
    <Onboarding />
    // <Trip />
    // <ReclaimRules />
    // <TripTransaction />
    // <TransactionOption />
    // <TransactionFeed />
    // <Barcode />
  );
}

export default App;
