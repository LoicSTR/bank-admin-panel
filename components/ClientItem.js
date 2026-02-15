import Link from "next/link";

const ClientItem = ({ client }) => {
  return (
    <li className="border-b-2 border-teal-700 p-2 hover:bg-teal-50 transition-all duration-300 cursor-pointer">
      <Link href={`client/${client.id}`}>
        {client.first_name} {client.last_name}
      </Link>
    </li>
  );
};
export default ClientItem;
