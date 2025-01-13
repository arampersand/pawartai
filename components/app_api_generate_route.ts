import { NextResponse } from "next/server"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(req: Request) {
  try {
    const { image, name, quantity } = await req.json()

    const output = await replicate.run(
      "stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614",
      {
        input: {
          image,
          prompt: `A creative variation of this dog named ${name}, high quality, detailed`,
          num_outputs: parseInt(quantity, 10)
        }
      }
    )

    return NextResponse.json({ success: true, images: output })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    )
  }
}

