import axios from 'axios';
import env from './env'

class AuthService {
  async login(user) {
    let res = await axios.post(env.API_URL + 'login', {
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
    let res = await axios.post(env.API_URL + 'accounts', {
      username: user.username,
      password: user.password,
      email: user.email,
      phone_number: user.phone_number,
      firstname: user.firstname,
      lastname: user.lastname,
      birthday: user.birthday,
      birthplace: user.birthplace
    });

    return res.data
  }
}

export default new AuthService();
