import React, { ChangeEvent, Component, ReactNode } from "react";

import { Props } from "../container/Textbox";

type State = Readonly<{}>;

export class Textbox extends Component<Props, State> {
  public render(): ReactNode {
    return <input
      type="text"
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        this.props.onType(event.target.value);
      }}
    />;
  }
}
