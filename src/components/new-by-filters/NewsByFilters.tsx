import { getNews } from '../../api/apiNews'
import { PAGE_SIZE, TOTAL_PAGE } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import { NewsApiResponse, ParamsType } from '../../interfaces'
import { NewsFilters } from '../news-filters/NewsFilters'
import NewsList from '../news-list/NewsList'
import { WrapperPagination } from '../wrapper-pagination/WrapperPagination'

export function NewsByFilters() {
	const { filter, changeFilters } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})
	const debounceKeywords = useDebounce(filter.keywords, 1500)
	const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
		...filter,
		keywords: debounceKeywords,
	})

	const handleNextPage = () => {
		if (filter.page_number < TOTAL_PAGE) {
			changeFilters('page_number', filter.page_number + 1)
		}
	}
	const handlePrevPage = () => {
		if (filter.page_number > 1) {
			changeFilters('page_number', filter.page_number - 1)
		}
	}

	const currentPageClick = (page_number: number) => {
		changeFilters('page_number', page_number)
	}
	return (
		<section className='flex flex-col gap-7 w-full overflow-auto'>
			<NewsFilters filter={filter} changeFilters={changeFilters} />
			<WrapperPagination
				top
				bottom
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPageClick={currentPageClick}
				totalPages={PAGE_SIZE}
				currentPage={filter.page_number}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</WrapperPagination>
		</section>
	)
}
