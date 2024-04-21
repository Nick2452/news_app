import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import { useTheme } from '../../helpers/context/themeContext'
import { IPaginationProps } from '../../interfaces'

export function Pagination({
	totalPages,
	currentPage,
	handleNextPage,
	handlePrevPage,
	currentPageClick,
}: IPaginationProps) {
	const { isDark } = useTheme()
	return (
		<div
			className={`${
				isDark ? 'text-indigo-900' : 'text-indigo-600'
			} flex justify-center gap-2 md:gap-3`}
		>
			<button
				onClick={handlePrevPage}
				className='hover:text-indigo-500 cursor-pointer'
				disabled={currentPage <= 1}
			>
				<ArrowBigLeftDash size={30} strokeWidth={1.5} />
			</button>
			{[...Array(totalPages)].map((_, index) => {
				return (
					<button
						className={`${
							isDark ? 'text-white' : 'text-slate-900 font-medium'
						} text-lg  font-mono`}
						disabled={index + 1 === currentPage}
						key={index}
						onClick={() => currentPageClick(index + 1)}
					>
						{index + 1}
					</button>
				)
			})}
			<button
				className='hover:text-indigo-500'
				disabled={currentPage >= totalPages}
				onClick={handleNextPage}
			>
				<ArrowBigRightDash size={30} strokeWidth={1.5} />
			</button>
		</div>
	)
}
