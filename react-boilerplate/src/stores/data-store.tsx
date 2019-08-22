import { observable, flow } from "mobx";

import { ApiService } from "../api-service";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export class DataStore {
  @observable todos: Todo[];

  apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
    this.todos = [];
  }

  getTodos = flow(function*(this: DataStore) {
    try {
      let response = yield this.apiService.getTodos();
      console.log(response);
      this.todos = response.data;
      return response;
    } catch (error) {
      return error;
    }
  });
}
