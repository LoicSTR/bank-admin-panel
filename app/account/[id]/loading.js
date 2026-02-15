import TransactionListSkeleton from "@/components/TransactionListSkeleton";
import Skeleton from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="space-y-1">
          <Skeleton height="32px" width="12rem" />
          <Skeleton height="18px" width="5rem" />
        </div>
        <Skeleton height="24px" width="5rem" />
      </div>
      <TransactionListSkeleton />
    </>
  );
};

export default Loading;
