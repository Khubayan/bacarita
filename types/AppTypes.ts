/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
export interface ScreenComponents {
  [key: string]: () => React.JSX.Element;
}

export interface IconMapping {
  [routeName: string]: {
    active: string;
    inactive: string;
  };
}
