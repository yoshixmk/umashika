import { Roles, Role } from "../models/Roles.ts";

export function decideRoles(userCount: number): Roles {
  const roles: Roles = [
    new Role("shika"),
    new Role("shika"),
    new Role("uma"),
    new Role("uma"),
    new Role("okami"),
    new Role("ushi"),
  ];
  const result: Roles = [];
  [...Array(userCount)].forEach(() => {
    const index = Math.floor(Math.random() * roles.length);
    result.push(roles[index]);
  });
  return result;
}

export function shuffle<T>([...array]: T[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
