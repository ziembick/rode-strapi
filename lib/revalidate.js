// pages/api/revalidate.js
export default async function handler(req, res) {
    // Verifica o token secreto
    if (req.query.secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      // Revalida a página de postagens
      await res.revalidate('/posts');
      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).send('Error revalidating');
    }
  }
  