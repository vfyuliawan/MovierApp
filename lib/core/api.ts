import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';

export type ErrorMessageType = (msg?: AxiosError) => string;

interface FetchInterface {
  path: string;
  isError?: boolean;
  reqBody: {};
  errorMessage?: ErrorMessageType;
}

const timeOut = 60000;

export const baseUrlImage = () => {
  return `https://image.tmdb.org/t/p`;
};

export const baseUrl = (): string => {
  return 'https://api.themoviedb.org/3/movie';
};

export const header = async () => {
  const token =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRhYjc1MzI5NjlmNzMyMDgyMzU5MDIzZGFlNWIxZSIsInN1YiI6IjY0YjFkNzk4MTY4NGY3MDBjN2MwYWIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-JfOLYtOhQqCWTjNGIrOW1jRjWHmyRE1WekRvknLLdk';
  return {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRhYjc1MzI5NjlmNzMyMDgyMzU5MDIzZGFlNWIxZSIsInN1YiI6IjY0YjFkNzk4MTY4NGY3MDBjN2MwYWIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-JfOLYtOhQqCWTjNGIrOW1jRjWHmyRE1WekRvknLLdk',
  };
};

const timeout = () => {
  Alert.alert('Error', 'Server Timeout');
};

async function RequestData(
  config: AxiosRequestConfig,
  isError: boolean,
  errorMessage?: ErrorMessageType,
): Promise<any> {
  try {
    const resp = await axios(config);
    if (resp.status === 200) {
      console.log('======result====================================');
      console.log(JSON.stringify(resp.data));
      console.log('======result====================================');
      return JSON.stringify(resp.data);
    } else if (
      resp.status === 404 ||
      resp.status === 413 ||
      resp.status === 422 ||
      resp.status === 409
    ) {
      console.log({message: resp.data.message ?? ''});
    } else if (resp.status === 500) {
      console.log({message: resp.data.message ?? ''});
    } else if (resp.status === 503) {
      console.log('Server No Response');
    } else if (resp.status === 504) {
      timeout();
    }
    return null;
  } catch (e) {
    console.log('====================================');
    console.log('ini adalah error', e);
    console.log('====================================');
    const error: AxiosError = e as AxiosError;
    if (error.response?.status === 303) {
      console.log({message: error});
    } else if (error.response?.status === 400) {
      console.log({
        message: error,
        errorMessage: errorMessage ? errorMessage(error) : undefined,
      }); //error.response.data.message ?? '');
    } else if (error.message === 'Network Error') {
      console.log('Network Error');
    } else if (error.response?.status === 401) {
      console.log('Refresh Token or Infalid Key');
    } else if (error.response?.status === 403) {
      console.log('Token Expired');
    } else if (
      error.response?.status === 404 ||
      error.response?.status === 413 ||
      error.response?.status === 422 ||
      error.response?.status === 409
    ) {
      console.log({message: error});
    } else if (error.response?.status === 500) {
      console.log({message: error});
    } else if (error.response?.status === 503) {
      console.log('Server No Response');
    } else if (error.response?.status === 504) {
      timeout();
    }
    return null;
  } finally {
    console.debug('::FINISH::');
    console.debug('-------------------------------------------------------');
    console.debug('');
  }
}

export async function post(props: FetchInterface) {
  return RequestData(
    {
      method: 'POST',
      url: baseUrl() + props.path,
      headers: await header(),
      data: props.reqBody,
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
    },
    props.isError ?? false,
    props.errorMessage,
  );
}

interface FetchInterfaceGet {
  path: string;
  params?: object;
  isError?: boolean;
}

export async function getImage(props: FetchInterfaceGet) {
  return RequestData(
    {
      method: 'GET',
      url: props.path,
      headers: await header(),
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
      params: props.params,
    },
    props.isError ?? false,
  );
}

export async function get(props: FetchInterfaceGet) {
  return RequestData(
    {
      method: 'GET',
      url: baseUrl() + props.path,
      headers: await header(),
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
      params: props.params,
    },
    props.isError ?? false,
  );
}

export async function put(props: FetchInterface) {
  return RequestData(
    {
      method: 'PUT',
      url: baseUrl() + props.path,
      headers: await header(),
      data: props.reqBody,
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
    },
    props.isError ?? false,
  );
}

export async function patch(props: FetchInterface) {
  return RequestData(
    {
      method: 'PATCH',
      url: baseUrl() + props.path,
      headers: await header(),
      data: props.reqBody,
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
    },
    props.isError ?? false,
  );
}

export async function deleted(props: FetchInterface) {
  return RequestData(
    {
      method: 'DELETE',
      url: baseUrl() + props.path,
      headers: await header(),
      data: props.reqBody,
      timeout: timeOut,
      timeoutErrorMessage: 'Request Timeout',
    },
    props.isError ?? false,
  );
}

function appVersion() {
  throw new Error('Function not implemented.');
}
