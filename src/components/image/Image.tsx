interface Props {
	image: string
}
export function Image({ image }: Props) {
	return (
		<div className='w-full bg-slate-500 relative pt-[80%] h-auto'>
			{image ? (
				<img
					className='w-full h-full absolute top-0 left-0 object-cover'
					src={image}
					alt='Nema kartinok'
				/>
			) : (
				'Something went wrong'
			)}
		</div>
	)
}
