import { formatNumber } from "@/utils";

const TotalOfBalance = ({ totalBalance }) => {
  return (
    <div className="text-lg font-bold text-teal-700">
      Total of accounts: {formatNumber(totalBalance)}
    </div>
  );
};
export default TotalOfBalance;
