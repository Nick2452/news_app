import { useTheme } from '../../helpers/context/themeContext'
import { IFilters } from '../../interfaces'
import { useAppDispatch } from '../../store'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import { Slider } from '../slider/Slider'

interface Props {
	filter: IFilters
}

export function NewsFilters({ filter }: Props) {
	const { isDark } = useTheme()

	const { data } = useGetCategoriesQuery(null)
	const dispatch = useAppDispatch()

	return (
		<div className='flex flex-col gap-4'>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						selectedCategories={filter.category}
						setSelectedCategories={(category) =>
							dispatch(setFilters({ key: 'category', value: category }))
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filter.keywords}
				setKeywords={(keywords) =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	)
}
