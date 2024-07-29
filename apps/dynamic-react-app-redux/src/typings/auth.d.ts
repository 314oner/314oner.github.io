declare namespace Auth {
  interface AuthResponse {
    data: {
      token: string;
      user: Users.IUser;
    };
  }

  interface LoginResponse {
    data: {
      token: string;
    };
  }
}
