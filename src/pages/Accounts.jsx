import { useState } from "react";
import { Plus, Landmark, Wallet, CreditCard } from "lucide-react";
import { useAccountsData } from "../services/apiAccounts";
import { formatCurrency } from "../utils/helpers";

import { AssetGrid, AssetCard, AccountsHeader } from "../styles/AccountStyles";
import { AuthButton } from "../styles/AuthStyles";
import AddAccountModal from "../ui/AddAccountModal";

function Accounts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: accounts, isLoading } = useAccountsData();

  if (isLoading) return null;

  return (
    <>
      <AccountsHeader>
        <div>
          <h1>Financial Assets</h1>
          <p>Your secure financial buckets and holdings</p>
        </div>

        <AuthButton
          onClick={() => setIsModalOpen(true)}
          style={{
            width: "auto",
            padding: "0.8rem 1.5rem",
            background: "var(--income)",
          }}
        >
          <Plus size={18} style={{ marginRight: "8px" }} />
          Add Asset
        </AuthButton>
      </AccountsHeader>

      <AssetGrid>
        {accounts?.length === 0 ? (
          <p
            style={{
              color: "var(--text-secondary)",
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3rem",
            }}
          >
            No assets found. Create a bucket to start tracking.
          </p>
        ) : (
          accounts?.map((account) => (
            <AssetCard key={account.id}>
              <div className="asset-header">
                <div className="icon-wrapper">
                  {account.name.toLowerCase().includes("cash") ? (
                    <Wallet size={24} />
                  ) : (
                    <Landmark size={24} />
                  )}
                </div>
                <div
                  style={{
                    color: "var(--income)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  ACTIVE
                </div>
              </div>

              <div className="label">Account Name</div>
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {account.name}
              </div>

              <div className="label">Current Balance</div>
              <div className="value">{formatCurrency(account.balance)}</div>

              <div className="account-id">{account.id}</div>
            </AssetCard>
          ))
        )}
      </AssetGrid>

      {isModalOpen && <AddAccountModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Accounts;
