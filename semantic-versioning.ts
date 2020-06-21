export interface IVersion<T extends IVersion<T>> {
  // greater than
  gt(other: T): boolean;
  // greater than or equals
  gte(other: T): boolean;
  // less than
  lt(other: T): boolean;
  // less than or equals
  lte(other: T): boolean;
  // equals
  eq(other: T): boolean;
}

class Semver implements IVersion<Semver> {
  private mager: number;
  private minar: number;
  private patch: number;
  private constructor(mager: number, minar: number, patch: number) {
    this.mager = mager;
    this.minar = minar;
    this.patch = patch;
  }
  public static ofString(str: string): Semver {
    const versions: string[] = str.split(".");
    if (versions === undefined || versions.length !== 3) {
      throw Error("Invalid parameter");
    }
    return new Semver(
      Number.parseInt(versions[0]),
      Number.parseInt(versions[1]),
      Number.parseInt(versions[2]),
    );
  }

  gt(other: Semver): boolean {
    if (this.mager > other.mager) {
      return true;
    }
    if (this.minar > other.minar) {
      return true;
    }
    return this.patch > other.patch;
  }
  gte(other: Semver): boolean {
    if (this.gt(other)) {
      return true;
    }
    return this.eq(other);
  }
  lt(other: Semver): boolean {
    if (this.mager < other.mager) {
      return true;
    }
    if (this.minar < other.minar) {
      return true;
    }
    return this.patch < other.patch;
  }
  lte(other: Semver): boolean {
    if (this.lt(other)) {
      return true;
    }
    return this.eq(other);
  }
  eq(other: Semver): boolean {
    return this == other;
  }
}
