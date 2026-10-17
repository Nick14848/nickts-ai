import { profileMarkdown } from "@/data/public-profile";
export const dynamic = "force-static";
export function GET() {
  return new Response(profileMarkdown("zh"), { headers: { "Content-Type": "text/markdown; charset=utf-8", "Link": '</llms.txt>; rel="describedby"' } });
}
