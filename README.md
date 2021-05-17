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

```html
<h1>Some HTML code I'm proud of</h1>
```

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

Need to integrate testing with Cypress

### Useful resources

- [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0) - This helped me set up the auth0-next.js integration.
- [Getting Stripe Set-up](https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe) - This gives a direct example of how to bring stripe in with next.js.
- [Stripe Git-hub](https://github.com/stripe/stripe-js) - The repo to get stripe started.

## Author

- Website - [Jon K.](https://jonkarrer.com)
- LinkedIN - [Jon Karrer](https://www.linkedin.com/in/jon-karrer-6b8a18186/)
- CodePen - [@jonkarrer](https://codepen.io/jonkarrer)

## Acknowledgments

Working directly with the owner
