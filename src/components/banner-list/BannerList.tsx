import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'
import NewsBanner from '../news-banner/NewsBanner'

interface Props {
	banners?: INews[] | null
}
const BannerList = ({ banners }: Props) => {
	return (
		<ul
			className='grid md:max-h-[1200px] md:overflow-y-auto md:grid-cols-1 scrollbar w-full gap-3'
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
			}}
		>
			{banners?.map((banner) => {
				return <NewsBanner key={banner.id} item={banner} />
			})}
		</ul>
	)
}
const BannerListWithSkeleton = withSkeleton(BannerList, 'banner', 6, 'column')

export default BannerListWithSkeleton
