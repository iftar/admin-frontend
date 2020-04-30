import axios from 'axios';
import StorageService from './StorageService';
import {BASE_URL} from '../utils/constants';

class AuthService {
  constructor() {
    this.storageService = new StorageService();
  }

  async isAuthenticated() {
    let token = this.storageService.get("USER_TOKEN");
    if (!token) return false;

    let result = await this.getUser();
    if (result &&
        result.data.status === "success" && 
        result.data.data.user.type === "admin") return true;

    return false;
  }

  async setUserToken($token) {
    return this.storageService.set("USER_TOKEN", $token);
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
