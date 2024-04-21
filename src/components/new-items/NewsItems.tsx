import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'

interface Props {
	item: INews
}

export function NewsItems({ item }: Props) {
	return (
		<li className='flex w-full'>
			<div
				className='w-20 h-20 bg-zinc-300 bg-cover bg-center shrink-0 '
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className='flex flex-col pl-4'>
				<h3 className='text-[20px] font-bold pb-1 md:text-sm'>{item.title}</h3>
				<p className='text-zinc-500 text-sm'>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}
