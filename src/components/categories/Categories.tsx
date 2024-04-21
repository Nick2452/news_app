import { ForwardedRef, forwardRef } from 'react'
import { CategoriesType } from '../../interfaces'

interface Props {
	categories: CategoriesType[]
	selectedCategories: CategoriesType | null
	setSelectedCategories: (category: CategoriesType | null) => void
}

export const Categories = forwardRef(
	(
		{ categories, setSelectedCategories, selectedCategories }: Props,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div
				ref={ref}
				className='no-scrollbar flex gap-2 w-full overflow-x-auto whitespace-nowrap'
			>
				<button
					onClick={() => setSelectedCategories(null)}
					className={`${
						!selectedCategories
							? 'text-indigo-600 bg-indigo-300 px-4 py-2 rounded-full'
							: 'rounded-full bg-slate-200 px-4 py-2 text-slate-950'
					}`}
				>
					All
				</button>
				{categories.map((category) => {
					return (
						<button
							onClick={() => setSelectedCategories(category)}
							className={`${
								selectedCategories === category
									? 'text-indigo-600 bg-indigo-300 px-4 py-2 rounded-full'
									: 'px-4 py-2 rounded-full bg-slate-200 text-slate-950'
							}`}
							key={category}
						>
							{category}
						</button>
					)
				})}
			</div>
		)
	}
)

Categories.displayName = 'Categories'
