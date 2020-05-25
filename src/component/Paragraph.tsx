import React, { Component, ReactNode } from 'react';

type Props = Readonly<{
  text: string;
}>;
type State = Readonly<{}>;

export class Paragraph extends Component<Props, State> {
  public render(): ReactNode {
  return <p>{this.props.text}</p>;
  }
}
