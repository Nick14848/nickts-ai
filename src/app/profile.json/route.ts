import { publicProfile } from "@/data/public-profile";
export const dynamic = "force-static";
export function GET() {
  return Response.json({ en: publicProfile("en"), zh: publicProfile("zh") }, { headers: { "Link": '</llms.txt>; rel="describedby"' } });
}
