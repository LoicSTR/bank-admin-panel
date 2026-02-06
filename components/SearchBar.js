"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event) => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2"
        name="search"
        defaultValue={searchParams.get("search") || ""}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
