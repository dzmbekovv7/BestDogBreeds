import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
  const { data: articles, isLoading } = useGetArticles()
  const categories = [...new Set(articles?.map(article => article.type))]

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 to-gray-900 py-28 overflow-hidden">
      {/* Абстрактные желтые свечения */}
      <div className="absolute top-12 left-1/4 w-48 h-48 bg-yellow-700 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-36 h-36 bg-yellow-600 rounded-full blur-2xl opacity-15 pointer-events-none" />

      {/* Заголовок */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Explore Our <span className="text-yellow-700">Categories</span>
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto font-light">
          Dive into diverse topics, each telling a unique story. Find your passion in our curated selection.
        </p>
      </div>

      {/* Список категорий */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-40 bg-yellow-700/30 rounded-3xl animate-pulse shadow-inner"
              />
            ))
          : categories.map((category) => (
              <a
                key={category}
                href={`/blog?type=${encodeURIComponent(category || '')}`}
                className="group block bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300 text-white"
              >
                <h3 className="text-3xl font-extrabold tracking-wide mb-3 group-hover:text-white/90">
                  {category?.toUpperCase()}
                </h3>
                <p className="text-yellow-100/90 font-medium">
                  Discover the <span className="underline decoration-yellow-300">essence</span> of {category}.
                </p>
              </a>
            ))}
      </div>

      {/* Нижняя линия — акцент */}
      <div className="mt-24 flex justify-center">
        <div className="w-56 h-1 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 animate-pulse" />
      </div>
    </section>
  )
}
