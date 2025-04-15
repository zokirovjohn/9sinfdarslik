import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CatalogLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Skeleton className="h-9 w-24 rounded-md" />
        <Skeleton className="h-10 w-64 ml-4" />
      </div>

      {/* Hero Banner */}
      <Skeleton className="w-full h-[200px] rounded-xl mb-8" />

      {/* Tabs */}
      <Skeleton className="w-[400px] h-10 rounded-md mb-8" />

      {/* Search and Filter */}
      <Skeleton className="w-full h-[100px] rounded-lg mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Skeleton className="w-full h-[600px] rounded-lg" />
        </div>

        {/* Course List */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="border shadow-sm">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="w-full h-[150px] rounded-md mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full rounded-md" />
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <Skeleton className="h-10 w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
