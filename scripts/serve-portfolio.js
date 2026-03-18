const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5173;

// Serve static files from the dist directory under the /portfolio prefix
app.use('/portfolio', express.static(path.join(__dirname, '../dist')));

// Fallback all other routes under /portfolio/ to index.html for SPA support
app.get('/portfolio/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Redirect root to /portfolio/ for convenience during testing
app.get('/', (req, res) => {
  res.redirect('/portfolio/');
});

app.listen(port, () => {
  console.log(`\n🚀 Production preview server running!`);
  console.log(`🔗 Local URL: http://localhost:${port}/portfolio/`);
  console.log(`Press Ctrl+C to stop.\n`);
});
