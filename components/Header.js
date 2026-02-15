import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-2 border-teal-700 p-3 flex justify-center">
      <Link href="/">
        <p className="text-2xl text-teal-700 font-bold">My Bank</p>
      </Link>
    </header>
  );
};

export default Header;
