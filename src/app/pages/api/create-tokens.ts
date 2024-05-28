import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: 'Missing authorization code' });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "postmessage"
    );

    const { tokens } = await oAuth2Client.getToken(code);

    return res.status(200).json(tokens);
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
