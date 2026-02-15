import NewTransactionContainer from "@/components/NewTransactionContainer";
import TransactionList from "@/components/TransactionList";
import TransactionListSkeleton from "@/components/TransactionListSkeleton";
import Title from "@/components/ui/Title";
import { Suspense } from "react";
import { error } from "@/utils";
import { notFound } from "next/navigation";
import { formatNumber } from "@/utils";

const AccountPage = async ({ params }) => {
  const { id } = await params;
  let accountData;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts/${id}`,
    );
    accountData = await response.json();
  } catch (e) {
    error(e.message);
  }
  if (!accountData.name) {
    notFound();
  }

  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="space-y-1">
          <Title>{accountData.name}</Title>
          <p className="text-lg">{accountData.type}</p>
        </div>
        <p className="font-bold text-2xl text-teal-700">
          {formatNumber(accountData.balance)}
        </p>
      </div>
      <Suspense fallback={<TransactionListSkeleton />}>
        <TransactionList clientId={accountData.client_id} accountId={id} />
      </Suspense>
      <NewTransactionContainer
        clientId={accountData.client_id}
        accountId={id}
      />
    </>
  );
};

export default AccountPage;
