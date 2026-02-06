import AccountList from "@/components/AccountList";

const ClientPage = async ({ params }) => {
  const { id } = await params;
  let clientData;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/${id}`,
    );
    clientData = await response.json();
    console.log(clientData);
  } catch {
    error();
  }

  const { first_name, last_name } = clientData;

  return (
    <>
      <p>
        {first_name} {last_name}
      </p>
      <AccountList clientId={id} />
    </>
  );
};

export default ClientPage;
