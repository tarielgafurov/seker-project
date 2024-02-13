
const URL = `http://13.126.42.105/api/v1/`
const token = localStorage.getItem("token")
console.log(token);

export const fetchApi = async ({url, method, body, next})=>{
    console.log(method);
    let bodyData = {
        method: method || "GET",
        headers: {
            "Content-type": "application/json",
        }
    }
    if(body){
        bodyData.body = JSON.stringify(body)
    }
    if(token){
        bodyData.headers.Authorization = `Bearer ${token}`
    }
    const userData = await fetch(next || `${URL}${url}`, bodyData)
    if(!userData.ok){
        return
    }
    return userData
}