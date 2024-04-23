import { useGetLatestNewsQuery } from '../../store/services/newsApi'
import BannerList from '../banner-list/BannerList'

export function LatestNews() {
	const { data, isLoading } = useGetLatestNewsQuery(null)

	return (
		<section className='flex flex-col gap-3 w-full'>
			<BannerList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
