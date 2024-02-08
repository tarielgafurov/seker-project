export const fetchData = async ({ endpoint, method, body = null, token }) => {
	const url = `http://13.126.42.105/api/v1/${endpoint}`
	const options = {
		method: method || 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}

	// Добавляем токен в заголовок, если он есть
	if (token) {
		options.headers.Authorization = `Bearer ${token}`
	}

	// Если есть тело запроса, добавляем его к опциям
	if (body) {
		options.body = JSON.stringify(body)
	}

	try {
		const response = await fetch(url, options)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		return await response.json()
	} catch (error) {
		throw new Error(`Error fetching data: ${error.message}`)
	}
}
