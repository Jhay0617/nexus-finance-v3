import { useTransactionsData } from "../services/apiTransactions";
import { useAccountsData } from "../services/apiAccounts";
import { ledgerReducer } from "../utils/helpers";
import TransactionList from "../ui/TransactionList";
import { ActionButton, DashboardHeader } from "../styles/DashboardStyles";
import SummaryCards from "../ui/SummaryCards";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddTransactionModal from "../ui/AddTransactionModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { transactions, isLoading: loadingTransactions } =
    useTransactionsData();
  const { data: accounts, isLoading: loadingAccount } = useAccountsData();

  const totals = ledgerReducer(transactions);

  if (loadingTransactions || loadingAccount) return null;

  return (
    <>
      <DashboardHeader>
        <div className="title-group">
          <h1>Nexus Overview</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Insights for {accounts?.length || 0} active accounts
          </p>
        </div>
        <ActionButton onClick={() => setIsModalOpen(true)}>
          <Plus size={20} />
          <span>New Entry</span>
        </ActionButton>
      </DashboardHeader>

      <SummaryCards totals={totals} />

      <div style={{ marginTop: "3rem" }}>
        <h3 style={{ marginBottom: "1.25rem" }}>Transaction History</h3>
        <TransactionList transactions={transactions} />
      </div>
      {isModalOpen && (
        <AddTransactionModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default Dashboard;
