# SHOP APP

This is an ecommerce project with a homepage that shows a variaty of products and a detail product page. On the homepage I can add items to the cart.

You'll find two folders:
 - client: 
 A [React.js](https://react.dev/) project bootstrapped with [Next.js](https://nextjs.org/). State managed with [Redux toolkit](https://redux-toolkit.js.org/) and styled with [styled-components](https://styled-components.com/). Tested using [Jest](https://jestjs.io/).
 [Apollo client](https://www.apollographql.com/docs/) is used to handle the data with [GraphQL](https://graphql.org/).

 - shop-app: 
 An ecommerce server generated with [@vendure/create](https://github.com/vendure-ecommerce/vendure/tree/master/packages/create).


## Getting Started

1) First, run Vendure server inside `shop-app` folder:

```bash
yarn dev
```

will start the Vendure server and [worker](https://www.vendure.io/docs/developer-guide/vendure-worker/) processes from
the src directory.

2) Go back to `client` folder and run development server

```bash
yarn dev
```

