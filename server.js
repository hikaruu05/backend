const express = require('express');
const cors = require('cors');
const app = express();

// Mengizinkan semua domain
app.use(cors());

// Atau, mengizinkan hanya domain tertentu
// app.use(cors({ origin: 'https://frontendrpl.netlify.app' }));

// Rute contoh
app.get('/some-endpoint', (req, res) => {
  res.json({ message: 'CORS enabled for this route' });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
