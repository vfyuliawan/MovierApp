import {
  ConvertNowPlayingMovieModel,
  NowPlayingMovieModel,
} from '../model/Home/HomeGetNowPlaying';
import {GetNowPlayingInterface} from '../repository/HomeScreen/HomeInterface';
import HomeRepository from '../repository/HomeScreen/HomeRepository';

class HomeServices {
  public getNowPlayList = async (
    props: GetNowPlayingInterface,
  ): Promise<NowPlayingMovieModel | null> => {
    const resp = await HomeRepository.GetNowPlaying({
      language: props.language,
      page: props.page,
    });

    if (resp !== null) {
      return resp;
    }
    return null;
  };
}

export default new HomeServices();
