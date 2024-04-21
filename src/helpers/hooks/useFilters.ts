import { useState } from 'react'
import { IFilters } from '../../interfaces'

export const useFilters = (initialFilters: IFilters) => {
	const [filter, setFilter] = useState<IFilters>(initialFilters)
	const changeFilters = (key: string, value: string | number | null) => {
		setFilter((prev) => {
			return {
				...prev,
				[key]: value,
			}
		})
	}
	return {
		filter,
		changeFilters,
	}
}