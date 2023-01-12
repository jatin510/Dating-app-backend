import express from 'express';
import cors from 'cors';

import { config } from './config';
import { userRoutes } from './routes';

const port = config.PORT;

const app = express();
app.use(cors());

app.use('/users', userRoutes);

app.get('/health', (_req, res) =>
  res.json({ ok: true, message: 'health check working fine' })
);

app.listen(port, () => console.log(`starting server in port ${port}`));
