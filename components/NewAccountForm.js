"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

const NewAccountForm = ({ clientId }) => {
  const router = useRouter();
  const addNewAccount = async (event) => {
    event.preventDefault();
    const client_id = clientId;
    const name = event.target.name.value;
    const type = event.target.type.value;

    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts`, {
      method: "POST",
      body: JSON.stringify({
        client_id,
        name,
        type,
      }),
    });
    router.refresh();
  };

  const handleSubmit = (formData) => {
    addNewAccount(formData);
  };

  const types = [
    { id: "checkings", typeName: "Checking" },
    { id: "savings", typeName: "Saving" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center mt-4"
    >
      <div className="flex gap-2 w-full">
        <Input
          type="text"
          name="name"
          placeholder="Your account name"
          className="flex-3"
        />
        <Select name="type" id="type-select" className="flex-2">
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.typeName}
            </option>
          ))}
        </Select>
      </div>
      <Button type="submit">Create account</Button>
    </form>
  );
};

export default NewAccountForm;
