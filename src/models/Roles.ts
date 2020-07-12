export type RoleType = "uma" | "shika" | "okami" | "ushi";

export class Role {
  name: RoleType;
  constructor(name: RoleType) {
    this.name = name;
  }
}

export type Roles = Role[];
