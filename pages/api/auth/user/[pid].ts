import { NextApiRequest, NextApiResponse } from "next";

const id = process.env.AUTH0_TEST_CLIENT_ID!;
const secret = process.env.AUTH0_TEST_CLIENT_SECRET!;
const issuer_base = process.env.AUTH0_ISSUER_BASE_URL!;

async function getAccessToken() {
  try {
    const response = await fetch(`${issuer_base}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"client_id":"${id}","client_secret":"${secret}","audience":"https://market-maker-lite.us.auth0.com/api/v2/","grant_type":"client_credentials"}`,
    });
    return await response.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let token = await getAccessToken();
  const { pid } = req.query;
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://market-maker-lite.us.auth0.com/api/v2/users/${pid}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token.access_token}`,
          },
        }
      );
      let user = await response.json();
      res.status(200).json(user);
    } catch (err) {
      throw new Error(err.message);
    }
  } else if (req.method === "PATCH") {
    const { app_metadata, id } = req.body;
    try {
      const response = await fetch(
        `https://market-maker-lite.us.auth0.com/api/v2/users/${pid}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            app_metadata: app_metadata,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token.access_token}`,
          },
        }
      );
      let data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      throw new Error(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
