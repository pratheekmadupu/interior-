import { createContext, useContext, useState } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <UIContext.Provider
      value={{
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        activeProject,
        setActiveProject
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
