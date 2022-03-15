// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'Maria Rita' },
    { name: 'Paullo Dias' },
    { name: 'João Pedro' },
    { name: 'Rita de Cassia' },
    { name: 'Miguel Arcanjo' },
    { name: 'Lucas Souza' },
    { name: 'Carol Albuqueque' },
    { name: 'Matheus Silva' },
  ])
}
