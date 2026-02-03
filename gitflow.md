# Gitflow classique (Vincent Driessen)


## 1) Branches principales

### Branches principales

| Branche   | But |
|----------|-----|
| `main`   | Version stable, production. Merge via Pull Request uniquement. |
| `develop`| Branche principale pour le développement. Toutes les fonctionnalités passent par ici. |

### Branches temporaires

| Type          | Convention de nom       | But |
|---------------|-----------------------|-----|
| Feature       | `feature/nom-fonction`| Nouvelle fonctionnalité |
| Bugfix        | `bugfix/nom-bug`      | Correction de bug |
| Release       | `release/x.y.z`       | Préparation d'une release |
| Hotfix        | `hotfix/urgent`       | Correction rapide en production |

---

## 2) Bonnes Pratiques de Commits

### Objectifs

- Un commit = une seule idée ou modification.
- Historique clair et lisible.
- Possibilité de revert facilement un commit si nécessaire.
- Facilite la revue de code (Pull Request).

### Structure recommandée de commit 

Convention **Angular / Conventional Commits** :


**Types courants :**

| Type      | Usage |
|-----------|-------|
| feat      | Nouvelle fonctionnalité |
| fix       | Correction de bug |
| docs      | Documentation |
| style     | Formatage, indentation, espace |
| refactor  | Refactor sans bug ni nouvelle fonctionnalité |
| test      | Ajouter ou corriger des tests |
| chore     | Configuration, scripts, outils |

**Exemple :**


---

## 3) La règle des 5 commits par branche

- Chaque branche de fonctionnalité doit idéalement avoir **5 commits maximum**, bien découpés et logiques.
- Chaque commit doit avoir un objectif précis.
- Facilite la revue, le revert et la lisibilité de l’historique.

**Exemple : branche `feature/login`**

1. `feat(auth): create login form`  
2. `feat(auth): connect login form to API`  
3. `fix(auth): correct password validation`  
4. `test(auth): add unit tests login`  
5. `docs(auth): update README for login`

---

## 4) Workflow Gitflow concret

```bash
# Crée main et develop
git init
git checkout -b main
git commit -m "chore: initial commit"
git checkout -b develop

# Crée une feature branch
git checkout -b feature/login

# Travailles sur la feature
git add .
git commit -m "feat(auth): create login form"
git commit -m "feat(auth): connect login form to API"
git commit -m "test(auth): add unit tests login"

# Push et PR vers develop
git push origin feature/login
