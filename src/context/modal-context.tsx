import React, { createContext, useContext, useState } from "react";

interface Context {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<Context | null>(null);

export const ModalContextProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<Context["isOpen"]>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("Something went wrong within the modal context.");
  }
  return context;
};
