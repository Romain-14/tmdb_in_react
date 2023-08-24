import {useEffect, useState} from 'react';

import { fetchDatas } from '../utils/fetch';
import spinner from "../assets/img/spinner.svg"
import Card from './Card';

function Search() {

	const [search, setSearch] = useState("");
	const [list, setList] = useState(null);
	const [movie, setMovie] = useState(null);
	const [companies, setCompanies] = useState([]);
	const [isFetching, setIsFetching ] = useState(true);  

	useEffect(() => {
	async function getDatas (){
		const {results} = await fetchDatas(`https://api.themoviedb.org/3/search/movie?`, null , `query=${search}&` );
		setList(results);
		setIsFetching(false);
	}
	getDatas();
	}, [search])

	async function handleClick(id){
		const movie = await fetchDatas(`https://api.themoviedb.org/3/movie/`, id);
		setMovie(movie);
		
		for await(const company of movie.production_companies) {
			let tmp = await fetchDatas(`https://api.themoviedb.org/3/company/`, company.id);
			
			setCompanies((previous) => ( [...previous, tmp]));
		}

	}  

  	return (
		<>
		<form>
			<input type="search" name="search" value={search} onChange={(e)=> setSearch(e.target.value)} />
		</form>

		<section>
			<h2>rechercher votre film à bingewatcher !!!</h2>
			{ isFetching 
			? 
			<img src={spinner} alt="" /> 
			: 
			(
			<ul>

			{ list.map(movie => (
				<li 
					key={movie.id} 
					onClick={()=> handleClick(movie.id)}
				>
					{movie.original_title}
				</li>
				))
			}

			</ul>
			)
			}

			{ movie && <Card movie={movie} companies={companies} detail={true}/> }

			</section>
		</>
	)
}

export default Search;