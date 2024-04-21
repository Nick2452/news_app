export interface INews {
	author: string
	description: string
	image: string
	id: string
	category: CategoriesType[]
	title: string
	url: string
	language: string
	published: string
}

export interface IPaginationProps {
	totalPages: number
	currentPage: number
	handleNextPage: () => void
	handlePrevPage: () => void
	currentPageClick: (page: number) => void
}

export interface NewsApiResponse {
	news: INews[]
	page: number
	status: string
}
export interface CategoriesApiResponse {
	categories: string[]
	page: number
	status: string
}

export interface IFilters {
	page_number: number
	page_size: number
	category: string | null
	keywords: string
}
export type ParamsType = Partial<IFilters>
export type CategoriesType = string
export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'
