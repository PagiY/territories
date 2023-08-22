# Production Build for this Web Application

Deployed at: https://territories-pagiy.fly.dev

## How to Build for Production:
1. In client folder, type `npm run build` to create a build file.
2. In server folder, transpile to js files using `npm run build` command. This outputs a `dist` folder.
3. Since both folders for client and server are named `dist`, create a `build` folder for the client and paste the contents of the `dist` folder in under client.
4. Type `fly deploy` to deploy app.
