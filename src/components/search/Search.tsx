import { useTheme } from '../../helpers/context/themeContext'

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}

export function Search({ keywords, setKeywords }: Props) {
	const { isDark } = useTheme()
	return (
		<div className={`${isDark ? 'bg-slate-900' : 'bg-white'} flex w-full`}>
			<input
				className='px-2 py-4 border border-slate-400 w-full rounded-lg md:px-1 md:py-2'
				type='text'
				placeholder='Search...'
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
			/>
		</div>
	)
}
