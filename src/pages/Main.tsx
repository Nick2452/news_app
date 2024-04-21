import { LatestNews } from '../components/latest-news/LatestNews'
import { NewsByFilters } from '../components/new-by-filters/NewsByFilters'

import styles from './styles.module.css'
export function Main() {
	return (
		<main className={styles.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	)
}
