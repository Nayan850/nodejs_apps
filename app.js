const express = require('express');
const promBundle = require('express-prom-bundle');

const app = express();
const port = 4000;

// Prometheus metrics middleware
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  metricsPath: '/metrics'
});

app.use(metricsMiddleware);

// Your application route
app.get('/', (req, res) => {
  res.send('DevOps production flow l1!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
