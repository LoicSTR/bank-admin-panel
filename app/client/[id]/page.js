import AccountList from "@/components/AccountList";
import NewAccountForm from "@/components/NewAccountForm";
import Title from "@/components/ui/Title";
import { Suspense } from "react";
import AccountListSkeleton from "@/components/AccountListSkeleton";
import TotalOfBalance from "@/components/TotalOfBalance";
import { error } from "@/utils";
import { notFound } from "next/navigation";

const ClientPage = async ({ params }) => {
  const { id } = await params;
  let clientData;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/${id}`,
    );
    clientData = await response.json();
  } catch (e) {
    error(e.message);
  }

  if (!clientData) {
    notFound();
  }

  const { first_name, last_name } = clientData;

  let accounts = [];
  let totalBalance = 0;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts?clientsId=${id}`,
    );
    accounts = await response.json();
    totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  } catch (e) {
    error(e.message);
  }

  return (
    <>
      <div>
        <Title>
          {first_name} {last_name}
        </Title>
        <TotalOfBalance totalBalance={totalBalance} />
      </div>
      <Suspense key={accounts} fallback={<AccountListSkeleton />}>
        <AccountList accounts={accounts} />
      </Suspense>
      <div className="mt-10 w-96 m-auto rounded-2xl p-3 border-2 border-teal-700">
        <p className="font-bold text-xl text-teal-700">Add new account</p>
        <NewAccountForm clientId={id} />
      </div>
    </>
  );
};

export default ClientPage;
