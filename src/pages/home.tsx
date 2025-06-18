import {
	Hero,
	AboutSection,
	CategoriesSection,
	FeaturedArticlesSection,
} from '@/components/home'
 export function HomePage() {
	return (
		<>
			<Hero />
			<AboutSection />
			<FeaturedArticlesSection />
			<CategoriesSection />
		</>
	)
}
