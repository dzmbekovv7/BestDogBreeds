import {
  ArticleComments,
  ArticleContent,
  ArticleFeatured,
  ArticleHeader,
  ArticleLatest,
  ArticleNavigation,
  ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'
import { Dog } from 'lucide-react'
export function ArticlePage() {
  const { slug } = useParams()

  const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(slug || '')
  const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

  if (isArticleLoading || isArticlesLoading) {
	return (
	  <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
		{/* Background decorative elements */}
		<div className="absolute inset-0">
		  <div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
		  <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
		  <div className="absolute top-1/2 right-20 w-4 h-4 border-2 border-pink-300 rounded-full animate-bounce"></div>
		</div>



<Container>
  <div className="relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white px-4">
    <div className="text-center space-y-6 max-w-md w-full">
      <div className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-green-200 p-12">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-green-300 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-lime-300 rounded-full filter blur-2xl opacity-20"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Dog Icon */}
          <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-white rounded-full flex items-center justify-center mb-8 animate-bounce shadow-md text-white text-4xl">
            <Dog />
          </div>

          {/* Main Text */}
          <h2 className="text-3xl font-extrabold text-green-900 mb-3">All About Dogs</h2>
          <p className="text-green-800 text-base leading-relaxed">
            Discover heartwarming stories, expert training tips, and fun dog facts. Whether you're a proud dog owner or simply a fan of furry friends, this space is for you. 
            <br />
            <span className="inline-block mt-2 bg-lime-100 px-2 py-1 rounded text-green-700 font-medium">
              Because every dog deserves love and a voice.
            </span>
          </p>

          {/* Optional loading animation or button */}
          {/* <Loading /> */}
        </div>
      </div>
    </div>
  </div>
</Container>


	  </div>
	)
  }

  if (!article) return null

  return (
	<div className="relative min-h-screen bg-white overflow-hidden">
	  {/* Background patterns and decorative elements */}
	  <div className="absolute inset-0 pointer-events-none">
		<div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
		<div className="absolute top-32 left-1/6 w-3 h-3 bg-indigo-300 rotate-45 animate-pulse"></div>
		<div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
		<div className="absolute top-2/3 left-12 w-4 h-4 border border-pink-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
		<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-30"></div>
		<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full opacity-20"></div>
	  </div>

	  <Container>
		<div className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto">


		  {/* Article Header */}
		  <div className="relative mb-16">
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-[3rem] shadow-xl transform rotate-1"></div>
			<div className="relative bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12">
			  <ArticleHeader article={article} />
			</div>
		  </div>

		  {/* Article Navigation and Content */}
		  <div className="lg:flex lg:space-x-12">
			<div className="lg:flex-1 space-y-12">
			  {/* Navigation */}
			  <div className="relative mb-12">
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl"></div>
				<div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
				  <ArticleNavigation currentArticle={article} articles={articles} />
				</div>
			  </div>

			  {/* Article Content */}
			  <div className="relative">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white rounded-[2rem] shadow-xl transform -rotate-1"></div>
				<div className="relative bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-12">
				  <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60"></div>
				  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-40"></div>

				  <div className="relative z-10">
					<ArticleContent article={article} />
				  </div>
				</div>
			  </div>

			  {/* Comments */}
			  <div className="group relative mt-16">
				<div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-indigo-200 to-purple-200"></div>
				<div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 group-hover:shadow-2xl transition-shadow duration-300">
				  <div className="flex items-center mb-6">
					<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
					<span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Discussion</span>
				  </div>
				  <ArticleComments article={article} />
				</div>
			  </div>
			</div>

		  </div>
 {/* TOP: Featured, Most Popular, Latest stacked horizontally on lg, vertically on small */}
		  <section className="mb-16 grid grid-cols-1 mt-[10px] md:grid-cols-3 gap-8">
			<div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
			  <h2 className="flex items-center mb-6 text-sm font-bold text-gray-600 uppercase tracking-wide">
				<span className="w-2 h-2 mr-3 rounded-full bg-yellow-400 animate-pulse"></span>⭐ Featured
			  </h2>
			  <ArticleFeatured articles={articles} />
			</div>

			<div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
			  <h2 className="flex items-center mb-6 text-sm font-bold text-gray-600 uppercase tracking-wide">
				<span className="w-2 h-2 mr-3 rounded-full bg-pink-500 animate-pulse"></span>Most Popular
			  </h2>
			  <ArticlePopular articles={articles} />
			</div>

			<div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow duration-300">
			  <h2 className="flex items-center mb-6 text-sm font-bold text-gray-600 uppercase tracking-wide">
				<span className="w-2 h-2 mr-3 rounded-full bg-purple-500 animate-pulse"></span>Latest Insights
			  </h2>
			  <ArticleLatest articles={articles} />
			</div>
		  </section>
		  {/* Bottom decorative dots and tagline */}
		  <div className="mt-20 text-center">
			<div className="inline-flex items-center space-x-4 text-gray-400">
			  <div className="flex space-x-1">
				{[...Array(3)].map((_, i) => (
				  <div
					key={i}
					className={`w-2 h-2 rounded-full animate-pulse ${
					  i === 0 ? 'bg-indigo-300' : i === 1 ? 'bg-purple-300' : 'bg-pink-300'
					}`}
					style={{ animationDelay: `${i * 300}ms` }}
				  />
				))}
			  </div>
			  {/* <span className="text-sm font-medium">A Grammar Nerd's Life</span> */}
			  <div className="flex space-x-1">
				{[...Array(3)].map((_, i) => (
				  <div
					key={i}
					className={`w-2 h-2 rounded-full animate-pulse ${
					  i === 0 ? 'bg-pink-300' : i === 1 ? 'bg-purple-300' : 'bg-indigo-300'
					}`}
					style={{ animationDelay: `${i * 300 + 1000}ms` }}
				  />
				))}
			  </div>
			</div>
		  </div>

		</div>
	  </Container>
	</div>
  )
}
