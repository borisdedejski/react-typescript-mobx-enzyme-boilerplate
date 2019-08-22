import axios from "axios";

export class ApiService {
  constructor() {}

  getTodos = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      return response;
    } catch (error) {
      return error;
    }
  };
}
