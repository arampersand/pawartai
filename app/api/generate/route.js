import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Replicate from "replicate";

export async function POST(req) {
    // Verificar autenticación
    const session = await getServerSession(authOptions);
    if (!session) {
        return new Response(JSON.stringify({ error: "Not authenticated" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const { prompt } = await req.json();

        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });

        const output = await replicate.run(
            "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            {
                input: {
                    prompt: prompt,
                    image_dimensions: "512x512",
                    num_outputs: 1,
                    num_inference_steps: 50,
                    guidance_scale: 7.5,
                },
            }
        );

        return new Response(JSON.stringify({ output: output[0] }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Error generating image" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
} 