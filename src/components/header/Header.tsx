import { useTheme } from '../../helpers/context/themeContext'
import { formatDate } from '../../helpers/formatDate'
import { ThemeButton } from '../theme-button/ThemeButton'

export function Header() {
	const { isDark } = useTheme()
	return (
		<header
			className={`${
				isDark ? 'bg-slate-900 text-zinc-50' : 'bg-white border border-b-2'
			} mx-auto px-6 py-3 sm:px-6 lg:px-8 xl:px-10`}
		>
			<div className='flex justify-between items-center'>
				<h1 className='text-4xl mb-3 font-semibold'>Reactify News</h1>
				<div className='flex gap-3 p-2 transition'>
					<ThemeButton />
				</div>
			</div>
			<p className='text-xl mb-6'> {formatDate(new Date())}</p>
			{/* <div className='w-full h-[1px] bg-slate-300' /> */}
		</header>
	)
}
