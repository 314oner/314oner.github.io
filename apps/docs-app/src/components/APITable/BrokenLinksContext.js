import React, { useContext } from 'react';
export const createStatefulBrokenLinks = () => {
  const allAnchors = new Set();
  const allLinks = new Set();
  return {
    collectAnchor: (anchor) => {
      typeof anchor !== 'undefined' && allAnchors.add(anchor);
    },
    collectLink: (link) => {
      typeof link !== 'undefined' && allLinks.add(link);
    },
    getCollectedAnchors: () => [...allAnchors],
    getCollectedLinks: () => [...allLinks],
  };
};
const Context = React.createContext({
  collectAnchor: () => {
    // No-op for client
  },
  collectLink: () => {
    // No-op for client
  },
});
export const useBrokenLinksContext = () => useContext(Context);
export function BrokenLinksProvider({ children, brokenLinks }) {
  return React.createElement(
    Context.Provider,
    { value: brokenLinks },
    children,
  );
}
