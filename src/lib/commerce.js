import Commerce from "@chec/commerce.js";


export const commerce = new Commerce(process.env.REACT_APP_PUBLIC_KEY, true,{
    axiosConfig: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  })