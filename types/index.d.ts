import * as React from 'react';
export declare const VisuallyHidden: {
    ({ children }: VisuallyHiddenProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    displayName: string;
};
export declare const visuallyHidden: {
    border: number;
    clip: string;
    height: number;
    width: number;
    margin: number;
    padding: number;
    overflow: string;
    position: string;
};
export interface VisuallyHiddenProps {
    children: React.ReactElement | JSX.Element;
}
