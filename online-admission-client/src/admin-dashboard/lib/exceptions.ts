export class AuthRequiredError extends Error {
    constructor(message = "Auth is required to access this page") {
        super(message);
        this.name = "AuthRequiredError";
    }
}


export class NetworkError extends Error {
  constructor(message = "There's a problem with your network") {
    super(message);
    this.name = "NetworkError";
  }
}