import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const client = await prisma.client.create({ data: req.body });
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// READ all
router.get('/', async (_req, res) => {
    const clients = await prisma.client.findMany();
    res.json(clients);
});

// READ one
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = await prisma.client.findUnique({ where: { id } });
    if (client) res.json(client);
    else res.status(404).json({ error: 'Client not found' });
});

// UPDATE
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const client = await prisma.client.update({
            where: { id },
            data: req.body
        });
        res.json(client);
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: 'Cannot update client' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.client.delete({ where: { id } });
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Cannot delete client' });
    }
});

// INIT (seed de test)
router.post('/init', async (_req, res) => {
    try {
        const clients = await prisma.client.createMany({
            data: [
                {
                    nom: 'Dupont',
                    prenom: 'Jean',
                    dateNaissance: new Date('1985-06-15'),
                    adresse: '123 rue de Paris',
                    codePostal: '75001',
                    ville: 'Paris',
                },
                {
                    nom: 'Durand',
                    prenom: 'Sophie',
                    dateNaissance: new Date('1990-10-30'),
                    adresse: '456 avenue des Champs',
                    codePostal: '75008',
                    ville: 'Paris',
                },
                {
                    nom: 'Martin',
                    prenom: 'Lucas',
                    dateNaissance: new Date('2000-01-20'),
                    adresse: '789 boulevard Haussmann',
                    codePostal: '75009',
                    ville: 'Paris',
                },
                {
                    nom: 'Dupont',
                    prenom: 'Emma',
                    dateNaissance: new Date('1992-03-12'),
                    adresse: '12 rue de Lyon',
                    codePostal: '69001',
                    ville: 'Lyon',
                  },
                  {
                    nom: 'Durand',
                    prenom: 'Nathan',
                    dateNaissance: new Date('1988-11-05'),
                    adresse: '34 avenue de Toulouse',
                    codePostal: '31000',
                    ville: 'Toulouse',
                  },
                  {
                    nom: 'Lefevre',
                    prenom: 'Chloé',
                    dateNaissance: new Date('1995-07-19'),
                    adresse: '8 impasse Victor Hugo',
                    codePostal: '13006',
                    ville: 'Marseille',
                  },
                  {
                    nom: 'Moreau',
                    prenom: 'Hugo',
                    dateNaissance: new Date('1983-02-01'),
                    adresse: '56 place de la République',
                    codePostal: '75003',
                    ville: 'Paris',
                  },
                  {
                    nom: 'Garcia',
                    prenom: 'Sophie',
                    dateNaissance: new Date('1990-10-10'),
                    adresse: '101 rue du Général Leclerc',
                    codePostal: '80000',
                    ville: 'Amiens',
                  },
                  {
                    nom: 'Roux',
                    prenom: 'Thomas',
                    dateNaissance: new Date('2002-09-25'),
                    adresse: '23 rue Alsace Lorraine',
                    codePostal: '31000',
                    ville: 'Toulouse',
                  },
                  {
                    nom: 'Petit',
                    prenom: 'Manon',
                    dateNaissance: new Date('1998-12-03'),
                    adresse: '3 allée des Acacias',
                    codePostal: '44000',
                    ville: 'Nantes',
                  },
                  {
                    nom: 'Fournier',
                    prenom: 'Leo',
                    dateNaissance: new Date('1987-04-15'),
                    adresse: '90 boulevard des Belges',
                    codePostal: '59800',
                    ville: 'Lille',
                  },
                  {
                    nom: 'Andre',
                    prenom: 'Camille',
                    dateNaissance: new Date('1993-06-08'),
                    adresse: '66 rue Nationale',
                    codePostal: '59000',
                    ville: 'Lille',
                  },
            ],
        });

        res.status(201).json({ message: `${clients.count} clients créés.` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de l\'initialisation des données.' });
    }
});

export default router;
