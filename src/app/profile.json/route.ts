import { publicProfile } from "@/data/public-profile";
export const dynamic = "force-static";
export function GET() {
  return new Response(JSON.stringify({ en: publicProfile("en"), zh: publicProfile("zh") }, null, 2), { headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Link": '</llms.txt>; rel="describedby"',
  } });
}
