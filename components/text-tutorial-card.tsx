import Link from "next/link"
import { BookMarked, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TextTutorialCardProps {
  tutorial: {
    id: string
    title: string
    description: string
    category: string
    level: string
    readTime: number
    lastUpdated: string
    featured?: boolean
    tags?: string[]
  }
  variant?: "default" | "featured"
}

export default function TextTutorialCard({ tutorial, variant = "default" }: TextTutorialCardProps) {
  const formattedDate = new Date(tutorial.lastUpdated).toLocaleDateString()

  if (variant === "featured") {
    return (
      <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
        <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-6">
          <BookMarked className="h-16 w-16 text-primary/40" />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl">{tutorial.title}</h3>
            <Badge>{tutorial.level}</Badge>
          </div>
          <p className="text-slate-600 mb-4">{tutorial.description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-slate-500">O'qish vaqti: {tutorial.readTime} daqiqa</div>
            <Link href={`/tutorials/${tutorial.id}`}>
              <button className="text-primary hover:underline font-medium">O'qish</button>
            </Link>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-md transition-all h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookMarked className="h-4 w-4 text-primary" />
            {tutorial.title}
          </CardTitle>
          <Badge>{tutorial.level}</Badge>
        </div>
        <CardDescription>
          {tutorial.description.length > 60 ? `${tutorial.description.substring(0, 60)}...` : tutorial.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-600 line-clamp-3">{tutorial.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{tutorial.readTime} daqiqa</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {tutorial.tags && tutorial.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tutorial.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <div className="text-sm text-slate-500">Kategoriya: {tutorial.category}</div>
        <Link href={`/tutorials/${tutorial.id}`} className="text-primary text-sm hover:underline">
          Batafsil o'qish
        </Link>
      </CardFooter>
    </Card>
  )
}
