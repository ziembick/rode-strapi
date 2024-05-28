import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token, event } = req.body;

  if (!token || !event) {
    return res.status(400).json({ message: 'Missing token or event data' });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error creating event:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
