import { NextResponse } from "next/server"
import Replicate from "replicate"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(req: Request) {
  try {
    const { image, name, quantity, modelId } = await req.json()

    // Map model IDs to Replicate model versions
    const MODEL_VERSIONS: Record<string, string> = {
      'anime': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'pixel': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'watercolor': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'pop-art': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'realistic': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      '3d': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'cartoon': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614',
      'comic': 'stability-ai/sdxl:2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5c479ecd614'
    }

    const modelVersion = MODEL_VERSIONS[modelId] || MODEL_VERSIONS['realistic']

    const output = await replicate.run(
      modelVersion,
      {
        input: {
          image,
          prompt: `A creative variation of this dog named ${name}, high quality, detailed, ${modelId} style`,
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

