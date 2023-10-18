export const fetchIt = async <T = unknown>(
	...args: Parameters<typeof fetch>
): Promise<T> => {
	const res = await fetch(...args)
	const json = await res.json()

	if (res.ok) {
		return json as T
	}

	return Promise.reject({
		message: res.statusText,
		status: res.status,
		error: json,
	})
}
