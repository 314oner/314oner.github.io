import api from '@/server/helper/axiosCreateWithoutCORS';
import { AxiosResponse } from 'axios';

export default class TodosService {
  static async getCategories(): Promise<AxiosResponse<any>> {
    return api.get<any>('https://fakestoreapi.com/products/categories');
  }
  static async getProducts(): Promise<AxiosResponse<any>> {
    return api.get<any>('https://fakestoreapi.com/products/category/jewelery');
  }
}
