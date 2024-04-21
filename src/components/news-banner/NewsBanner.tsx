import { useTheme } from '../../helpers/context/themeContext'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'
import { Image } from '../image/Image'

interface Props {
	item: INews
}

const NewsBanner = ({ item }: Props) => {
	const { isDark } = useTheme()
	return (
		<div className={`${isDark ? 'text-white' : 'text-zinc-950'}`}>
			<Image image={item.image} />
			<h3 className='font-medium text-sm mt-3 mb-2 md:text-sm md:font-normal sm:text-xs sm:text-normal'>
				{item.title}
			</h3>
			<p className='text-zinc-400 text-lg md:text-sm md:font-normal sm:text-xs sm:text-normal'>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	)
}

export default NewsBanner
