import React, { createContext, useState } from 'react';

export const PartnerPickupContext = createContext();

export const PartnerPickupProvider = ({ children }) => {
  const [pickups, setPickups] = useState([
    {
      id: 1,
      customer: 'Smital',
      phone: '9876543210',
      date: 'July 5, 2025',
      timeSlot: '10–11 AM',
      address: '123 Green Street',
      mapLink: '',
      status: 'Pending',
      items: [],
    },
    {
      id: 2,
      customer: 'Rohan',
      phone: '9876543000',
      date: 'July 6, 2025',
      timeSlot: '12–1 PM',
      address: '456 Blue Avenue',
      mapLink: '',
      status: 'Pending',
      items: [],
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setPickups(prev =>
      prev.map(p => (p.id === id ? { ...p, status: newStatus } : p))
    );
  };

  const addItemToPickup = (id, item) => {
    setPickups(prev =>
      prev.map(p =>
        p.id === id ? { ...p, items: [...p.items, item] } : p
      )
    );
  };

  return (
    <PartnerPickupContext.Provider value={{ pickups, updateStatus, addItemToPickup }}>
      {children}
    </PartnerPickupContext.Provider>
  );
};
