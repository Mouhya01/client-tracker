import { useState } from "react";
import ClientForm from "../components/ClientForm";
import ClientList from "../components/ClientList";
import EditModal from "../components/EditModal";
import Header from "../components/Header";
import "./Dashboard.css";

function Dashboard() {
  // état principal des clients
  const [clients, setClients] = useState([]);
  // modal state
  const [editingClient, setEditingClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ajouter un client (passé au ClientForm)
  const addClient = (client) => {
    const clientWithId = { ...client, id: Date.now() };
    setClients((prev) => [...prev, clientWithId]);
  };

  // suppression
  const deleteClient = (id) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  // ouverture du modal d'édition
  const openEdit = (id) => {
    const client = clients.find((c) => c.id === id);
    if (!client) return;
    setEditingClient(client);
    setIsModalOpen(true);
  };

  // sauvegarde après édition
  const saveEdit = (updatedClient) => {
    setClients((prev) =>
      prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
    );
    setIsModalOpen(false);
    setEditingClient(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  return (
    <>
      <Header />

      <main className="dashboard-container">
        <section className="form-section">
          <ClientForm onAddClient={addClient} />
        </section>

        <section className="list-section">
          <ClientList
            clients={clients}
            onEdit={openEdit}
            onDelete={deleteClient}
          />
        </section>
      </main>

      <EditModal
        isOpen={isModalOpen}
        client={editingClient}
        onClose={closeModal}
        onSave={saveEdit}
      />
    </>
  );
}

export default Dashboard;
