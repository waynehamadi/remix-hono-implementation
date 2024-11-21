# Remix + Hono Example

A minimal example of using [Remix](https://remix.run) with [Hono](https://hono.dev) via [react-router-hono-server](https://github.com/rphlmr/react-router-hono-server).

This implementation was made possible thanks to the work of:

- [Raphaël Moreau](https://github.com/rphlmr) with [react-router-hono-server](https://github.com/rphlmr/react-router-hono-server)
- [Sergio Xalambrí](https://github.com/sergiodxa) with [remix-hono](https://github.com/sergiodxa/remix-hono)

## Why This Matters

This combination solves several critical needs:

1. Middleware support is a critical piece of web architecture but isn't directly supported in Remix
2. Thanks to Remix's agnostic design, we can integrate any server we want with very little overhead
3. This allows us to benefit from Hono's middleware ecosystem and routing capabilities while keeping all the power of React Router
4. Most importantly, everything runs on a single port - no need to manage multiple servers or ports

## Features

- ⚡️ Remix running with Vite dev server
- 🔥 Hono middleware integration
- 🌍 Context passing from Hono to Remix loaders
- 🎨 Tailwind CSS for styling
- 📝 TypeScript support

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

````

## How it Works

The setup uses `react-router-hono-server` to integrate Hono with Remix. This allows us to:

- Use Hono's middleware capabilities
- Pass context from Hono to Remix loaders
- Handle API routes
- Manage sessions
- Add custom headers

### Key Files

- `entry.server.tsx`: Creates the Hono server and defines context
- `vite.config.ts`: Configures Vite and the dev server
- `routes/_index.tsx`: Example route showing context usage

### Example

The index route demonstrates context passing by showing request timestamps and URLs:

```typescript
export async function loader({ context }: LoaderFunctionArgs) {
  return json({
    requestTime: context.requestTime,
    url: context.url,
  });
}
```

## Development

Running `npm run dev` will start the Vite dev server with Hono integration.
Any changes to files will trigger HMR.

## Production

For production:

```bash
npm run build    # Build the app
npm run start    # Start the production server
```
````
