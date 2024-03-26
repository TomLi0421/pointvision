# Client

1. `cd` to the `client` directory
2. `npm i` install all the packages
3. Create `.env` file, add the `VITE_STRIPE_PUBLIC_KEY=<public key>`
4. Setting up a Stripe Webhook
5. `npm run dev` to start the frontend
6. Go to `http://localhost:5173/`

# Server

1. `cd` to the `server` directory
2. Create `.env` file, add the `DATABASE_URL=<url> STRIPE_PRIVATE_KEY=<private key> CLIENT_URL=<url>`
3. `npm i` install all the packages
4. `nodemon index.js` to start the backend, every time save the backend will keep up to date
