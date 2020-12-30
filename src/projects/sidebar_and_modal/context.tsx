import React, { useState, useContext, ReactElement } from 'react';


const AppContext = React.createContext<{
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}>({} as any);


const AppProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    < AppContext.Provider value={{
      isSidebarOpen,
      isModalOpen,
      openModal,
      closeModal,
      openSidebar,
      closeSidebar
    }}>
      {children}
    </AppContext.Provider >
  );
}

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider };
