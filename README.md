## SECTION 1 - Workflow Git
- Branche main protégée (push direct bloqué, PR requis, check obligatoires, branche à jour).
- Convention de commits : `type: description` (feat, fix, docs, style, refactor, test, chore).
- Processus : feature branch -> commits -> PR -> checks -> merge via UI -> suppression de branche.

--------------------------
SCREEN CONFIG 
--------------------------
## SECTION 2 - CI/CD
- Badge statut CI/CD.
- Jobs: code-quality (ESLint + Prettier), tests (Mongo service, Jest, couverture >= 70%).
- Required checks: `code-quality`, `tests`.

## SECTION 3 - Installation et utilisation
- Prérequis: Node , MongoDB local ou URI disponible.
- Variables d'environnement:
  - `MONGODB_URI` (ex: `mongodb://localhost:27017/support_api`)
  - `PORT` (ex: `3000`)
- Commandes:
  - `npm run lint` / `npm run format:check` / `npm run format`
  - `npm run seed` / `npm test` / `npm start`
- Exemples API:
  - `GET /health` -> `{ "status": "ok" }`
  - `GET /api/request-types`
  - `GET /api/request-types/:id`
  - `POST /api/request-types` body: `{ code, name, description, priority, category, estimatedResponseTime }`

## SECTION 4- Structure du projet
Voir arborescence et rôle des dossiers:
- `src/config`: connexion à la BD
- `src/models`: schémas Mongoose
- `src/routes`: les différentes routes express
- `tests`: tests Jest/Supertest
- `scripts`: scripts utilitaires = seed

