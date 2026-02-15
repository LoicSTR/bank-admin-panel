import AccountListSkeleton from "@/components/AccountListSkeleton";
import Skeleton from "@/components/ui/Skeleton";
import NewAccountForm from "@/components/NewAccountForm";

const Loading = () => {
  return (
    <div>
      <Skeleton height="32px" width="10rem" />
      <AccountListSkeleton />
    </div>
  );
};

export default Loading;
