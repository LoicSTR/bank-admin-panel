import Skeleton from "@/components/ui/Skeleton";
import List from "@/components/ui/List";

const TrasactionListSkeleton = () => {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <List>
      {items.map((item) => (
        <li key={item}>
          <div className="flex justify-between m-2">
            <div className="space-y-1">
              <Skeleton height="18px" width="7rem" />
              <Skeleton height="14px" width="10rem" />
            </div>
            <Skeleton height="16px" width="5rem" />
          </div>
          <Skeleton height="4px" />
        </li>
      ))}
    </List>
  );
};
export default TrasactionListSkeleton;
