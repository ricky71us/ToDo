import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "PSheriff",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    canCreateToDoItems: false,
    canEditTodoItems:  true,
    canDeleteToDoItems: false,
    canEditProfile: true
  },
  {
    userName: "BJones",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    canCreateToDoItems: false,
    canEditTodoItems:  false,
    canDeleteToDoItems: false,
    canEditProfile: true
  }
];
