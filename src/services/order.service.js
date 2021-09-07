import axios from "axios";
import { Order } from "../models/order";
let API_URL = 'http://localhost:8030/order/';

class OrderService{

    findAllOrders(){
        return axios.get(API_URL + 'all',
    {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }
  addOrder(order){
    return axios.post(API_URL + 'makeorder', JSON.stringify(order),
  {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }
}
export default new OrderService();