export interface Settings {
    color?: string | string[] & { 0: string };
    backgroundColor?: string;
    autoIncrementEnabled?: boolean;
    autoIncrementSpeed?: number;
    autoIncrementMaxPercent?: number;
    autoIncrementInitialPercent?: number;
    height?: number;
    appendTo?: string;
    useCustomCss?: boolean;
    spinnerEnabled?: boolean;
    spinnerColor?: string;
    spinnerSize?: number,
    spinnerSpeed?: number
}
