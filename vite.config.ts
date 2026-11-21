import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { processTicketVerification } from './server/verifyTicket';

function ticketValidationPlugin(): Plugin {
  const handleApi = (req: any, res: any) => {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
      return;
    }

    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        let parsed: any = {};
        if (body) {
          try {
            parsed = JSON.parse(body);
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload received.' }));
            return;
          }
        }
        const result = await processTicketVerification(parsed);
        res.statusCode = result.success ? 200 : 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
      } catch (err: any) {
        console.error('API Verification Handler Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, message: err?.message || 'Internal Server Error' }));
      }
    });
  };

  return {
    name: 'api-ticket-validator',
    configureServer(server) {
      server.middlewares.use('/api/verify-ticket', handleApi);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/verify-ticket', handleApi);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Populate process.env for server middleware
  if (env.EVENTBRITE_API_TOKEN && !process.env.EVENTBRITE_API_TOKEN) {
    process.env.EVENTBRITE_API_TOKEN = env.EVENTBRITE_API_TOKEN;
  }
  if (env.DEVFEST_EVENTBRITE_EVENT_ID && !process.env.DEVFEST_EVENTBRITE_EVENT_ID) {
    process.env.DEVFEST_EVENTBRITE_EVENT_ID = env.DEVFEST_EVENTBRITE_EVENT_ID;
  }
  if (env.ALLOW_EARLY_VOLUNTEER_CLAIM && !process.env.ALLOW_EARLY_VOLUNTEER_CLAIM) {
    process.env.ALLOW_EARLY_VOLUNTEER_CLAIM = env.ALLOW_EARLY_VOLUNTEER_CLAIM;
  }

  return {
    plugins: [react(), ticketValidationPlugin()],
    server: {
      port: 5173,
      host: true,
    },
  };
});
