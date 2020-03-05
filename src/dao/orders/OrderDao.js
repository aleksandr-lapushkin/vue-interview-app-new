import { Orders } from "../../model";

export default class OrderDao {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  fetchAll = () => {
    console.info("Fetching All Orders");
    return this.axios.get('/api/orders')
      .then(response => {
        return response.data.map(o => Orders.Order.fromJson(o));
      });
  };

  //title, status
  saveOrder = () => {
    //TODO: implement and test
    console.info("Saving order");
  }
}
