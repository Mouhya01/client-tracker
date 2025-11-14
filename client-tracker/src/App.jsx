// src/App.jsx
import { useState } from "react";
import Header from "../src/components/Header";
import Dashboard from "../src/pages/Dashboard";
import ClientList from "../src/components/ClientList";
import ClientForm from "../src/components/ClientForm";

export default function App() {
  // --- STATE PRINCIPAL : Liste des clients ---
  const [clients, setClients] = useState([]);

  // --- STATE POUR L'EDITION ---
  const [editingClient, setEditingClient] = useState(null);

  // --- AJOUT DE CLIENT ---
  const handleAddClient = (clientData) => {
    setClients([
      ...clients,
      {
        id: Date.now(), // ID unique
        ...clientData,
      },
    ]);
  };

  // --- SUPPRESSION ---
  const handleDeleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  // --- PREPARATION À L'ÉDITION ---
  const handleStartEdit = (client) => {
    setEditingClient(client);
  };

  // --- SAUVEGARDE DES MODIFICATIONS ---
  const handleSaveEdit = (updatedClient) => {
    setClients(
      clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
    setEditingClient(null); // On quitte le mode édition
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* --- DASHBOARD --- */}
      <div className="max-w-6xl mx-auto mt-6 p-4">
        <Dashboard clients={clients} />
      </div>

      {/* --- FORMULAIRE (AJOUT OU ÉDITION) --- */}
      <div className="max-w-3xl mx-auto mt-6 p-4">
        <ClientForm
          onAddClient={handleAddClient}
          editingClient={editingClient}
          onSaveEdit={handleSaveEdit}
        />
      </div>

      {/* --- LISTE DES CLIENTS --- */}
      <div className="max-w-5xl mx-auto mt-6 p-4">
        <ClientList
          clients={clients}
          onDelete={handleDeleteClient}
          onStartEdit={handleStartEdit}
        />
      </div>
    </div>
  );
}
