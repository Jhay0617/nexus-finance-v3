import { useAccountsData } from "../services/apiAccounts";
import { StatsGrid, StatCard } from "../styles/DashboardStyles";
import { formatCurrency } from "../utils/helpers";
import { TrendingUp, TrendingDown, CreditCard } from "lucide-react";

function SummaryCards({ totals }) {
  const { data: accounts } = useAccountsData();
  const totalNetWorth = accounts?.reduce((acc, cur) => acc + cur.balance, 0);

  return (
    <StatsGrid>
      <StatCard>
        <div className="label-group">
          <CreditCard size={16} />
          <span>Total Balance</span>
        </div>
        <div className="value">{formatCurrency(totalNetWorth)}</div>
      </StatCard>

      <StatCard $type="income">
        <div className="label-group">
          <TrendingUp size={16} color="var(--income)" />
          <span>Monthly Income</span>
        </div>
        <div className="value">{formatCurrency(totals.income)}</div>
      </StatCard>

      <StatCard $type="expense">
        <div className="label-group">
          <TrendingDown size={16} color="var(--expense)" />
          <span>Monthly Expenses</span>
        </div>
        <div className="value">{formatCurrency(totals.expense)}</div>
      </StatCard>
    </StatsGrid>
  );
}

export default SummaryCards;
