import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
  const { data: articles, isLoading } = useGetArticles()

  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 lg:py-32 overflow-hidden text-white">
      {/* Абстрактные светящиеся формы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/3 w-1.5 h-36 bg-yellow-700 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-1.5 bg-yellow-700 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-52 bg-yellow-600 opacity-15 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/2 w-28 h-28 border-2 border-yellow-700 opacity-10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-700 tracking-wide select-none">
            Featured Articles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-yellow-300 font-light text-lg md:text-xl leading-relaxed">
            Dive into curated pieces that resonate with every beat of your musical journey.
          </p>
        </div>

        {/* Карточки статей */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-yellow-900/20 rounded-2xl p-6 animate-pulse shadow-lg"
                >
                  <ArticleCardSmallSkeleton />
                </div>
              ))
            : articles?.slice(0, 3).map(article => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group block bg-yellow-900/20 rounded-2xl p-6 shadow-lg transition-transform hover:scale-[1.03] hover:shadow-yellow-600/50"
                >
                  <ArticleCardSmall article={article} />
                  <div className="mt-4 text-yellow-400 font-semibold group-hover:underline">
                    Read More →
                  </div>
                </a>
              ))}
        </div>

        {/* Кнопка перехода к блогу */}
        <div className="mt-20 text-center">
          <a
            href="/blog"
            className="inline-block px-12 py-4 bg-yellow-700 text-gray-900 font-bold rounded-full shadow-xl hover:bg-yellow-600 transition-colors duration-300"
          >
            Explore All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
