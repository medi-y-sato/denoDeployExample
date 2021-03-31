import { json, validateRequest } from "https://deno.land/x/sift@0.1.6/mod.ts";

export default async function slackRequest(request: Request) {

    // リクエストのバリデート
    const { error } = await validateRequest(request, {
        GET: {},
        POST: {},
    });
    if (error) {
        return json(
            { response_type: "ephemeral", text: error.message },
            { status: error.status },
        );
    }

    // ブラウザでアクセスしてきたらメッセージ出す
    if (request.method === "GET") {
        return new Response(
            `<body><p>直接リクエストするもんと違うで</p></body>`,
            {
                headers: {
                    "content-type": "text/html; charset=UTF-8",
                },
            },
        );
    }

    // 応答
    return json(
        {
            "channel": "YOUR_CHANNEL_ID",
            "text": "Hello, world"
        }
    );

}

