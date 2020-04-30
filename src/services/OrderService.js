import axios from 'axios';
import StorageService from './StorageService';
import {BASE_URL} from '../utils/constants';

class OrderService {
  constructor() {
    this.storageService = new StorageService();
  }

  async getTodaysOrders() {
    let token = this.storageService.get("USER_TOKEN");
    try {
      return await axios.get(`${BASE_URL}/admin/orders/today`, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
    } catch (error) {
      return error.response;
    }
  }
}

export default OrderService;
