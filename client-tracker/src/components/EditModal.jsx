// Modal réutilisable pour éditer un client
import { useEffect, useRef } from "react";
import "./EditModal.css";

function EditModal({ isOpen, client, onClose, onSave }) {
  const inputRef = useRef(null);

  // Focus sur le premier input quand la modal s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !client) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()} // empêcher la fermeture en cliquant dans la fenêtre
      >
        <h3>Modifier le client</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const updated = {
              ...client,
              name: form.name.value.trim(),
              email: form.email.value.trim(),
              company: form.company.value.trim(),
              status: form.status.value,
            };
            onSave(updated);
          }}
        >
          <input
            ref={inputRef}
            name="name"
            defaultValue={client.name}
            placeholder="Nom"
            required
          />
          <input
            name="email"
            type="email"
            defaultValue={client.email}
            placeholder="Email"
            required
          />
          <input
            name="company"
            defaultValue={client.company}
            placeholder="Entreprise"
            required
          />

          <select name="status" defaultValue={client.status}>
            <option value="prospect">Prospect</option>
            <option value="actif">Actif</option>
            <option value="inactif">Inactif</option>
          </select>

          <div className="modal-actions">
            <button type="submit" className="save-btn">Enregistrer</button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
