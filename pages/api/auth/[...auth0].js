import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();

/**
 * Creates these routes to call
 * /api/auth/login: log the user in to your app by redirecting them to your Identity Provider.
 * /api/auth/callback: The page that your Identity Provider will redirect the user back to on login.
 * /api/auth/logout: log the user out of your app.
 * /api/auth/me: View the user profile JSON (used by the UseUser hook)
 */
