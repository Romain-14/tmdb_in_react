import React from 'react'
import { BASE_URL_IMG } from '../utils/const';
import Detail from './Detail';

function Card({movie, detail, companies}) {
	console.log(movie)
	return (
		<article>
			<img src={BASE_URL_IMG + movie.poster_path} alt={"affiche de " + movie.original_title } />
			<h3>{movie.original_title}</h3>
			<p>{movie.overview}</p>   

			{detail && <Detail companies={companies}/>}

		</article>

		

	)
}

export default Card;