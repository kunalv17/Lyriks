import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {

  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)
  const { data, isFetching: isFetchingRelatedData, error: relatedError } = useGetArtistTopSongsQuery(artistId);

  if (isFetchingArtistDetails || isFetchingRelatedData ) return <Loader title="Loading Artist details" />
  if (error || relatedError) return <Error />;

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={data?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
}

export default ArtistDetails;
