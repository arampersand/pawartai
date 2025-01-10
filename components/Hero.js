'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Globe, Sparkles, Upload } from 'lucide-react';
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import imgbackground from "@/public/img/gandalf.jpeg";

// Define el componente FeatureCard antes de usarlo
function FeatureCard({
  icon,
  title,
  description
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="p-3 mb-4 rounded-lg w-fit bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background grid of pet images */}
      <div className="absolute inset-0 opacity-20 overflow-hidden -skew-y-6">
        <div className="grid grid-cols-4 gap-1 w-full h-[200%] transform -translate-y-1/4">
          {[...Array(128)].map((_, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/img/gandalf.jpeg?height=150&width=150`}
                alt="Pet photo example"
                className="object-cover rounded-lg"
                fill
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      {/* Main content */}
      <div className="relative px-4 py-20 mx-auto max-w-7xl">
        <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          #1 Pet AI Photo Generator
        </Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Transform Your Pet into a
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            World Traveler
          </span>
        </h1>

        <p className="max-w-2xl mb-8 text-lg text-gray-300 sm:text-xl">
          Create magical AI-generated photos of your furry friend exploring the world's most incredible landmarks. From the Great Wall to the Pyramids, give your pet the adventure of a lifetime!
        </p>

        <div className="flex flex-col items-center gap-4 mb-12 sm:flex-row sm:gap-6">
          <Input
            type="email"
            placeholder="Enter your email to start the adventure..."
            className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl"
          />
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl">
            Start Creating Now
          </Button>
        </div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Upload className="w-6 h-6" />}
            title="Easy Upload"
            description="Simply upload your pet's photo and let our AI do the magic"
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="World Landmarks"
            description="Choose from 100+ famous locations and landmarks worldwide"
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="AI Magic"
            description="Get stunning, realistic photos of your pet in seconds"
          />
        </div>

        {/* Example Photos Grid */}
        <div className="grid gap-4 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden rounded-2xl">
              <Image
                src={`/img/gandalf.jpeg?height=400&width=400`}
                alt={`Pet adventure example ${i + 1}`}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Fluffy at the Pyramids</p>
                  <p className="text-xs opacity-75">Generated with PetAI</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative px-4 py-20 mx-auto max-w-7xl bg-black">
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="PetAI is revolutionizing how pet owners create memorable photos of their furry friends"
            source="TechCrunch"
          />
          <TestimonialCard
            quote="The future of pet photography is here - no travel or expensive photoshoots needed"
            source="PetLovers Magazine"
          />
          <TestimonialCard
            quote="Generate unlimited adventures for your pets with stunning AI-powered imagery"
            source="Digital Trends"
          />
        </div>
      </div>
    </div>
  );
};

// Define el componente TestimonialCard también
function TestimonialCard({ quote, source }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
      <p className="mb-4 text-gray-300">&quot;{quote}&quot;</p>
      <p className="text-sm font-medium text-gray-400">{source}</p>
    </div>
  );
}

export default Hero;
