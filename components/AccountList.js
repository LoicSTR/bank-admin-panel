import List from "./ui/List";
import AccountItem from "./AccountItem";

const AccountList = ({ accounts }) => {
  return (
    <>
      {accounts.length === 0 ? (
        <p className="text-center text-lg mt-10">No accounts yet</p>
      ) : (
        <List>
          {accounts.map((account) => (
            <AccountItem key={account.id} account={account} />
          ))}
        </List>
      )}
    </>
  );
};
export default AccountList;
