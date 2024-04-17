# Getting Started

## Installing the Application

### Client Setup

Follow these steps to set up the client:

1. Navigate to the `client` directory:
   ```
   cd client
   ```
2. Install all the necessary packages:
   ```
   npm install
   ```
3. Create a `.env` file in the `client` directory. Add your Stripe public key:
   ```
   VITE_STRIPE_PUBLIC_KEY=<public key>
   # for local developement
   VITE_SERVER_URL=http://localhost:3001
   # for production
   VITE_SERVER_URL=https://pointvision.site
   ```
4. Set up a Stripe Webhook. Follow the instructions in the [Stripe documentation](https://docs.stripe.com/webhooks).

5. Start the frontend:
   ```
   npm run dev
   ```
6. Open your web browser and go to `http://localhost:5173/`.

### Server Setup

Follow these steps to set up the server:

1. Navigate to the `server` directory:
   ```
   cd server
   ```
2. Create a `.env` file in the `server` directory. Add your database URL, Stripe private key, and client URL:

   ```
   PORT=3001
   DATABASE_URL=<url>
   STRIPE_PRIVATE_KEY=<private key>
   MAILCHIMP_API_KEY=<url>
   # for local developement
   CLIENT_URL=http://localhost:5173
   # for production
   CLIENT_URL=https://pointvision.site
   ```

3. Install all the necessary packages:
   ```
   npm install
   ```
4. Start the backend with `nodemon`. The server will automatically update whenever you save a file:
   ```
   nodemon index.js
   ```

## Tech Stack

- TypeScript
- Tailwind CSS
- React
- Node.js
- MongoDB
- Nginx
- AWS EC2
- AWS s3
- AWS CloudFront
- Stripe API
