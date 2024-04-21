import { MoonStar, SunIcon } from 'lucide-react'
import { useTheme } from '../../helpers/context/themeContext'

export function ThemeButton() {
	const { isDark, toggleTheme } = useTheme()

	return (
		<>
			<button onClick={toggleTheme}>
				{isDark ? (
					<SunIcon size={35} color='white' strokeWidth={1} />
				) : (
					<MoonStar size={35} strokeWidth={1} />
				)}
			</button>
		</>
	)
}
