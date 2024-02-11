// import { store } from "../store";
// export const token = store.getState().user.token
const URL = `http://13.126.42.105/api/v1/`

export const fetchApi = async ({url, method, body, next})=>{
    console.log(method);
    let bodyData = {
        method: method || "GET",
        headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${token}`
        },
        // body: body
    }
    if(body){
        bodyData.body = JSON.stringify(body)
    }
    console.log(bodyData);
    console.log(URL+url);

    // console.log(body);
    const userData = await fetch(next || `${URL}${url}`, bodyData)
    // const data = await userData.json()
    if(!userData.ok){
        return
    }
    return userData
}