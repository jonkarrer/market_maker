# Market Maker Lite - Front-End

This is a project for the Market Maker Lite company. I am using Next.js + Typescript for the front end. The front-end goals are to pull API from a python database and display proprietary market information for each user. Stripe will be used for the payments, auth0 for the login, and AWS for the database. Hosted on vercel.

## Table of contents

- [Overview](#overview)
  - [The Goal](#the-goal)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Build](#build)
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
- Pay for premium subscription

### Screenshot

![](./public/assets/readme.png)

## Build

1. Created the front-end UI from the designer.
2. Set up auth0 for registration.
3. Connected Stripe to the backend.
4. Protected certain routes. Need auth or need subscription to access.

### Built with

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
- [Stripe Nextjs Vid](https://www.youtube.com/watch?v=WTUYem2IxLA&t=1105s) - A video walkthrough for stripe elements
- [React Elements Repo](https://github.com/stripe/react-stripe-js)
- [Testing](https://seanconnolly.dev/unit-testing-nextjs-api-routes) - This is for api testing examples with jest
- [Context Api](https://scotch.io/courses/10-react-challenges-beginner/use-context-to-pass-data) - helped create my context api

## Documentation

### @auth0/nextjs-auth0

- In the api folder I set up the routes to handle the sign in, api/auth/[...auth0].js. The package comes with a pre determined way to do this. This sets up routes to call. "/api/auth/login", "/api/auth/logout", "/api/auth/me", "/api/auth/callback"

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

- First I set up a utils folder with a stripe starter code. This creates a stripe session.

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

- In the Checkout component I init stripe and build the form. Learned this from <https://github.com/stripe/react-stripe-js>

```tsx
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";

const stripePromise = getStripe();
```

- First step, wrap the Elements tag around the forum. Use the stripePromise as an argument for the element.

```tsx
export default function Checkout() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
```

- Second step is building the forum that captures the card info. We use the card element for this.

```tsx
<form>
  <div className="border-solid border-1px p-2 bg-white w-500px m-auto">
    <CardElement
      options={{
        style: {
          base: {
            fontSize: "18px",
            color: "#424770",
            "::placeholder": {
              color: "#aab7c4",
            },
          },
          invalid: {
            color: "#9e2146",
          },
        },
      }}
    />
  </div>
</form>
```

- Inside the same form element as above, I put the 3 card options in the forum. This exposes the submit button so I can assign logic. The setChoice() useState hook controls which index in the e.target array to use for the handleSubmit function. I also need to disable the buttons to prevent double clicks. I pass the product id to the button value.

```tsx
<div className="flex items-center justify-center">
  <Card name="Free" price="0" length="month">
    <button
      type="submit"
      disabled={true}
      className={`bg-gray-600 text-base font-semibold text-white py-3 w-48 rounded`}
    >
      Current Plan
    </button>
  </Card>
  <Card name="Monthly" price="40" length="month">
    <button
      onClick={() => setChoice(2)}
      type="submit"
      value="price_1Iv4eIGCLPB3c1Gbupd88qoS"
      disabled={disableButton || !stripe}
      className={`bg-blue-border text-base font-semibold text-white py-3 w-48 rounded`}
    >
      Subscribe Monthly
    </button>
  </Card>
  <Card name="Annual" price="400" length="annualy">
    <button
      type="submit"
      value="price_1Iv4eIGCLPB3c1Gbupd88qoS"
      onClick={() => setChoice(3)}
      disabled={disableButton || !stripe}
      className={`bg-blue-border text-base font-semibold text-white py-3 w-48 rounded`}
    >
      Subscribe Annually
    </button>
  </Card>
</div>
```

- Lastly I set up the logic to execute to process the payment. I capture the productId using the useState hook, capture the card information from the CardElement, disable the button, remove the id of the paymentMethod, and send a request to the server with all the relavent information.

```tsx
const router = useRouter();
const stripe = useStripe();
const elements = useElements();
const { user } = useUser();
const email = user?.email;
const authId = user?.sub;
const handleSubmit = async (e) => {
  e.preventDefault();
  const productId = e.target[choice].value;
  console.log(productId);
  const { error, paymentMethod } = await stripe?.createPaymentMethod({
    type: "card",
    card: elements?.getElement(CardElement),
  });
  if (!error) {
    const { id } = paymentMethod;
    setDisableButton(true);
    try {
      const response = await fetchPostJSON("api/stripe/charge", {
        email,
        productId: productId,
        id,
        authId,
      });
      console.log(response);
      return router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
};
```

- The server recieves the credentials above and sends a post request to stripe to complete the payment and start the subscription.

```tsx
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import useCapture from "../../../utils/hooks/useCapture";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   * Email = auth0 email
   * ProductId = desired product
   * id = payment info from stripe elements
   */
  const { email, productId, id, authId } = req.body;

  try {
    //Create customer
    const customer = await stripe.customers.create({
      email: email,
    });
    //Add payment method
    const paymentMethod = await stripe.paymentMethods.attach(id, {
      customer: customer.id,
    });
    //Creat sub with customer
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: productId,
        },
      ],
      default_payment_method: id,
    });
    //Pass credentials to auth0 user database
    useCapture(customer.id, subscription.id, authId);
    await console.log(subscription);
    res.status(200).json({
      customer,
      subscriptionId: subscription.id,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
}
```

## Author

- Website - [Jon K.](https://jonkarrer.com)
- LinkedIN - [Jon Karrer](https://www.linkedin.com/in/jon-karrer-6b8a18186/)
- CodePen - [@jonkarrer](https://codepen.io/jonkarrer)

## Acknowledgments

Working directly with the owner
