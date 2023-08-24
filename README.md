# Development files

🚀 App deployed at: https://territories-pagiy.fly.dev

Make sure you're in the directory where `package.json` resides before you run each command.

### 🔧 [All] Installing Dependencies
```
npm install
```

### 👨🏻‍💻 [All] Running in Development
```
npm run dev
```

### ⚒ [All] Build for production
```
npm run build
```

### 👀 [Client] Preview Client Production Build
```
npm run preview
```

## How to Build for Production:
1. In client folder, type `npm run build` to create a build file. This outputs a `dist` folder.
2. In server folder, transpile to js files using `npm run build` command. This outputs a `dist` folder.
3. Since both folders for client and server are named `dist`, create a `build` folder for the client and paste the contents of the client `dist` to the newly created `build` folder.
4. Ensure everything is working (manual testing 😢)
5. Type `fly deploy` to deploy app.