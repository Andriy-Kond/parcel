import validateService from "./service/validateService";
console.log("validateService:::", validateService.validateEmail);

// Можна або так:
// import * as apiService from "./service/apiService";
// console.log("apiService:::", apiService);

// або так:
import { fetchAllUsers, fetchById, updateUserById, x as value, y as name } from "./service/apiService";
console.log("fetchAllUsers:::", fetchAllUsers);
console.log("fetchById:::", fetchById);
console.log("updateUserById:::", updateUserById);
console.log("value:::", value);
console.log("name:::", name);
