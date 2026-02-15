import Title from "@/components/ui/Title";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex flex-col items-center gap-2">
        <Title>Page Not Found</Title>
        <p className="text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>{" "}
      </div>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
