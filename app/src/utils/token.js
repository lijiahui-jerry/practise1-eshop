//持久化保存token

export const setToken=(token)=>{
  localStorage.setItem('TOKEN',token)
}

export const getToken=()=>{
//......//************[return不能省略，否则会导致刷新时无法正常获取token]************
  return localStorage.getItem('TOKEN')
//``````//
}

export const clearToken=()=>{
  localStorage.removeItem('TOKEN')
}