## Install and use

- Installation dependencies

```bash
npm install
```

- Run

```bash
npm run dev
```

- Build

```bash
npm run build:development
```

```bash
npm run build:staging
```

```bash
npm run build:production
```

- Check eslint

```bash
npm run lint:fix
```

- Format code

```bash
npm run prettier
```

## How to use husky

Create file <b>.lintstagedrc</b> in root folder:
```
{
  "**/*.{js,jsx,ts,tsx}": ["npm run format"]
}
```

<code>npm set-script prepare "husky install" && npm run prepare</code>

<code>npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'</code>

<code>npx husky add .husky/pre-commit 'npx lint-staged'</code>

## How to pull request

1. Fork code!
2. Create your own branch: `git checkout -b feature/xxxx`
3. Submit your changes: `git commit -m 'type: subject'`
4. Push your branch: `git push origin feature/xxxx`
5. submit`pull request`

## Git Contribution submission specification

- Reference [React](https://github.com/reactjs/react/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` Add new features
  - `fix` Fix the problem/BUG
  - `style` The code style is related and does not affect the running result
  - `perf` Optimization/performance improvement
  - `refactor` Refactor
  - `revert` Undo edit
  - `test` Test related
  - `docs` Documentation/notes
  - `chore` Dependency update/scaffolding configuration modification etc.
  - `workflow` Workflow improvements
  - `ci` Continuous integration
  - `types` Type definition file changes
  - `wip` In development

- Example: `git commit -m "chore: lint commit message"`

## License

Copyright (c) 2022
