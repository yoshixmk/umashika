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
  static case(dow: DayOfWeek, otherDow: DayOfWeek, fn: () => void): Case {
    if (dow == otherDow) fn();
    return new Case(dow);
  }
  static default(fn: () => void): Default {
    fn();
    return new Default();
  }
  static sw(dow: DayOfWeek): Switch {
    return new Switch(dow);
  }
  static recover(fn: (e: Error) => void, e?: Error): Recover {
    return new Recover(e);
  }
}

interface NextOperator {
  dow: DayOfWeek;
}

interface CaseOperator extends NextOperator {
  case(dow: DayOfWeek, force: Boolean, fn: () => void): Case;
}

interface DefaultOperator extends NextOperator {
  default(fn: () => void): Default;
}

interface SwitchOperater extends NextOperator {
  sw(): Switch;
}

interface RecoverOperator extends NextOperator {
  recover(fn: (e: Error) => {}): Recover;
}

class Default implements RecoverOperator {
  dow!: DayOfWeek;
  recover(fn: (e: Error) => void): Recover {
    return OperatorRepository.recover(fn);
  }
}

class Switch implements CaseOperator {
  dow: DayOfWeek;
  constructor(dow: DayOfWeek) {
    this.dow = dow;
  }
  case(dow: DayOfWeek, force: Boolean, fn: () => void): Case {
    return OperatorRepository.case(dow, this.dow, fn);
  }
}

class Case implements RecoverOperator, DefaultOperator {
  dow: DayOfWeek;
  constructor(dow: DayOfWeek) {
    this.dow = dow;
  }
  case(dow: DayOfWeek, force: Boolean, fn: () => void): Case {
    return OperatorRepository.case(dow, this.dow, fn);
  }
  default(fn: () => void): Default {
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

function sw(dow: DayOfWeek): Switch {
  return new Switch(dow);
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
