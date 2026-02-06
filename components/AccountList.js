import Link from "next/link";

const AccountList = async ({ clientId }) => {
  let accounts;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts?clientsId=${clientId}`,
    );
    accounts = await response.json();
  } catch {
    error();
  }

  return (
    <>
      <ul>
        {accounts.map((account) => (
          <li key={account.id} className="bg-amber-100 mt-2">
            <Link href={`/account/${account.id}`}>{account.name}</Link>
            <p>{account.balance}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default AccountList;
