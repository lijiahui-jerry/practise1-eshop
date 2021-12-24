//持久化保存token

export const setToken=
  (token)=>{localStorage.setItem('TOKEN',token)}


export const getToken=
  ()=>localStorage.getItem('TOKEN')


export const clearToken=
  ()=>{localStorage.removeItem('TOKEN')}
