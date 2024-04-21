import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'
import { NewsItems } from '../new-items/NewsItems'

interface Props {
	news: INews[] | undefined
}

const NewsList = ({ news }: Props) => {
	return (
		<div>
			<ul className='flex flex-col gap-6'>
				{news?.map((item) => {
					return <NewsItems key={item.id} item={item} />
				})}
			</ul>
		</div>
	)
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
export default NewsListWithSkeleton
