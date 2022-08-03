import axios from 'axios'
const BaseUrl = 'https://demoapi.fundvinesecurities.com/api/v1/client'

export async function login(loginDto) {
    const requestOptions = {
    //   method: "POST",
      headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(loginDto),
    };
  
    const response = await axios.post(`${BaseUrl}/auth/login`, loginDto, requestOptions);
    return response;
  }
  
export async function register(userDto) {
    const requestOptions = {
      method: "POST",
      accept: "*/*",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDto),
    };
  
    const response = await fetch(`${BaseUrl}/auth/register`, requestOptions);
    return response;
}

export function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem( "auth" );
}