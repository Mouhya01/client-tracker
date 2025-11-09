import { useState } from "react";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";

function Dashboard() {
  // État global de la liste des clients
  const [clients, setClients] = useState([]);

  // Fonction pour ajouter un client
  const addClient = (client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  return (
    <main>
      <ClientForm onAddClient={addClient} />
      <ClientList clients={clients} />
    </main>
  );
}

export default Dashboard;
