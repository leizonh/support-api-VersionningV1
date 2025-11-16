## SECTION 1 - Workflow Git
- Branche main protégée (push direct bloqué, PR requis, check obligatoires, branche à jour).
- Convention de commits : `type: description` (feat, fix, docs, style, refactor, test, chore).
- Processus : feature branch -> commits -> PR -> checks -> merge via UI -> suppression de branche.
  PS : sur le processus mon test ne fonctionne pas comparé au code quality ce qui empeche le merge et donc par ailleurs la suppressions des branches)

--------------------------
SCREEN CONFIG 
<img width="769" height="822" alt="Capture d&#39;écran 2025-11-16 181337" src="https://github.com/user-attachments/assets/526a3a77-6280-4e4a-9c65-1ea8746ec69c" />
<img width="803" height="912" alt="Capture d&#39;écran 2025-11-16 181400" src="https://github.com/user-attachments/assets/2186d836-2004-4732-9a4f-c8e55ef10b59" />
<img width="719" height="885" alt="Capture d&#39;écran 2025-11-16 181437" src="https://github.com/user-attachments/assets/301971dd-fb21-49ec-bcad-35549d1692c1" />

--------------------------
## SECTION 2 - CI/CD
- Badge statut CI/CD.
- Jobs: code-quality (ESLint + Prettier), tests.
- Required checks: `code-quality`, `tests`.
  PS : test ne fonctionne pas / mon docker a du mal a se lancer je pense que le pb viens de la
  
## SECTION 3 - Installation et utilisation
- Prérequis: Node , MongoDB local ou URI disponible.
- Variables d'environnement:
  - `MONGODB_URI` (ex: `mongodb://localhost:27017/support_api_v2`)
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

