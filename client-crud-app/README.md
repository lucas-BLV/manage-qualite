# (DEV) Docker-compose React & Express

Ce docker permet de créer un environnement de développement comprenant :
- Un conteneur React (Front)
- Un conteneur Express (Back)
- Un conteneur PostgreSQL (Database)

Les conteneurs React et Express utilise ViteJS.

## Installation

### Pré-requis

Cloner le projet.

### Projet déjà existant

Si vous avez un projet déjà existant, mettez le dans les dossiers adéquats :
- Pour le front : ./front/projet/
- Pour le back : ./back/projet/
- Pour un dump de DB : ./database/

Vos packages.json doivent être dans le dossier projet! (./front/projet/packages.json)<br/>
Vos projet doivent également utiliser ViteJS ! (autrement, cela ne fonctionnera pas)

### Sinon....

Si vous n'avez pas de projet et que vous partez de 0, le docker s'occupe de crée les projets React et Express.

### Paramétrages

Il est possible de modifier certaines options dans le docker-compose, comme par exemple les ports, les noms des conteneurs...

### Debug

Si l'un des conteneurs Back ou Front s'éteinds tout seul, c'est probablement car votre dossier ./projet n'est pas vide, (seul un .gitkeep est accepté), et/ou que vous n'avez pas de projet ViteJS dans le dossier projet.
