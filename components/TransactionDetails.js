import { error } from "@/utils";
import { formatNumber } from "@/utils";

const TransactionDetails = async ({ transaction }) => {
  const { amount, source_account_id, description, type } = transaction;
  const transactionTypeLabel = {
    withdraw: "Withdraw",
    transfer: "Tranfer",
    deposit: "Deposit",
  };

  let accountSourceData;
  if (source_account_id !== undefined) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts/${source_account_id}`,
      );
      accountSourceData = await response.json();
    } catch (e) {
      error(e.message);
    }
  }

  return (
    <li className="border-b-2 border-teal-700 p-2 cursor-pointer flex justify-between">
      <div className="space-y-1">
        <p className="text-lg">{description}</p>
        <p className="text-sm">
          {transactionTypeLabel[type]}
          {type === "transfer" && (
            <span className="italic"> to {accountSourceData.name}</span>
          )}
        </p>
      </div>
      <p>
        {type === "withdraw" ? "-" : ""} {formatNumber(amount)}
      </p>
    </li>
  );
};
export default TransactionDetails;
