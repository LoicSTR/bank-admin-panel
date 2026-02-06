import SearchBar from "@/components/SearchBar";
import ClientList from "@/components/ClientList";
import { Suspense } from "react";

const Home = async ({ searchParams }) => {
  const { search } = await searchParams;
  return (
    <main>
      <h1>Super Bank</h1>
      <SearchBar />
      <Suspense key={search} fallback={<p>Chargement...</p>}>
        <ClientList search={search} />
      </Suspense>
    </main>
  );
};

export default Home;
