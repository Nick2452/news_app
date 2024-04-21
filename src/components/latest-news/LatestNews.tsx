import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { NewsApiResponse } from '../../interfaces'
import BannerList from '../banner-list/BannerList'

export function LatestNews() {
	const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)
	return (
		<section className='flex flex-col gap-3 w-full'>
			<BannerList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
