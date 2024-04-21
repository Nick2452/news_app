import { SkeletonCard } from '../../components/skeleton/SkeletonCard'
import { DirectionType, SkeletonType } from '../../interfaces'

interface Props {
	isLoading: boolean
}

function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,
	type?: SkeletonType,
	count?: number,
	direction?: DirectionType
) {
	return function WithSkeleton(props: Props & P) {
		const { isLoading, ...restProps } = props
		if (isLoading) {
			return <SkeletonCard type={type} count={count} direction={direction} />
		}
		return <Component {...(restProps as P)} />
	}
}
export default withSkeleton
