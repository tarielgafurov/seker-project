// axios.js

import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://13.126.42.105/api/v1', // Замените на ваш baseURL
	// timeout: 5000, // Таймаут запроса (в миллисекундах)
	headers: {
		'Content-Type': 'application/json',
		// Дополнительные заголовки, если необходимо
		Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MTQ2NDgzLCJpYXQiOjE3MDY1NDE2ODMsImp0aSI6ImFhZTBhNjYxMGIyNzRjZjJiZDY0YTUzN2MwZGMxZDBkIiwidXNlcl9pZCI6NH0.1M9milSTd6M9odhh1SbHtHfe4I7EoSyg1BZgXRkFWHI'}`,
	},
})

export default instance
