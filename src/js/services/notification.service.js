'use strict';

export default class notificationService {

  constructor() {

  }

  get DataFromApi() {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://www.outofpluto.com/html/ecv/webdev2/repos.json', false);
    req.send();
    return JSON.parse(req.response);
  }
}
