import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {

  const { data, isFetching } = useFetch<Repository[]>('/users/dyhalmeida/repos', 'repositories')

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
        console.log(`repo/${repo.full_name}`)
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

