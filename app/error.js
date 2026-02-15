"use client";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex flex-col items-center gap-2">
        <Title>An error occurred</Title>
        <p className="text-lg text-gray-600">{error.message}</p>
      </div>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};
export default ErrorPage;
