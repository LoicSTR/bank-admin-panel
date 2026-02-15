import Skeleton from "@/components/ui/Skeleton";
import List from "@/components/ui/List";

const AccountListSkeleton = () => {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <List>
      {items.map((item) => (
        <li key={item}>
          <div className="flex justify-between gap-2 m-2 w-full">
            <Skeleton height="26px" width="7rem" />
            <Skeleton height="26px" width="5rem" />
          </div>
          <Skeleton height="4px" />
        </li>
      ))}
    </List>
  );
};
export default AccountListSkeleton;
