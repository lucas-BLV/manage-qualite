#!/bin/bash

# Vérifie si le dossier courant est vide
if [ -z "$(ls -A /work/projet/ | grep -v '^\.gitkeep$')" ]; then
    rm .gitkeep
    npm create -y vite . -- --template react-ts
else
    echo "Projet déjà existant, skipping install"
fi
npm install
npm run dev -- --host