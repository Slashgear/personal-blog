import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await generateOgImageForSite()), {
    headers: { "Content-Type": "image/png" },
  });
