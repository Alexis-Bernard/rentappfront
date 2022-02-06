import axios from 'axios';
import authHeader from './auth-header';
import env from './env'

class AccountService {
  async getAll() {
    let res = await axios.get(env.API_URL + 'accounts', { headers: authHeader() });
    
    return res.data
  }

  async getOne(username) {
    let res = await axios.get(env.API_URL + 'accounts/' + username, { headers: authHeader() });

    return res.data
  }

  async update(user) {
    let res = await axios.put(env.API_URL + 'accounts/' + user.username, user, { headers: authHeader() });
    
    return res.data
  }
}

export default new AccountService();
