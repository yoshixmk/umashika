import { connect, ConnectedComponent, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { PescatriceAction, typing } from '../Action';
import { Textbox as Component } from '../component/Textbox';
import { State } from '../State';

type StateProps = Readonly<{}>;
type DispatchProps = Readonly<{
  onType(input: string): void;
}>;
type OwnProps = Readonly<{}>;
export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state: State) => {
  return {};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch: Dispatch<PescatriceAction>) => {
  return {
    onType(input: string): void {
      dispatch(typing(input));
    }
  };
};

export const Textbox: ConnectedComponent<typeof Component, Pick<StateProps, never>> = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
