export const formatDate = (rawDate: string) => {
	const date = new Date(rawDate)
	const formattedDate = date.toLocaleDateString('en-US')

	if (formattedDate.startsWith('Invalid')) return ''

	const minutes = date.getMinutes()
	const hour = date.getHours()
	const time = `${hour}:${minutes}`

	return `${formattedDate} ${time}`
}
