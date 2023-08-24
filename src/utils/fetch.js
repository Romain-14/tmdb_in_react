import {API_KEY} from "./const";

async function fetchDatas(base_URL, id = null, query = ""){
    let new_url = base_URL;
    // console.log(new_url)
    if(!id && !query){
        new_url = `${new_url}api_key=${API_KEY}`;
    } else if (!id){
        new_url = `${new_url}${query}api_key=${API_KEY}`;
    } else if (id){
        new_url = `${new_url}${id}?api_key=${API_KEY}`;
    }
    // console.log(new_url)
    
    // if(id && query) url = base_URL + id + query;
    // if ( id ) url = base_URL + id;
    // if( query ) url = base_URL + query;

     // version "normal"
     const data = await fetch(new_url);
     const dataParsed = await data.json();
 
     return dataParsed;
    // version raccourci
    // return await ( (await fetch(`${url}?api_key=${API_KEY}`)).json() );
   
}

export { fetchDatas };