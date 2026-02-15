"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    const search = event.target.search.value;
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <Input
        type="text"
        name="search"
        defaultValue={searchParams.get("search") || ""}
        placeholder="Search an user..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
