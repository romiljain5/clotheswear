This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Make .env.local file with following data in root folder
- use NEXT_PUBLIC_NAME -> if you want to display/use link in public
<a href="https://nextjs.org/docs/basic-features/environment-variables"> Read NextJs Documentation for environment variables </a>

```bash
MONGO_URI= mongodb://0.0.0.0:27017/clotheswear
NEXT_PUBLIC_HOST=http://localhost:3000
```

## Important links after enabling website 
- http://localhost:3000/api/getproducts - to get products data
- http://localhost:3000/ 

## Must known points
- To use MongoDB database use Thunder client to GET, POST and update request via POST request
- Make .env.local file in root folder and paste this MONGO_URI= mongodb://0.0.0.0:27017/clotheswear
    -Which is used to store database in mongoDB

- use productdata.json file to add product data in MongoDB compass
- Used crypto js npm library for encrypting password -> (<a href="https://www.npmjs.com/package/crypto-js">Crypto-js Documentation</a>)
- Used JWT (Json web token) for login implementation and keeping user signed in while surfing website -> (<a href="https://www.npmjs.com/package/jsonwebtoken">JWT Documentation</a>), <a href="https://jwt.io/">jwt.io</a>
- Used React top loading bar from npm -> <a href="https://www.npmjs.com/package/react-top-loading-bar">Click here</a>
- Used NextJs routers like useRouter for navigating to different pages -> <a href="https://nextjs.org/docs/api-reference/next/router" >Documentation</a>



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
