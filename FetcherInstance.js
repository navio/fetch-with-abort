export default class FetcherInstance {
  constructor(){
    let currentRequest = null;
  }
  request(...params){
    this.currentRequest && this.currentRequest.abort();
    this.currentRequest = new AbortController();
    let {signal} = this.currentRequest;
    let paramsFetch = {signal,...params};
    return fetch(...paramsFetch);
  }
}