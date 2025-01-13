"use client"

import * as React from "react"
import { Upload, Download, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { cn } from "@/lib/utils"


const MODEL_PRESETS = [
  {
    id: 'anime',
    name: 'Anime Style',
    preview: '/img/paw1.jpeg?height=full&width=full',
    description: 'Transform your pet into anime character'
  },
  {
    id: 'pixel',
    name: 'Pixel Art',
    preview: '/img/paw2.jpeg?height=full&width=full',
    description: 'Create pixel art version of your pet'
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    preview: '/img/paw3.jpeg?height=full&width=full',
    description: 'Artistic watercolor painting style'
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    preview: '/img/paw4.jpeg?height=full&width=full',
    description: 'Pop art inspired transformation'
  },
  {
    id: 'realistic',
    name: 'Realistic',
    preview: '/img/paw5.jpeg?height=full&width=full',
    description: 'Photorealistic art style'
  },
  {
    id: '3d',
    name: '3D Model',
    preview: '/img/paw6.jpeg?height=full&width=full',
    description: '3D rendered version of your pet'
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    preview: '/img/paw7.jpeg?height=full&width=full',
    description: 'Cute cartoon style transformation'
  },
  {
    id: 'comic',
    name: 'Comic',
    preview: '/img/paw8.jpeg?height=full&width=full',
    description: 'Comic book art style'
  }
]

const PREVIEW_PLACEHOLDERS = [
  {
    id: 1,
    src: '/img/paw9.jpeg?height=full&width=full',
    alt: 'Style 1'
  },
  {
    id: 2,
    src: '/img/paw10.jpeg?height=full&width=full',
    alt: 'Style 2'
  },
  {
    id: 3,
    src: '/img/paw11.jpeg?height=full&width=full',
    alt: 'Style 3'
  },
  {
    id: 4,
    src: '/img/paw12.jpeg?height=full&width=full',
    alt: 'Style 4'
  }
]

interface ImageGeneratorProps {
  className?: string
}

export default function ImageGenerator({ className }: ImageGeneratorProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string>("")
  const [name, setName] = React.useState("")
  const [quantity, setQuantity] = React.useState("4")
  const [isLoading, setIsLoading] = React.useState(false)
  const [generatedImages, setGeneratedImages] = React.useState<string[]>([])
  const [selectedModel, setSelectedModel] = React.useState<string>("")
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleGenerate = async () => {
    setIsLoading(true)
    try {
      // Simulate API call to Replicate
      await new Promise(resolve => setTimeout(resolve, 2000))

      setGeneratedImages([
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400"
      ])
    } catch (error) {
      console.error("Generation failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex h-screen bg-black", className)}>
      {/* Left Sidebar */}
      <div className="w-[300px] border-r border-white/10 p-6 flex flex-col">
        <div className="text-3xl font-bold mb-8">
          <span className="text-blue-500">PAW</span>
          <span className="text-red-500">ART</span>
          <span className="text-blue-500">AI</span>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />

        <Button
          onClick={handleUploadClick}
          className="bg-blue-500 hover:bg-blue-600 mb-6"
          size="lg"
        >
          <Upload className="mr-2 h-4 w-4" />
          UPLOAD
        </Button>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 bg-transparent border-white/20"
        />

        <Input
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mb-4 bg-transparent border-white/20"
          type="number"
          min="1"
          max="4"
        />

        <Button
          onClick={handleGenerate}
          className="bg-red-500 hover:bg-red-600 mb-6"
          disabled={!selectedFile || !selectedModel || isLoading}
        >
          {isLoading ? "Generating..." : "Run"}
        </Button>

        {/* Model Selection Grid */}
        <div className="grid grid-cols-2 gap-2 overflow-y-auto">
          {MODEL_PRESETS.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden group",
                "border border-white/10 hover:border-white/30 transition-colors",
                selectedModel === model.id && "border-blue-500"
              )}
            >
              <Image
                src={model.preview}
                alt={model.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-2">
                <span className="text-xs text-white font-medium">
                  {model.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-6">
        <div className="absolute top-6 right-6">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-6 w-6" />
          </Button>
        </div>

        {/* Main Preview */}
        <div className="flex-1 w-full max-w-3xl flex flex-col items-center justify-center gap-8">
          {preview ? (
            <div className="relative w-[512px] aspect-square">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="w-[512px] aspect-square bg-zinc-900 rounded-lg" />
          )}

          {preview && (
            <Button variant="ghost" size="icon" className="rounded-full">
              <Download className="h-6 w-6" />
            </Button>
          )}

          {/* Preview Placeholders */}
          <div className="w-full grid grid-cols-4 gap-4">
            {PREVIEW_PLACEHOLDERS.map((placeholder) => (
              <div
                key={placeholder.id}
                className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden group"
              >
                <Image
                  src={placeholder.src}
                  alt={placeholder.alt}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Generated Images */}
        {generatedImages.length > 0 && (
          <div className="w-full max-w-3xl grid grid-cols-4 gap-4 mt-8">
            {generatedImages.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={img}
                  alt={`Variation ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

