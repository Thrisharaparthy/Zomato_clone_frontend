import React, { createContext, useState, useContext } from 'react';
import { recipes } from '../data/recipes';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [bookingData, setBookingData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookingModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <AppContext.Provider value={{
      recipes,
      selectedRecipe,
      isModalOpen,
      openBookingModal,
      closeBookingModal,
      bookingData,
      setBookingData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);