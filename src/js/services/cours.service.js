'use strict';

export default class coursService {

  constructor() {

  }

  get DataFromApi() {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://swiv.outofpluto.com:8082/api/lecture/notification/?format=json', false);
    req.send();
    return JSON.parse(req.response);
  }
}
