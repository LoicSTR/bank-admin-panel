import Skeleton from "@/components/ui/Skeleton";
import List from "@/components/ui/List";

const ClientListSkeleton = () => {
  const items = Array.from({ length: 5 }, (_, i) => i);
  return (
    <List>
      {items.map((item) => (
        <li key={item}>
          <Skeleton height="26px" width="7rem" className="m-2" />
          <Skeleton height="4px" />
        </li>
      ))}
    </List>
  );
};
export default ClientListSkeleton;
