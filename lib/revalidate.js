// // pages/api/revalidate.js
// export default async function handler(req, res) {
//     // Verifica o token secreto
//     if (req.query.secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
  
//     try {
//       // Revalida a página de postagens
//       await fetch(`https://www.rodepsi.com/api/revalidation?secret=${process.env.CONTENTFUL_REVALIDATE_SECRET}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ page: '/posts' })
//       });
//       return res.json({ revalidated: true });
//     } catch (err) {
//       return res.status(500).send('Error revalidating');
//     }
//   }
  