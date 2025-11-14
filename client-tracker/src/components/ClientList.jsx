import "./ClientList.css";

/**
 * ClientList
 * Props:
 *  - clients: array of client objects
 *  - onEdit: function(clientId) => ouvre modal
 *  - onDelete: function(clientId) => supprime
 */
function ClientList({ clients = [], onEdit, onDelete }) {
  return (
    <div className="client-list">
      <h3>Liste des clients</h3>

      {clients.length === 0 ? (
        <p className="muted">Aucun client pour le moment.</p>
      ) : (
        <ul>
          {clients.map((c) => (
            <li key={c.id} className="client-card">
              <div className="client-main">
                <div className="client-info">
                  <strong className="client-name">{c.name}</strong>
                  <div className="client-meta">
                    <span className="company">{c.company}</span>
                    <span className="email">{c.email}</span>
                  </div>
                </div>

                <div className="client-right">
                  <span className={`status ${c.status}`}>{c.status}</span>
                </div>
              </div>

              <div className="client-actions">
                <button
                  className="action edit"
                  onClick={() => onEdit(c.id)}
                  aria-label={`Éditer ${c.name}`}
                >
                  ✏️ Éditer
                </button>

                <button
                  className="action delete"
                  onClick={() => {
                    if (confirm(`Supprimer ${c.name} ?`)) {
                      onDelete(c.id);
                    }
                  }}
                >
                  🗑️ Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClientList;
