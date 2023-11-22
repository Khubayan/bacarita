/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
export type AppRootParamList = {
  Events: undefined;
  //   profile: undefined;
  //   post: {postId: string};
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
