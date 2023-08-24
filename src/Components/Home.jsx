import { useEffect, useState } from 'react';
import { fetchDatas } from '../utils/fetch';

import spinner from "../assets/img/spinner.svg"

import Card from './Card';

function Home() {
  const [trending, setTrending ] = useState(null);
  const [isFetching, setIsFetching ] = useState(true);  

  useEffect( () => {
    async function getDatas (){
		const {results} = await fetchDatas("https://api.themoviedb.org/3/trending/all/week?");

		setTrending(results);
		setIsFetching(false);
    }
    getDatas();

  }, []);
  
  return (
    <section>
		<h2>Tendance de la semaine</h2>
		{ isFetching 
			? 
			<img src={spinner} alt="" /> 
			: 
			trending.map(movie => <Card key={movie.id} movie={movie}/>)
		}
      
    </section>
  )
}

export default Home