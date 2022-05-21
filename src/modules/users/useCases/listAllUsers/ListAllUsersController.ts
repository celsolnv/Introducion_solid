import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    if (typeof user_id === "object") {
      return response.sendStatus(400);
    }
    const users = this.listAllUsersUseCase.execute({ user_id });
    if (!users) {
      return response.sendStatus(400);
    }
    return response.send(users);
  }
}

export { ListAllUsersController };
