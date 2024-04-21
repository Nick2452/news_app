import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useRef } from 'react'

interface Props {
	children: React.ReactElement
	step?: number
	isDark: boolean
}

export function Slider({ children, step = 200, isDark }: Props) {
	const sliderRef = useRef<HTMLElement | null>(null)

	const nextSlide = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft += step
	}
	const prevSlide = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft -= step
	}

	return (
		<div
			className={`${
				isDark ? 'bg-slate-900 text-orange-800' : 'bg-white text-orange-800'
			} flex items-center gap-2 rounded-sm`}
		>
			<button
				onClick={prevSlide}
				className='hover:text-orange-600 active:scale-105'
			>
				<ArrowBigLeft size={30} />
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button
				onClick={nextSlide}
				className='hover:text-orange-600 active:scale-105'
			>
				<ArrowBigRight size={30} />
			</button>
		</div>
	)
}
