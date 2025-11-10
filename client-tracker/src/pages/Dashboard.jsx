import "./Dashboard.css";
import { useState } from "react";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";
import Header from "../components/Header";

function Dashboard() {
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients((prev) => [...prev, client]);
  };

  return (
    <>
      {/* Barre supérieure */}
      <Header />

      {/* Contenu principal du tableau de bord */}
      <main className="dashboard-container">
        <section className="form-section">
          <ClientForm onAddClient={addClient} />
        </section>

        <section className="list-section">
          <ClientList clients={clients} />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
