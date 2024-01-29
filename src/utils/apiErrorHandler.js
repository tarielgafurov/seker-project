// utils/apiErrorHandler.js
export const handleApiError = error => {
	console.error(error)
	throw error
}
