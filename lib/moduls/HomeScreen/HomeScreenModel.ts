import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  NowPlayingMovieModel,
  NowPlayingMovieModelResult,
} from '../../domain/model/Home/HomeGetNowPlaying';
import HomeService from '../../domain/services/HomeService';

export const HomeScreenModel = () => {
  const [page, setPage] = useState(1);
  const [nowPlaying, setnowPlaying] = useState<NowPlayingMovieModel>();
  const [loading, setLoading] = useState(true);

  //Repository
  const getNowPlayingMovie = async (page: number) => {
    setLoading(true);
    const resp = await HomeService.getNowPlayList({
      language: 'en-US',
      page: page,
    });
    if (resp !== null) {
      setnowPlaying(resp);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNowPlayingMovie(1);
    return () => {};
  }, []);

  return {
    nowPlaying,
    page,
    setPage,
    loading,
    setLoading,
    setnowPlaying,
    getNowPlayingMovie,
  };
};
