import { error } from "@/utils";
import ClientItem from "@/components/ClientItem";
import List from "./ui/List";

const ClientList = async ({ search }) => {
  let clients;
  try {
    const response = await fetch(
      search
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients?search=${search}`
        : `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/`,
    );
    clients = await response.json();
  } catch (e) {
    error(e.message);
  }

  return (
    <>
      {clients.length === 0 ? (
        <p className="text-center text-lg mt-10">No clients found</p>
      ) : (
        <List>
          {clients.map((client) => (
            <ClientItem key={client.id} client={client} />
          ))}
        </List>
      )}
    </>
  );
};
export default ClientList;
