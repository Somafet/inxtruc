# Inxtruc

Inxtruc is a Waitlist landing site built using [Tailwind CSS](https://tailwindcss.com), [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

This project boasts a simple waitlist subscription option and interactible mobile phones on the landing page to get the gist of the waitlist product instantly.

## Getting started

To get started with the project, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Environment variables

## Resend

Resend is used for sending emails to users.

`RESEND_API_KEY` - is used to provide the API key for the Resend client.

## Redis

Redis is used to keep simple track of the number of subscribed people to the waitlist. I just really wanted to try Redis out.

`REDIS_URL` - The connection URL to the Redis instance
