import axios from 'axios';
import StorageService from './StorageService';

const BASE_URL = 'https://share-iftar-staging.herokuapp.com/api';

class AuthService {
  constructor() {
    this.storageService = new StorageService();
  }

  async isAuthenticated() {
    let token = this.storageService.get("USER_TOKEN");
    if (!token) return false;

    let result = await this.getUser();
    if (result.data.status === "success") return true;

    return false;
  }

  async getUser() {
    let token = this.storageService.get("USER_TOKEN");
    try {
      return await axios.get(`${BASE_URL}/user`, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
    } catch (error) {
      return error.response;
    }
  }

  async login(data) {
    try {
      return await axios.post(`${BASE_URL}/login`, data);
    } catch (error) {
      return error.response;
    }
  }
}

export default AuthService;