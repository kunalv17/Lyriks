import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components'
import { useGetSearchQuery } from '../redux/services/shazamCore'

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSearchQuery(searchTerm);
  
  if (isFetching) return <Loader title={"Searching"} />
  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>
        Showing results for: <span className='font-black'>{searchTerm}</span> 
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.tracks?.hits?.map((song, i) => (
          <SongCard
            key={song?.track?.key}
            song={song?.track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data?.tracks?.hits}
            i={i}
          />
        ))}
      </div>
    </div>
  )
};

export default Search;
