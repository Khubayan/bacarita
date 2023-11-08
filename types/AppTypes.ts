/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

export interface IconMapping {
  [routeName: string]: {
    screenComponent: () => React.JSX.Element;
    active: string;
    inactive: string;
  };
}
export interface ScreenComponents {
  [key: string]: () => React.JSX.Element;
}
