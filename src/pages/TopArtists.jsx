import { Error, Loader, ArtistCard } from '../components'
import { useGetTracksQuery } from '../redux/services/shazamCore'

const TopArtists = () => {
  const { data, isFetching, error } = useGetTracksQuery();

  if (isFetching) return <Loader title={"Loading Top Charts"} />
  if (error) return <Error />
  
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>
        Top Artists 
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.tracks?.map((track) => (
          <ArtistCard
            key={track.key}
            track={track}
          />
        ))}
      </div>
    </div>
  )
};

export default TopArtists;


//setCountry(res?.data?.location?.country)
