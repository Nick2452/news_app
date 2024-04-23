import { PAGE_SIZE, TOTAL_PAGE } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../store'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import { NewsFilters } from '../news-filters/NewsFilters'
import NewsList from '../news-list/NewsList'
import { WrapperPagination } from '../wrapper-pagination/WrapperPagination'

export function NewsByFilters() {
	const dispatch = useAppDispatch()
	const filter = useAppSelector((state) => state.news.filters)

	const debounceKeywords = useDebounce(filter.keywords, 1500)

	const { data, isLoading } = useGetNewsQuery({
		...filter,
		keywords: debounceKeywords,
	})

	const handleNextPage = () => {
		if (filter.page_number < TOTAL_PAGE) {
			dispatch(
				setFilters({ key: 'page_number', value: filter.page_number + 1 })
			)
		}
	}

	const handlePrevPage = () => {
		if (filter.page_number > 1) {
			dispatch(
				setFilters({ key: 'page_number', value: filter.page_number - 1 })
			)
		}
	}

	const currentPageClick = (page_number: number) => {
		dispatch(setFilters({ key: 'page_number', value: page_number }))
	}
	return (
		<section className='flex flex-col gap-7 w-full overflow-auto'>
			<NewsFilters filter={filter} />
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
