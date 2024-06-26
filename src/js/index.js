import validateService from "./service/validateService.js";
console.log("validateService:::", validateService.validateEmail);

// Можна або так:
import * as apiService from "./service/apiService.js";
console.log("apiService:::", apiService);

// або так:
import { fetchAllUsers, fetchById, updateUserById, x as value, y as name } from "./service/apiService.js";
console.log("fetchAllUsers:::", fetchAllUsers);
console.log("fetchById:::", fetchById);
console.log("updateUserById:::", updateUserById);
console.log("value:::", value);
console.log("name:::", name);
