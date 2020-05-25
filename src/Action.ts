import { Action } from 'redux';

export const TYPED = '@@Umashika/Typed' as const;
export const OTHER = '@@Umashika/Other' as const;

export interface TypeAction extends Action<string> {
  readonly type: typeof TYPED;
  readonly text: string;
}

export interface OtherAction extends Action<string> {
  readonly type: typeof OTHER;
}

export const typing: (input: string) => TypeAction = (input: string) => {
  return {
    type: TYPED,
    text: input
  };
};

export const other: () => OtherAction = () => {
  return {
    type: OTHER
  };
};

export type PescatriceAction =
| TypeAction
| OtherAction;
