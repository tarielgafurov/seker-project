export const registerUserAPI = async (username, password, token) => {
	try {
		const response = await fetch('http://13.126.42.105/api/v1/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ username, password }),
		})

		if (!response.ok) {
			const errorData = await response.json()
			throw new Error(errorData.message || 'Something went wrong')
		}

		return response.json()
	} catch (error) {
		throw new Error('Network error or server unreachable')
	}
}
