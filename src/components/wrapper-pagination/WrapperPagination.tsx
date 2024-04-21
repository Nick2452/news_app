import { IPaginationProps } from '../../interfaces'
import { Pagination } from '../pagination/Pagination'

interface Props {
	top?: boolean
	bottom?: boolean
	children: React.ReactNode
}

export function WrapperPagination({
	top,
	bottom,
	children,
	...paginationProps
}: Props & IPaginationProps) {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}
