import express from 'express';
import cors from 'cors';

import { config } from './config';

const port = config.PORT;

const app = express();
app.use(cors());

app.get('/health', (_req, res) =>
  res.json({ ok: true, message: 'health check working fine' })
);

app.listen(port, () => console.log(`starting server in port ${port}`));
