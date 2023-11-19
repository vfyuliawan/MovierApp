// To parse this data:
//
//   import { Convert, NowPlayingMovieModel } from "./file";
//
//   const nowPlayingMovieModel = Convert.toNowPlayingMovieModel(json);

export interface NowPlayingMovieModel {
  dates: Dates;
  page: number;
  results: NowPlayingMovieModelResult[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface NowPlayingMovieModelResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  Uk = 'uk',
}

// Converts JSON strings to/from your types
export class ConvertNowPlayingMovieModel {
  public static toNowPlayingMovieModel(json: string): NowPlayingMovieModel {
    return JSON.parse(json);
  }

  public static nowPlayingMovieModelToJson(
    value: NowPlayingMovieModel,
  ): string {
    return JSON.stringify(value);
  }
}
