
# Documentation Docker – PFR_CDA_Ynov_2025

Ce guide explique comment installer, lancer, arrêter, redémarrer et nettoyer le projet **uniquement avec Docker** (sans utiliser les scripts `.bat`).  
Vous pouvez ainsi gérer le projet via des commandes Docker/Docker Compose classiques.

---

## Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé (inclut Docker Compose)
- [Git](https://git-scm.com/) installé (pour cloner le projet)

---

## 1. Installation du projet

Clonez le dépôt et placez-vous dans le dossier du projet :

```sh
git clone https://github.com/Flimar311/PFR_CDA_Ynov_2025.git
cd PFR_CDA_Ynov_2025
```

---

## 2. Lancement en mode développement

Le mode développement utilise généralement :  
- `docker-compose.yml`  
- Les Dockerfile de dev (`Dockerfile` dans chaque service)

### Lancer les containers

```sh
docker compose -f docker-compose.yml up -d --build
```

- `-d` : démarre en arrière-plan
- `--build` : force la reconstruction des images

### Arrêter les containers

```sh
docker compose -f docker-compose.yml down
```

### Redémarrer les containers

```sh
docker compose -f docker-compose.yml down
docker compose -f docker-compose.yml up -d --build
```

---

## 3. Lancement en mode production

Le mode production utilise :  
- `docker-compose.production.yml` (ou `docker-compose.prod.yml` selon votre fichier)
- Les Dockerfile de prod (`Dockerfile.prod` dans chaque service)

### Lancer les containers

```sh
docker compose -f docker-compose.production.yml up -d --build
```

### Arrêter les containers

```sh
docker compose -f docker-compose.production.yml down
```

### Redémarrer les containers

```sh
docker compose -f docker-compose.production.yml down
docker compose -f docker-compose.production.yml up -d --build
```

---

## 4. Nettoyage complet de Docker

Supprime **tous** les containers, images, volumes et réseaux non utilisés (⚠️ cela affecte tous vos projets Docker locaux) :

```sh
# Arrêter tous les containers
docker container stop $(docker container ls -q)

# Supprimer tous les containers
docker container rm $(docker container ls -aq)

# Supprimer toutes les images non utilisées
docker image prune -f

# Supprimer tous les volumes non utilisés
docker volume prune -f

# Supprimer tous les réseaux non utilisés
docker network prune -f

# (Optionnel) Supprimer les données locales PostgreSQL du projet
rmdir /S /Q data\postgres-data   # (Windows, à adapter sous Linux/Mac)
```

---

## 5. Accès aux services

- **Backend** : http://localhost:8080
- **Frontend** : http://localhost:3000
- **PostgreSQL** : localhost:5432
- **pgAdmin** : http://localhost:5050
- **Swagger** : http://localhost:9999

---

## 6. Autres commandes utiles

### Voir les logs d’un service

```sh
docker compose -f docker-compose.yml logs backend
docker compose -f docker-compose.production.yml logs frontend
```

### Accéder à un shell dans un container

```sh
docker compose -f docker-compose.yml exec backend sh
```

---

## 7. Conseils

- Pour chaque modification de dépendances ou de Dockerfile, relancez avec `--build`.
- Pour la prod, assurez-vous que le frontend est bien buildé et servi en statique.
- Les fichiers `.env` peuvent être nécessaires selon votre configuration.

---

## 8. Résumé des fichiers importants

- `docker-compose.yml` : configuration dev
- `docker-compose.production.yml` : configuration prod
- `backend/Dockerfile` : Dockerfile dev backend
- `backend/Dockerfile.prod` : Dockerfile prod backend
- `frontend/Dockerfile` : Dockerfile dev frontend
- `frontend/Dockerfile.prod` : Dockerfile prod frontend