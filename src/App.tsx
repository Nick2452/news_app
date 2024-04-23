import { Header } from './components/header/Header'
import { useTheme } from './helpers/context/themeContext'
import { Main } from './pages/Main'

export function App() {
	const { isDark } = useTheme()

	return (
		<>
			<Header />
			<div
				className={`${
					isDark ? 'bg-slate-900 text-slate-50' : 'bg-white'
				} min-w-7xl p-6`}
			>
				<Main />
			</div>
		</>
	)
}
