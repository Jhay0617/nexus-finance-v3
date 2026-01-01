import { LedgerContainer, TransactionRow } from "../styles/DashboardStyles";
import { formatCurrency, dateFormat } from "../utils/helpers";
import * as LucideIcons from "lucide-react";

function TransactionList({ transactions }) {
  if (!transactions?.length)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem",
          color: "var(--text-secondary)",
        }}
      >
        No transactions found for this period.
      </div>
    );

  return (
    <LedgerContainer>
      {transactions.map((t) => {
        const Icon =
          LucideIcons[t.category?.icon_name] || LucideIcons.HelpCircle;

        return (
          <TransactionRow
            key={t.id}
            $isExpense={t.is_expense}
            $catColor={t.category?.color_code}
          >
            <div className="icon-wrapper">
              <Icon size={20} strokeWidth={2} />
            </div>

            <div className="main-info">
              <span className="desc">{t.description || "No description"}</span>
              <span className="cat-name">
                {t.category?.name || "Uncategorized"}
              </span>
            </div>

            <div className="amount-info">
              <div>
                {t.is_expense ? "-" : "+"} {formatCurrency(t.amount)}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-secondary)",
                  fontWeight: "400",
                }}
              >
                {dateFormat(new Date(t.created_at))}
              </div>
            </div>
          </TransactionRow>
        );
      })}
    </LedgerContainer>
  );
}

export default TransactionList;
