import { useState } from "react";
import { Dashboard } from "./components/Dashboard/index";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
