import {useState} from "react";
import "./ClientForm.css";

function ClientForm({onAddClient}){
    //Declaration de l'état local pour chaque champ
    const [formData, setFormData]=useState({
        name: "",
        email:"",
        company:"",
        status:"prospect",
    });

    //Fonction pour mettre a jour l'état a chaque saisie
    const handleChange= (e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    };

    //Fonction appelée a la soumission du formulaire
    const handleSubmit= (e)=>{
        e.preventDefault();

        //Verifier si tous les champs sont remplis
        if(!formData.name || !formData.email || !formData.company){
            alert("Merci de remplir tous les champs!");
            return;
        }

        //Envoi des donnés au parent (Dashboard)
        onAddClient(formData);

        //Réinitialisé le formulaire
        setFormData({
            name: "",
            email: "",
            company: "",
            status: "prospect",
        })
    };

    return(
        <form className="client-form" onSubmit={handleSubmit}>
            <h3>Ajouter un client</h3>

            <input type="text" name="name" placeholder="Nom complet" value={formData.name} onChange={handleChange}/>

            <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange}/>

            <input type="text" name="company" placeholder="Entreprise" value={formData.company} onChange={handleChange}/>

            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="prospect">Prospect</option>
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default ClientForm;