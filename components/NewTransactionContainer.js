import NewTransactionForm from "@/components/NewTransactionForm";
import { error } from "@/utils";

const NewTransactionContainer = async ({ accountId, clientId }) => {
  let accounts;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts?clientsId=${clientId}`,
    );
    accounts = await response.json();
  } catch (e) {
    error(e.message);
  }

  return (
    <div className="mt-10 m-auto rounded-2xl p-3 border-2 border-teal-700">
      <p className="font-bold text-xl text-teal-700">Add new transaction</p>
      <NewTransactionForm accountId={accountId} accounts={accounts} />
    </div>
  );
};
export default NewTransactionContainer;
