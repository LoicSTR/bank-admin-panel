"use client";

import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

const NewTransactionForm = ({ accountId, accounts }) => {
  const router = useRouter();
  const addNewTransaction = async (event) => {
    event.preventDefault();
    const account_id = accountId;
    const source_account_id = event.target.source_account.value;
    const amount = event.target.amount.value;
    const description = event.target.description.value;

    await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/transactions/transfer`,
      {
        method: "POST",
        body: JSON.stringify({
          account_id,
          source_account_id,
          amount,
          description,
        }),
      },
    );
    router.refresh();
  };

  const handleSubmit = (event) => {
    addNewTransaction(event);
  };

  const othersAccounts = accounts.filter((account) => account.id !== accountId);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center mt-4"
    >
      <div className="flex gap-2 w-full">
        <Select name="source_account" id="account-select" className="flex-1">
          {othersAccounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          name="amount"
          placeholder="1000"
          className="flex-1"
        />
      </div>
      <Input
        type="text"
        name="description"
        placeholder="I don't know"
        className=" w-full"
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default NewTransactionForm;
