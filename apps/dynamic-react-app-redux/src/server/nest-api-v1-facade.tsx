// eslint-disable-next-line @typescript-eslint/no-unused-vars
class NestAPIv1 {
  private authToken: any;
  constructor(authToken: any) {
    this.authToken = authToken;
  }
  constructHeaders() {
    const headers = new Headers();
    headers.set('Bearer', this.authToken);
    return headers;
  }
  handleResponse(response: any) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusTest,
      });
    }
  }
  get(url: any, options: any) {
    return fetch(url, { headers: this.constructHeaders(), ...options }).then(
      this.handleResponse,
    );
  }
  post(url: any, options: any) {
    return fetch(url, {
      method: 'POST',
      headers: this.constructHeaders(),
      ...options,
    }).then(this.handleResponse);
  }
  put(url: any, options: any) {
    return fetch(url, {
      method: 'PUT',
      headers: this.constructHeaders(),
      ...options,
    }).then(this.handleResponse);
  }
  delete(url: any, options: any) {
    return fetch(url, {
      method: 'delete',
      headers: this.constructHeaders(),
      ...options,
    }).then(this.handleResponse);
  }
}
