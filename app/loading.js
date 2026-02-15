import SearchBar from "@/components/SearchBar";
import ClientListSkeleton from "@/components/ClientListSkeleton";

const Loading = () => {
  return (
    <div>
      <SearchBar />
      <ClientListSkeleton />
    </div>
  );
};

export default Loading;
