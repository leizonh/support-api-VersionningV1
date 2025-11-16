## SECTION 1 - Workflow Git
- Branche main protégée (push direct bloqué, PR requis, check obligatoires, branche à jour).
- Convention de commits : `type: description` (feat, fix, docs, style, refactor, test, chore).
- Processus : feature branch -> commits -> PR -> checks -> merge via UI -> suppression de branche.
PS : (Le processus ne fonctionne pas, vu que mes test ne passe pas alors que les code quality si, je ne peux pas merge et donc par conséquent je ne les supprime pas). 
--------------------------
SCREEN CONFIG 
<img width="769" height="822" alt="Capture d&#39;écran 2025-11-16 181337" src="https://github.com/user-attachments/assets/40fa417d-8fcd-41d9-b175-948cfd2c17d6" />
<img width="803" height="912" alt="Capture d&#39;écran 2025-11-16 181400" src="https://github.com/user-attachments/assets/f969459e-d947-45b4-9321-175141efa7b4" />
<img width="719" height="885" alt="Capture d&#39;écran 2025-11-16 181437" src="https://github.com/user-attachments/assets/18d9e357-114c-4ff9-9d35-e967595cad58" />

--------------------------
## SECTION 2 - CI/CD
- Badge statut CI/CD.
- Jobs: code-quality (ESLint + Prettier), tests.
- Required checks: `code-quality`, `tests`.
  PS : test ne fonctionne pas.

## SECTION 3 - Installation et utilisation
- Prérequis: Node , MongoDB local.
- Variables d'environnement:
  - `MONGODB_URI` (ex: `mongodb://localhost:27017/support_api`)
  - `PORT` (ex: `3000`)
- Commandes:
  - `npm run lint` / `npm run format:check` / `![Uploading Capture d'écran 2025-11-16 181437.png…]()
npm run format`
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

