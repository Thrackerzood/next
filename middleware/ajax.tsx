export default async function ajax(url:string,data:string){
   const response:Promise<Response> = fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
   })
   return await response.then(response => response.json())
}