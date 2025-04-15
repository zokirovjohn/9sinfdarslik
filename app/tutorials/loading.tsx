import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function TutorialsLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Skeleton className="h-9 w-24 rounded-md" />
        <Skeleton className="h-10 w-64 ml-4" />
      </div>

      {/* Search and Filter */}
      <Skeleton className="w-full h-[100px] rounded-lg mb-8" />

      {/* Featured Tutorials */}
      <Skeleton className="h-8 w-64 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Skeleton className="w-full h-[200px] rounded-lg" />
        <Skeleton className="w-full h-[200px] rounded-lg" />
      </div>

      {/* All Tutorials */}
      <Skeleton className="h-8 w-64 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className="border shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <Skeleton className="h-10 w-[300px]" />
      </div>
    </div>
  )
}
