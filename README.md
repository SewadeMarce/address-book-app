# Address Book App

Une application de carnet d'adresses fullstack construite avec **React 19**, **TypeScript**, **React Router v7**, **Express** et **MongoDB**.
![alt text](public/address-book.png)
## Description

Cette application permet de gérer des contacts et d'utiliser une authentification utilisateur avec JWT et cookies. L'interface client s'appuie sur React Router pour organiser les pages et routes, tandis que le serveur Express expose une API REST pour l'authentification et la gestion des contacts.

## Fonctionnalités

- Inscription et connexion utilisateur
- Gestion d'un carnet d'adresses
- Ajout, modification et suppression de contacts
- Recherche de contacts
- Marquage des contacts comme favoris
- Authentification sécurisée via JWT et cookies HTTP-only
- Rendu côté serveur en développement via Vite + Express

## Technologies

- TypeScript
- React 19
- React Router v7
- Express 5
- Vite
- Tailwind CSS
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## Structure du projet

- `app/` : code client React, routes et composants UI
- `server/` : API Express, configuration, contrôleurs, modèles et middleware
- `build/` : sortie de production après compilation
- `public/` : ressources publiques (si nécessaire)
- `vite.config.ts` : configuration Vite
- `react-router.config.ts` : routes React Router
- `server.ts` : serveur d'application principal

## Installation

1. Cloner le dépôt

```bash
git clone <URL_DU_DÉPÔT>
cd address-book-app
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env` à la racine du projet

```text
MONGODB_URI=mongodb://localhost:27017/addressbook
JWT_SECRET=une_cle_secrete_pour_la_signature_jwt
JWT_EXPIRY=7d
COOKIE_EXPIRY=604800000
PORT=5000
```

> Le projet utilisera ces valeurs si elles sont définies, ou leurs valeurs par défaut si elles sont absentes.

## Scripts

- `npm run dev` : démarre le serveur de développement avec Vite et Express
- `npm run build` : génère le build de production React Router
- `npm start` : démarre l'application en mode production
- `npm run typecheck` : lance la génération de type React Router et la compilation TypeScript

## Démarrage

### Développement

```bash
npm run dev
```

Puis ouvrez `http://localhost:5000`.

### Production

```bash
npm run build
npm start
```

## API principale

- `POST /api/auth/register` : inscription
- `POST /api/auth/login` : connexion
- `POST /api/auth/logout` : déconnexion
- `GET /api/auth/profile/:id` : profil utilisateur (protégé)

- `GET /api/contacts/search/:id` : recherche de contacts
- `GET /api/contacts/:id` : obtenir un contact
- `PUT /api/contacts/favorite/:id` : basculer favori
- `PUT /api/contacts/:id` : mettre à jour un contact
- `DELETE /api/contacts/:id` : supprimer un contact
- `POST /api/contacts/create` : créer un contact

## Notes

- L'authentification est gérée via des cookies et des middlewares Express.
- Le backend utilise `server/config/env.ts` pour charger et fournir les variables d'environnement.
- Les données sont stockées dans MongoDB via Mongoose.

## Contribution

N'hésitez pas à proposer des améliorations, à ajouter des tests ou à enrichir le design UX/UI.

## Licence

Ce projet est privé (`private: true` dans `package.json`), mais vous pouvez adapter sa documentation et le code pour un usage personnel ou éducatif.
