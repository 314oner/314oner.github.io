import { type ReactNode } from 'react';
export declare const createStatefulBrokenLinks: () => {
    collectAnchor: (anchor: string | undefined) => void;
    collectLink: (link: string | undefined) => void;
    getCollectedAnchors: () => string[];
    getCollectedLinks: () => string[];
};
export declare const useBrokenLinksContext: () => {
    collectAnchor: () => void;
    collectLink: () => void;
};
export declare function BrokenLinksProvider({ children, brokenLinks, }: {
    children: ReactNode;
    brokenLinks: any;
}): JSX.Element;
