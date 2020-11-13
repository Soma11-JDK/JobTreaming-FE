import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    const data = this.axios.get(`${API_URL}all`);
    return data;
  }

  getUserBoard() {
    return this.axios.get(`${API_URL}user`, { headers: authHeader() });
  }

  getModeratorBoard() {
    return this.axios.get(`${API_URL}mod`, { headers: authHeader() });
  }

  getAdminBoard() {
    return this.axios.get(`${API_URL}admin`, { headers: authHeader() });
  }
}

export default new UserService();
