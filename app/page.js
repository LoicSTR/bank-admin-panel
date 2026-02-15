import SearchBar from "@/components/SearchBar";
import ClientList from "@/components/ClientList";
import ClientListSkeleton from "@/components/ClientListSkeleton";
import { Suspense } from "react";

const Home = async ({ searchParams }) => {
  const { search } = await searchParams;
  return (
    <div>
      <SearchBar />
      <Suspense key={search} fallback={<ClientListSkeleton />}>
        <ClientList search={search} />
      </Suspense>
    </div>
  );
};

export default Home;
