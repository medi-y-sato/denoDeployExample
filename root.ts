import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";
import mainRequest from "./main.ts";
import slackRequest from "./slack.ts"

serve({
    "/": mainRequest,
    404: () => new Response("not found")
});
