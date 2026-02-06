import { wait, error } from "@/utils";
import Link from "next/link";

const ClientList = async ({ search }) => {
  console.log("Search : ", search);
  let clients;
  try {
    const response = await fetch(
      search
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients?search=${search}`
        : `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/`,
    );
    clients = await response.json();
  } catch {
    error();
  }

  await wait();
  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id} className="bg-amber-100 mt-2">
            <Link href={`client/${client.id}`}>{client.first_name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ClientList;
