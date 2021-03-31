import { validateRequest } from "https://deno.land/x/sift@0.1.6/mod.ts";

export default async function mainRequest(request: Request) {

    const { error } = await validateRequest(request, {
        GET: {},
    });
    if (error) {
        return new Response(
            `<body><p>エラーっす</p><p>${error.status} : ${error.message}</p></body>`,
            {
                headers: {
                    "content-type": "text/html; charset=UTF-8",
                },
            },
        );;
    }

    if (request.method === "GET") {
        return new Response(
            `<body><p>はろーわーるど</p></body>`,
            {
                headers: {
                    "content-type": "text/html; charset=UTF-8",
                },
            },
        );
    } else {
        return new Response(
            `<body><p>postされても....</p></body>`,
            {
                headers: {
                    "content-type": "text/html; charset=UTF-8",
                },
            },
        );
    }

}

