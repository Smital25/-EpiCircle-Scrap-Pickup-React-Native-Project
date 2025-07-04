import React, { createContext, useState } from 'react';

export const PickupContext = createContext();

export const PickupProvider = ({ children }) => {
  const [pickups, setPickups] = useState([]);

  const addPickup = (pickup) => {
    setPickups((prev) => [...prev, pickup]);
  };

  const updatePickupStatus = (id, newStatus) => {
    setPickups((prev) =>
      prev.map((pickup) =>
        pickup.id === id ? { ...pickup, status: newStatus } : pickup
      )
    );
  };

  return (
    <PickupContext.Provider value={{ pickups, addPickup, updatePickupStatus }}>
      {children}
    </PickupContext.Provider>
  );
};
