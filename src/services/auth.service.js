import axios from 'axios';

const API_URL="http://127.0.0.1:3000/"

class AuthService {
  async login(user) {
    let res = await axios.post(API_URL + 'login', {
      username: user.username,
      password: user.password
    })

    if (res.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(res.data));
    }

    return res.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  async register(user) {
    return await axios.post(API_URL + 'accounts', {
      username: user.username,
      email: user.email,
      password: user.password//HERE add other fields
    });
  }
}

export default new AuthService();
