import { Roles, Role } from "../models/Roles.ts";

export function decideRoles(userCount: number): Roles {
  const roles: Roles = [new Role("shika")];
  if (userCount > 2) {
    roles.push(new Role("okami"));
  }
  if (userCount > 4) {
    roles.push(new Role("okami"));
  }
  if (userCount > 7) {
    roles.push(new Role("okami"));
    roles.push(new Role("ushi"));
  }
  [...Array(userCount - roles.length)].map(() => roles.push(new Role("uma")));
  return roles;
}

export function shuffle<T>([...array]: T[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
