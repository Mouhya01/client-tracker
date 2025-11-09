import "./ClientList.css";

function ClientList({ clients }) {
  return (
    <div className="client-list">
      <h3>Liste des clients</h3>

      {clients.length === 0 ? (
        <p>Aucun client ajouté pour le moment.</p>
      ) : (
        <ul>
          {clients.map((client, index) => (
            <li key={index} className="client-card">
              <strong>{client.name}</strong> — {client.company}  
              <br />
              <span>{client.email}</span>  
              <span className={`status ${client.status}`}>
                {client.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClientList;
