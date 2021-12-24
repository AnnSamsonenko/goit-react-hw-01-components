import PropTypes from "prop-types";
import { TransactionsItems } from "./TransactionsItems";

export const TransactionsHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionsItems transactions={transactions} />
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
