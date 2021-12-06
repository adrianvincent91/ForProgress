interface Settings {
    color?: string | string[] & {
        0: string;
    };
    autoIncrement?: boolean;
    autoIncrementSpeed?: number;
    autoIncrementMaxPercent?: number;
    autoIncrementFirstPercent?: number;
    height?: number;
    appendTo?: string;
    useCustomCss?: boolean;
}
declare class ForProgress {
    private settings;
    private currentPercent;
    private currentAutoIncrementInterval;
    private isRunning;
    private autoIncrementIsPaused;
    private colorArray;
    constructor(customSettings?: Settings);
    /**
     * Start the progress bar. Restarts if already running.
     * @param autoIncrement Enable or disable auto increment. Overrides the settings autoIncrement property.
     */
    start(): this;
    /**
     * Manually set the percent of the progress bar.
     */
    setPercent(percent: number): this;
    /**
     * Add to the current pecent of the progress bar. Use {@link getPercent} to get the current percent value.
     */
    addPercent(percent: number): this;
    /**
     * Get the current percent value of the progress bar.
     */
    getPercent(): number;
    /**
     * Sets the progress bar to 100% and fades out
     */
    done(): this;
    /**
     * Pause auto incrementation (if enabled).
     */
    pause(): this;
    /**
     * Resume auto incrementation.
     */
    resume(): this;
    private reset;
    private changeBarProgress;
    private createForProgressContainer;
    private gradientGenerator;
    private getcolorArray;
    private getForProgressElements;
    private startIncrement;
    private getRandomPercent;
    private updateSettings;
    private clearCurrentAutoIncrementInterval;
    private appendCss;
}
export = ForProgress;
