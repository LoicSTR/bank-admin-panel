import SearchBar from "@/components/SearchBar";
import ClientList from "@/components/ClientList";

const Home = async ({ searchParams }) => {
  const { search } = await searchParams;
  return (
    <main>
      <h1>Super Bank</h1>
      <SearchBar />
      <ClientList search={search} />
    </main>
  );
};

export default Home;
