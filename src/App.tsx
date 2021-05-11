import { useState } from 'react';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

import { TransactionProvider } from './hooks/useTransactions';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionsModal() {
        setIsNewTransactionsModalOpen(true)
    }

    function handleCloseNewTransactionsModal() {
        setIsNewTransactionsModalOpen(false)
    }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionsModal}
     />
     
      <GlobalStyle />
    </TransactionProvider>
  );
}


