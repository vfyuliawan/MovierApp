import {get} from '../../../core/api';
import {
  ConvertNowPlayingMovieModel,
  NowPlayingMovieModel,
} from '../../model/Home/HomeGetNowPlaying';
import {GetNowPlayingInterface} from './HomeInterface';

class HomeRepository {
  public GetNowPlaying = async (
    props: GetNowPlayingInterface,
  ): Promise<NowPlayingMovieModel | null> => {
    const resp = await get({
      path: `/now_playing?language=${props.language}&page=${props.page}`,
    });

    if (resp !== null) {
      return ConvertNowPlayingMovieModel.toNowPlayingMovieModel(resp);
    }
    return null;
  };
}

export default new HomeRepository();
