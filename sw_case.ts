export enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

type Supplier<R> = () => R;
type UnaryFunction<E, R> = (err: E) => R;

class OperatorRepository {
  static case<T>(dow: T, otherDow: T, fn: () => void): Case<T> {
    if (dow == otherDow) fn();
    return new Case(dow);
  }
  static default<T>(fn: () => void): Default<T> {
    fn();
    return new Default();
  }
  static sw<T>(dow: T): Switch<T> {
    return new Switch<T>(dow);
  }
  static recover(fn: (e: Error) => void, e?: Error): Recover {
    return new Recover(e);
  }
}

interface NextOperator<T> {
  dow: T;
}

interface CaseOperator<T> extends NextOperator<T> {
  case(dow: T, force: Boolean, fn: () => void): Case<T>;
}

interface DefaultOperator<T> extends NextOperator<T> {
  default(fn: () => void): Default<T>;
}

interface SwitchOperater<T> extends NextOperator<T> {
  sw(): Switch<T>;
}

interface RecoverOperator<T> extends NextOperator<T> {
  recover(fn: (e: Error) => {}): Recover;
}

class Default<T> implements RecoverOperator<T> {
  dow!: T;
  recover(fn: (e: Error) => void): Recover {
    return OperatorRepository.recover(fn);
  }
}

class Switch<T> implements CaseOperator<T> {
  dow: T;
  constructor(dow: T) {
    this.dow = dow;
  }
  case(dow: T, force: Boolean, fn: () => void): Case<T> {
    return OperatorRepository.case(dow, this.dow, fn);
  }
}

class Case<T> implements RecoverOperator<T>, DefaultOperator<T> {
  dow: T;
  constructor(dow: T) {
    this.dow = dow;
  }
  case(dow: T, force: Boolean, fn: () => void): Case<T> {
    return OperatorRepository.case(dow, this.dow, fn);
  }
  default(fn: () => void): Default<T> {
    return OperatorRepository.default(fn);
  }
  recover(fn: (e: Error) => {}): Recover {
    return OperatorRepository.recover(fn);
  }
}

interface EndOperator {}

class Recover implements EndOperator {
  e?: Error;
  constructor(e?: Error) {
    this.e = e;
  }
}

function sw<T>(dow: T): Switch<T> {
  return new Switch<T>(dow);
}

sw(DayOfWeek.MONDAY)
  .case(DayOfWeek.SUNDAY, true, () => {
    console.log("SUNDAY");
  })
  .case(DayOfWeek.MONDAY, true, () => {
    console.log("MONDAY");
  })
  .case(DayOfWeek.TUESDAY, true, () => {
    console.log("TUESDAY");
  })
  .case(DayOfWeek.WEDNESDAY, true, () => {
    console.log("WEDNESDAY");
  })
  //   .case(DayOfWeek.THURSDAY, () => {
  //     console.log('THURSDAY');
  //   })
  .case(DayOfWeek.FRIDAY, true, () => {
    console.log("FRIDAY");
  })
  .case(DayOfWeek.SATURDAY, true, () => {
    console.log("SATURDAY");
  })
  .default(() => {
    console.log("AWESOME!");
  })
  .recover((e) => {
    console.log("BOOM!");
  });
