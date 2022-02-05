import axios from 'axios';
import authHeader from './auth-header';

class UserService {
  async getAdminBoard() {
    return await axios.get(process.env.API_URL + 'accounts', { headers: authHeader() }); // HERE add other methods and add crud (admin => account)
  }
}

export default new UserService();
