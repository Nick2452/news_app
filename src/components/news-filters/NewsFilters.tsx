import { getCategories } from '../../api/apiNews'
import { useTheme } from '../../helpers/context/themeContext'
import { useFetch } from '../../helpers/hooks/useFetch'
import { IFilters } from '../../interfaces'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import { Slider } from '../slider/Slider'

interface Props {
	filter: IFilters
	changeFilters: (key: string, value: string | number | null) => void
}

export function NewsFilters({ filter, changeFilters }: Props) {
	const { data: dataCategories } = useFetch(getCategories)
	const { isDark } = useTheme()

	return (
		<div className='flex flex-col gap-4'>
			{dataCategories ? (
				<Slider isDark={isDark}>
					<Categories
						categories={dataCategories.categories}
						selectedCategories={filter.category}
						setSelectedCategories={(category) =>
							changeFilters('category', category)
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filter.keywords}
				setKeywords={(keywords) => changeFilters('keywords', keywords)}
			/>
		</div>
	)
}
