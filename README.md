## Description
This is a little project that I did for fun and to learn more abot handling apis, nextjs and typescript. The project uses the twitch api to get the clips from, you can search for a specific category and sort the clips based on date like twitch does. 


## Getting Started
First, create a .env file on the root of the project and and the folowing variables

```bash
CLIENT_ID="Get the client id from twitch"
CLIENT_SECRET="Get the client secret from twitch"
NEXT_PUBLIC_DOMAIN="https://localhost:3000/" # This is the domain of the nextjs local server
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
