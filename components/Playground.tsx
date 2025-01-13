
// "use client"

// import * as React from "react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Slider } from "@/components/ui/slider"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Mic, MoreHorizontal, RefreshCcw, Type } from 'lucide-react'

// export default function Playground() {
//     const [input, setInput] = React.useState("")
//     const [instructions, setInstructions] = React.useState("")
//     const [temperature, setTemperature] = React.useState(0.56)
//     const [maxLength, setMaxLength] = React.useState(256)
//     const [topP, setTopP] = React.useState(0.9)
    

//     return (
//         <div className="flex flex-col h-screen bg-black text-white">
//             {/* Header */}
//             <header className="flex items-center justify-between p-4 border-b border-white/10">
//                 <h1 className="text-xl font-semibold">Playground</h1>
//                 <div className="flex items-center gap-2">
//                     <Select defaultValue="default">
//                         <SelectTrigger className="w-[200px] bg-transparent border-white/20">
//                             <SelectValue placeholder="Load a preset..." />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectItem value="default">Load a preset...</SelectItem>
//                             <SelectItem value="grammar">Grammar correction</SelectItem>
//                             <SelectItem value="translation">Translation</SelectItem>
//                         </SelectContent>
//                     </Select>
//                     <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
//                         Save
//                     </Button>
//                     <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
//                         View code
//                     </Button>
//                     <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
//                         Share
//                     </Button>
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20">
//                                 <MoreHorizontal className="h-4 w-4" />
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                             <DropdownMenuItem>Reset all</DropdownMenuItem>
//                             <DropdownMenuItem>Export code</DropdownMenuItem>
//                         </DropdownMenuContent>
//                     </DropdownMenu>
//                 </div>
//             </header>

//             {/* Main content */}
//             <div className="flex flex-1 overflow-hidden">
//                 {/* Left panel */}
//                 <div className="w-1/2 p-4 flex flex-col gap-4">
//                     <div className="flex-1">
//                         <h2 className="text-sm font-medium mb-2">Input</h2>
//                         <Textarea
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Enter your text here..."
//                             className="h-full bg-transparent border-white/20 resize-none"
//                         />
//                     </div>
//                     <div className="h-[200px]">
//                         <h2 className="text-sm font-medium mb-2">Instructions</h2>
//                         <Textarea
//                             value={instructions}
//                             onChange={(e) => setInstructions(e.target.value)}
//                             placeholder="Enter instructions..."
//                             className="h-full bg-transparent border-white/20 resize-none"
//                         />
//                     </div>
//                     <div className="flex gap-2">
//                         <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
//                             Submit
//                         </Button>
//                         <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20">
//                             <RefreshCcw className="h-4 w-4" />
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Center panel */}
//                 <div className="w-1/2 p-4 border-l border-white/10">
//                     <div className="h-full bg-zinc-900 rounded-lg" />
//                 </div>

//                 {/* Right panel */}
//                 <div className="w-[300px] p-4 border-l border-white/10 space-y-6">
//                     <div>
//                         <h2 className="text-sm font-medium mb-4">Mode</h2>
//                         <div className="flex gap-2">
//                             <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20">
//                                 <Type className="h-4 w-4" />
//                             </Button>
//                             <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20">
//                                 <Mic className="h-4 w-4" />
//                             </Button>
//                             <Button variant="outline" size="icon">
//                                 <Type className="h-4 w-4" />
//                             </Button>
//                         </div>
//                     </div>

//                     <div>
//                         <h2 className="text-sm font-medium mb-4">Model</h2>
//                         <Select defaultValue="text-davinci-003">
//                             <SelectTrigger className="w-full bg-transparent border-white/20">
//                                 <SelectValue />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
//                                 <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
//                                 <SelectItem value="gpt-4">gpt-4</SelectItem>
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <div>
//                         <div className="flex justify-between mb-4">
//                             <h2 className="text-sm font-medium">Temperature</h2>
//                             <span className="text-sm text-white/60">{temperature}</span>
//                         </div>
//                         <Slider
//                             value={[temperature]}
//                             onValueChange={([value]) => setTemperature(value)}
//                             max={1}
//                             step={0.01}
//                             className="[&_[role=slider]]:bg-white"
//                         />
//                     </div>

//                     <div>
//                         <div className="flex justify-between mb-4">
//                             <h2 className="text-sm font-medium">Maximum Length</h2>
//                             <span className="text-sm text-white/60">{maxLength}</span>
//                         </div>
//                         <Slider
//                             value={[maxLength]}
//                             onValueChange={([value]) => setMaxLength(value)}
//                             max={1000}
//                             step={1}
//                             className="[&_[role=slider]]:bg-white"
//                         />
//                     </div>

//                     <div>
//                         <div className="flex justify-between mb-4">
//                             <h2 className="text-sm font-medium">Top P</h2>
//                             <span className="text-sm text-white/60">{topP}</span>
//                         </div>
//                         <Slider
//                             value={[topP]}
//                             onValueChange={([value]) => setTopP(value)}
//                             max={1}
//                             step={0.01}
//                             className="[&_[role=slider]]:bg-white"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

