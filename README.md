## ✨ Features

- 💡 **TypeScript**: A language for application-scale JavaScript
- 💎 **Hooks**: Use React hooks API instead of traditional class API
- ✅ **Formik + Yup**: Using <b>Formik</b> to helps you with building forms and combine with <b>Yup</b> that is a JavaScript schema builder for value parsing and validation
- 🚀 **State-of-The-Art Development**: Newest development stack of <b>React/Hooks/Redux/Antd/Typescript</b>
- 🌐 **Multiple Language**: Built-in i18n solution
- ⚙️ **Best Practices**: Solid workflow to make your code healthy

## 📦 Install

```bash
# npm
$ npm install
$ npm run dev

# yarn
$ yarn install
$ yarn dev
```

## 🔨 Build

```bash
# npm
$ npm install
$ npm run build:development
$ npm run build:staging
$ npm run build:production

# yarn
$ yarn install
$ yarn build:development
$ yarn build:staging
$ yarn build:production
```

## 📱 Use husky

Create file <b>.lintstagedrc</b> in root folder:
```
{
  "**/*.{js,jsx,ts,tsx}": ["npm run format"]
}
```

```bash
$ npm set-script prepare "husky install" && npm run prepare
$ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
$ npx husky add .husky/pre-commit 'npx lint-staged'
```

## License

Copyright (c) 2022
