import axios from "axios";
let API_URL = 'http://localhost:8030/products/';

class ProductService{

    findAllProducts(){
        return axios.get(API_URL + 'all',
    {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }
}
export default new ProductService();