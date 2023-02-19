import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cors from 'cors'
import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'
import { useGetCountrySongsQuery, useGetCountryListQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
  const [country, setCountry] = useState("IN");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetCountrySongsQuery(country);


  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=at_lXw0Ibjk6HaMt6US3eowYmBeOyn5X`)
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, [country]);

  const countryData = data?.countries.find((curretCountry) => {
    return curretCountry.id === "IN";
  });
  const listId = countryData?.listid;
  const { data: songList, isFetching: isFetchingSongList, err } = useGetCountryListQuery(listId);

  if (isFetching && loading || isFetchingSongList) return <Loader title={"Loading Songs around you"} />

  if (error || err) return <Error />
  const allSongs = songList?.tracks
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>Around You : 
      <span className='font-black'> "{country}"</span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {allSongs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songList}
            i={i}
          />
        ))}


      </div>
    </div>
  )
};

export default AroundYou;


//setCountry(res?.data?.location?.country)
