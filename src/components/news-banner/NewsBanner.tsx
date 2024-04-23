import { useState } from 'react'
import { useTheme } from '../../helpers/context/themeContext'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'
import { Image } from '../image/Image'

interface Props {
	item: INews
}

const NewsBanner = ({ item }: Props) => {
	const { isDark } = useTheme()
	const [isPopUpOpen, setIsPopUpOpen] = useState(false)

	const togglePopUp = () => {
		setIsPopUpOpen(!isPopUpOpen)
	}

	return (
		<div
			className={`${
				isDark ? 'text-white' : 'text-zinc-950'
			} cursor-pointer hover:shadow-lg transition-all`}
		>
			<div onClick={togglePopUp}>
				<Image image={item.image} />
			</div>
			<h3 className='font-medium text-sm mt-3 mb-2 md:text-sm md:font-normal sm:text-xs sm:text-normal'>
				{item.title}
			</h3>
			<p className='text-zinc-400 text-lg md:text-sm md:font-normal sm:text-xs sm:text-normal'>
				{formatTimeAgo(item.published)} by {item.author}
			</p>

			{isPopUpOpen && (
				<div className='fixed top-0 left-0 w-full h-full p-2 bg-black bg-opacity-50 flex justify-center items-center z-50'>
					<div className='bg-white p-4 rounded-lg max-w-2xl'>
						<Image image={item.image} />
						<h3 className='font-medium text-xl mb-2'>{item.title}</h3>
						<p className='text-gray-700 text-lg font-medium mt-5'>
							{item.description}
						</p>
						<p className='my-3 text-lg text-blue-500'>
							{formatTimeAgo(item.published)} by {item.author}
						</p>
						<button
							className='mt-4 px-4 py-2 text-lg w-40 bg-blue-500 text-white rounded-md hover:bg-red-600 transition focus:bg-red-600'
							onClick={togglePopUp}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default NewsBanner
