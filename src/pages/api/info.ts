import type { APIRoute } from "astro";

interface InfoParams {
    name?: string;
}

function getUrl(url: string): URL {
    return new URL(url);
}

/**
 * Disable static render of endpoint
 */
export const prerender = false; 

export const GET: APIRoute = async ({ params, request }) => {
    // const name = (params as InfoParams).name ?? "world";

    const name = getUrl(request.url).searchParams.get("name") ?? "world";
    return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};
