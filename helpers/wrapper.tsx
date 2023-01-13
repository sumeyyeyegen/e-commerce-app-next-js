import axios from 'axios';

export const fetchWrapper = {
  get,
  post,
  put,
  delete: deleteReq
};

function get(url: string, token: string | undefined) {
  // const requestOptions: Object = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // , "Authorization": token 
  //   },
  //   url: `${url}`,
  //   credentials: 'include'
  // };
  return axios.get(url).then(res => res);
}

function post(url: string, token: string | undefined, body: object) {
  let header = token !== undefined ? {
    'Content-Type': 'application/json',
    // "Authorization": token
  } : { 'Content-Type': 'application/json' }

  const requestOptions: Object = {
    method: 'POST',
    headers: header,
    url: url,
    data: body
  };
  return axios(requestOptions).then(res => res);
}

function put(url: string, token: string | undefined, body: object) {
  let header = token !== undefined ? {
    'Content-Type': 'application/json',
    // "Authorization": token
  } : { 'Content-Type': 'application/json' }
  const requestOptions: Object = {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(body),
    url: url
  };
  return axios(requestOptions).then(res => res);
}

function deleteReq(url: string, token: string | undefined, body: object) {
  let header = token !== undefined ? {
    'Content-Type': 'application/json',
    // "Authorization": token
  } : { 'Content-Type': 'application/json' }
  let jsonData = JSON.stringify(body);

  const requestOptions: Object = {
    method: 'DELETE',
    headers: header,
    data: body,
    url: url
  };
  return axios(requestOptions).then(res => res);
}
