import axios from 'axios'
import {
	CategoriesApiResponse,
	NewsApiResponse,
	ParamsType,
} from '../interfaces'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async (
	params?: ParamsType
): Promise<NewsApiResponse> => {
	const { page_number = 1, page_size = 10, category, keywords } = params || {}

	const response = await axios.get(`${BASE_URL}search`, {
		params: {
			apiKey: API_KEY,
			page_number,
			page_size,
			category,
			keywords,
		},
	})
	return response.data
}

export const getLatestNews = async (): Promise<NewsApiResponse> => {
	const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
		params: {
			apiKey: API_KEY,
		},
	})
	return response.data
}

export const getCategories = async (
	page_number = 1,
	page_size = 10
): Promise<CategoriesApiResponse> => {
	const response = await axios.get<CategoriesApiResponse>(
		`${BASE_URL}available/categories`,
		{
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
			},
		}
	)
	return response.data
}
