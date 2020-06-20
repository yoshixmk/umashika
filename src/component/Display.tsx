import React, { Component, ReactNode } from "react";

import { Props } from "../container/Display";

type State = Readonly<{}>;

export class Display extends Component<Props, State> {
  public render(): ReactNode {
    return (
      <div>
        <p>{this.props.display}</p>
      </div>
    );
  }
}
