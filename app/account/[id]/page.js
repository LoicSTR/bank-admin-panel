// import TransactionsList from "@/components/TransactionsList";

const AccountPage = async ({ params }) => {
  const { id } = await params;
  let accountData;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts/${id}`,
    );
    accountData = await response.json();
    console.log(accountData);
  } catch {
    error();
  }

  return (
    <>
      <p>{accountData.name}</p>
      {/* <TransactionsList accountId={id} /> */}
    </>
  );
};

export default AccountPage;
