# Market Maker Lite - Front-End

This is a project for the Market Maker Lite company. I am using Next.js + Typescript for the front end. The front-end goals are to pull API from a python database and display proprietary market information for each user. Chart.js will be used to elegantly display this data in their dashboard.

## Table of contents

- [Overview](#overview)
  - [The Goal](#the-goal)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Documentation](#documentation)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The goal

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Sign-In
- Create Account with info
- Access Custom Dashboard
- Pay for premium services

### Screenshot

![](./public/assets/readme.png)

## My process

- One section at a time.
- Optimized before moving to next section
- Responsive design testing
- Document all unique code and 'gotchas'

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

- For tailwindcss, you have to name your components folder 'components' not 'comps'.

Some unique code snippets:

- Dynamic Styles for TailwindCSS

```jsx
  <div
    onClickCapture={() => setOpen(true)}
    className={`absolute transition-all z-20 bg-white
    ${
      open
        ? `top-0 right-0 w-screen h-screen`
        : `top-5 right-5 w-8 h-8 rounded-full`
    } overflow-hidden`}
  >
```

- Remove header if user is in the register pages.

```jsx
function MyApp({ Component, pageProps, router }) {
  let signUp = router.pathname.startsWith("/register/sign_up");
  let signIn = router.pathname.startsWith("/register/sign_in");
  //Remove Navbar
  if (signUp || signIn) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

- Add absolute imports and module aliases

```javascript
//tsconfig.json
 "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
```

### Continued development

Need to integrate testing with Cypress.

### Useful resources

- [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0) - This helped me set up the auth0-next.js integration.
- [Getting Stripe Set-up](https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe) - This gives a direct example of how to bring stripe in with next.js.
- [Stripe Git-hub](https://github.com/stripe/stripe-js) - The repo to get stripe started.
- [Stripe Nextjs Vid](https://dev.to/stripe/type-safe-payments-with-next-js-typescript-and-stripe-4jo7) - A video walkthrough
- [Testing](https://seanconnolly.dev/unit-testing-nextjs-api-routes) - This is for api testing examples with jest

## Documentation

### @auth0/nextjs-auth0

- In the api folder I set up the routes to handle the sign in, api/auth/[...auth0].js. The package comes with a pre determined way to do this. This sets up routes to call. "/api/auth/login", "/api/auth/logout", "/api/auth/me"

```jsx
import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();
```

- This library offers a UseProvider component that wraps the app. This controls the user login state.

```jsx
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
```

- Then use a useUser hook to facilitate the login. isLoading is 'true' until user is loaded in. user is the user object with the properties of email, sub (id), username, name, etc.

```jsx
import { useUser } from "@auth0/nextjs-auth0";
const { user, isLoading } = useUser();
```

- I used conditional rendering to change the navbar when the user signs in.

```jsx
{
  !isLoading && !user && (
    <>
      <Link href="/api/auth/login">
        <p className="mr-10 cursor-pointer">Sign In</p>
      </Link>
      <Link href="/api/auth/login">
        <button className="btn md:text-xl 2xl:text-2xl sm:px-4 sm:py-2 hover:bg-btn-hover">
          Sign Up
        </button>
      </Link>
    </>
  );
}
{
  !isLoading && user && (
    <>
      <Link href="/api/auth/logout">
        <a className="mr-10">Sign Out</a>
      </Link>
      <Link href="/api/auth/me">
        <button className="btn md:text-xl 2xl:text-2xl sm:px-4 sm:py-2 hover:bg-btn-hover">
          {user.sub}
        </button>
      </Link>
    </>
  );
}
```

### Stripe

- First I set up a ulils folder with a stripe starter code. This creates a stripe session.

```typescript
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
```

- When a user selects a package option, I pass the price_id of the package to stripe and start a checkout.

```jsx
import getStripe from "../../utils/get-stripejs";

const handleClick: React.EventHandler<any> = async (priceId) => {
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      priceId: priceId,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    console.warn(error.message);
};

<button
  className="btn"
  onClick={() => handleClick("price_1Iv4eIGCLPB3c1Gbupd88qoS")}
>
  Get Premium
</button>
```

- My api route, "/api/checkout_sessions", created a post request to send to stripe. This info is uses in the checkout session.

```typescript
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { priceId } = req.body;
    try {
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    }
  }
```

- After the customer completes or cancels their payment, they are redirected to the results page. This is where I capture the stripe customer data a pass it to the auth0 user data. I use a custom hook called useCapture().

## Author

- Website - [Jon K.](https://jonkarrer.com)
- LinkedIN - [Jon Karrer](https://www.linkedin.com/in/jon-karrer-6b8a18186/)
- CodePen - [@jonkarrer](https://codepen.io/jonkarrer)

## Acknowledgments

Working directly with the owner
