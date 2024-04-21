export const formatTimeAgo = (dateString: string) => {
	const now = new Date()
	const data = new Date(dateString)

	const secontPast = (now.getTime() - data.getTime()) / 1000

	if (secontPast < 60) {
		return `${Math.floor(secontPast)}s ago`
	}
	if (secontPast < 3600) {
		return `${Math.floor(secontPast / 60)}m ago`
	}

	if (secontPast <= 86400) {
		return `${Math.floor(secontPast / 3600)}h ago`
	}
	if (secontPast > 86400) {
		const day = Math.floor(secontPast / 86400)
		return day === 1 ? `${day} day ago` : `${day} days ago`
	}
}
