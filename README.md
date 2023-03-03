# Overview

You've learned in class how to use Next.js to create production ready website. Now is the chance to get your hands dirty and practice.
You will create a website that shows the posts from a fake api.

```jsx
API_URL = https://dummyjson.com/posts;      // This gives you all the posts
API_URL = https://dummyjson.com/posts/1     // This gives you the first post

```

## Instructions

0. Make sure that you fork the Github repo first and give access to your teammate.
1. First you will need to install everything with `npm install` so you can use the project.
2. In addition to the index page in the `page` folder, create 3 pages:
   1. About us page that will contain your team's names (/about/index.jsx)
   2. A posts page that shows the list of all posts (/posts/index.jsx)
   3. Dynamic posts page. This page will be used to show posts in it. (/posts/[pid].jsx)
3. Create a `Navbar` component and add links to take the user to Home, Posts, and About pages
4. The posts page should use the `getStaticProps` function to get the data and pass it to the page as props. The data will be coming from the API endpoint above. Style the posts list in any way you want as long as you add a `Read more` link that takes the user to that page.
5. If a user clicks on a `Read more` link it should take them to a dyanmic routed page (/posts/[pid].jsx) that will use the `getStaticProps` and as a **BONUS** `getStaticPath` function to pregenerate all the pages.
6. As per usual, styling is up to you. So use whatever method that suits you like tailwindcss for example.

## Development

To run the webapp while developing, make sure to run `npm run dev` to start the development server.

## Deployment

After you're done, build the webapp with `npm build` and then run it with `npm start`. Notice how fast the website runs after building it.

## Useful links

[Routing in Next.js](https://nextjs.org/docs/routing/introduction)

[getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

[getStaticPath](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

* * *

### NEXTJS DEFAULT README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
