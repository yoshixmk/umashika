import { connect, ConnectedComponent, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { PescatriceAction } from '../Action';
import { Display as Component } from '../component/Display';
import { State } from '../State';

type StateProps = Readonly<{
  display: string;
}>;
type DispatchProps = Readonly<{}>;
type OwnProps = Readonly<{}>;
export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state: State) => {
  const {
    text: {
      typing
    }
  } = state;

  return {
    display: typing
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch: Dispatch<PescatriceAction>) => {
  return {};
};

export const Display: ConnectedComponent<typeof Component, Pick<StateProps, never>> = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
