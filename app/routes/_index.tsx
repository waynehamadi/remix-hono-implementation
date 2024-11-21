// app/routes/_index.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ context }: LoaderFunctionArgs) {
  return json({
    requestTime: context.requestTime,
    url: context.url,
  });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Remix + Hono</h1>
      <div className="space-y-2">
        <p>Request made at: {data.requestTime}</p>
        <p>URL: {data.url}</p>
      </div>
    </div>
  );
}
