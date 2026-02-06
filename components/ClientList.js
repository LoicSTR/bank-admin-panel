import { error } from "@/utils";

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
  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id} className="bg-amber-100">
            {client.first_name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ClientList;
