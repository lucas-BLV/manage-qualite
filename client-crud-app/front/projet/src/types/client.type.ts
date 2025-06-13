export class Client {
    id?: number; // optionnel car souvent généré par le backend
    nom: string;
    prenom: string;
    dateNaissance: Date;
    adresse: string;
    codePostal: string;
    ville: string;
  
    constructor(data: Partial<Client> = {}) {
      this.id = data.id;
      this.nom = data.nom ?? '';
      this.prenom = data.prenom ?? '';
      this.dateNaissance = data.dateNaissance ? new Date(data.dateNaissance) : new Date();
      this.adresse = data.adresse ?? '';
      this.codePostal = data.codePostal ?? '';
      this.ville = data.ville ?? '';
    }
  }
  