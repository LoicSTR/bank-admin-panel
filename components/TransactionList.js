import TransactionDetails from "./TransactionDetails";
import List from "@/components/ui/List";
import { error } from "@/utils";

const TransactionList = async ({ clientId, accountId }) => {
  let transactions;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/transactions?clientsId=${clientId}&accountId=${accountId}`,
    );
    transactions = await response.json();
  } catch (e) {
    error(e.message);
  }

  return (
    <>
      {transactions.length === 0 ? (
        <p className="text-center text-lg mt-10">No transactions yet</p>
      ) : (
        <List>
          {transactions.map((transaction) => (
            <TransactionDetails
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </List>
      )}
    </>
  );
};
export default TransactionList;
