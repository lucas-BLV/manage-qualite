import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { Client } from "./types/client.type"
import Input from "./components/input";
import { api } from "./utils/api";

function App() {

    const [clients, setClients] = useState<Client[]>([])
    const [editClient, setEditClient] = useState<Client | null>(null);

    const handleSubmitAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        api<Client>("POST", "clients", {
            ...data,
            dateNaissance: new Date(data.dateNaissance.toString()).toISOString()
        })
            .then(data => setClients(current => current.concat(new Client(data)).sort()))
            .catch((e) => console.log(e))
    }

    const handleSubmitEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        api<Client>("PUT", `clients/${data.id}`, {
            ...data,
            id: undefined,
            dateNaissance: new Date(data.dateNaissance.toString()).toISOString()
        })
            .then(data => setClients(current =>
                current
                    .filter(c => c.id !== data.id)
                    .concat(new Client(data)).sort()
            ))
            .then(() => setEditClient(null))
            .catch((e) => console.log(e))
    }

    const handleDelete = (client: Client) => {
        api<null>("DELETE", `clients/${client.id}`)
            .then(() => setClients(current => current.filter(c => c.id !== client.id)))
            .catch((e) => console.log(e))
    }

    const handleChangeEdit = (e: ChangeEvent<HTMLInputElement>) => {
        setEditClient(current => {
            if (current)
                return {
                    ...current,
                    [e.target.name]: e.target.name === "dateNaissance" ? new Date(e.target.value) : e.target.value
                }
            else return null
        })
    }

    useEffect(() => {
        api<Client[]>("GET", "clients")
            .then(data => setClients(data.map(d => new Client(d))))
            .catch((e) => console.log(e))
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmitAdd}>
                <h2>Ajouter un client</h2>
                <Input
                    type="text"
                    label="Nom"
                    name="nom"
                />
                <Input
                    type="text"
                    label="Prénom"
                    name="prenom"
                />
                <Input
                    type="date"
                    label="Date de naissance"
                    name="dateNaissance"
                />
                <Input
                    type="number"
                    label="Code Postal"
                    name="codePostal"
                />
                <Input
                    type="text"
                    label="Ville"
                    name="ville"
                />
                <Input
                    type="text"
                    label="Adresse"
                    name="adresse"
                />
                <button type="submit">Ajouter</button>
            </form>

            {
                editClient &&
                <form onSubmit={handleSubmitEdit}>
                    <h2>Editer un client</h2>
                    <input readOnly hidden name="id" type="text" value={editClient.id} />
                    <Input
                        type="text"
                        label="Nom"
                        name="nom"
                        value={editClient.nom}
                        onChange={handleChangeEdit}
                    />
                    <Input
                        type="text"
                        label="Prénom"
                        name="prenom"
                        value={editClient.prenom}
                        onChange={handleChangeEdit}
                    />
                    <Input
                        type="date"
                        label="Date de naissance"
                        name="dateNaissance"
                        value={editClient.dateNaissance.toISOString().split('T')[0]}
                        onChange={handleChangeEdit}
                    />
                    <Input
                        type="number"
                        label="Code Postal"
                        name="codePostal"
                        value={editClient.codePostal}
                        onChange={handleChangeEdit}
                    />
                    <Input
                        type="text"
                        label="Ville"
                        name="ville"
                        value={editClient.ville}
                        onChange={handleChangeEdit}
                    />
                    <Input
                        type="text"
                        label="Adresse"
                        name="adresse"
                        value={editClient.adresse}
                        onChange={handleChangeEdit}
                    />
                    <button type="submit">Modifier</button>
                    <button
                        type="button"
                        onClick={() => setEditClient(null)}
                    >Annuler</button>
                </form>
            }

            <div>
                <h2>Clients</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Date de naissance</th>
                            <th>CP</th>
                            <th>Ville</th>
                            <th>Adresse</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client =>
                            <tr
                                key={client.id}
                            >
                                <td>{client.nom}</td>
                                <td>{client.prenom}</td>
                                <td>{client.dateNaissance.toISOString()}</td>
                                <td>{client.codePostal}</td>
                                <td>{client.ville}</td>
                                <td>{client.adresse}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => setEditClient(client)}
                                    >
                                        Editer
                                    </button>
                                    <button
                                        onClick={() => handleDelete(client)}
                                    >Supprimer</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
