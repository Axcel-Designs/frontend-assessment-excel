export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-96 animate-pulse" />
        </div>

        {/* Search skeleton */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
          <div className="grid gap-4 md:grid-cols-[1.4fr,0.9fr] lg:grid-cols-[1.8fr,1fr]">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Products grid skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
