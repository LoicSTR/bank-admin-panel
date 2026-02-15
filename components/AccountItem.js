import Link from "next/link";
import { formatNumber } from "@/utils";

const AccountItem = ({ account }) => {
  return (
    <li className="border-b-2 border-teal-700 p-2 hover:bg-teal-50 transition-all duration-300 cursor-pointer">
      <Link
        href={`/account/${account.id}`}
        className="flex justify-between gap-2"
      >
        <div>{account.name}</div>
        <div>{formatNumber(account.balance)}</div>
      </Link>
    </li>
  );
};
export default AccountItem;
