import css from './ForProgress.scss';
import type { Settings } from './types';

class ForProgress {

    private settings: Required<Settings>;
    private currentPercent: number;
    private currentAutoIncrementInterval: number | boolean;
    private isRunning: boolean;
    private autoIncrementIsPaused: boolean;
    private colorArray: string[];

    constructor(customSettings: Settings = {}) {

        this.settings = {
            color: 'red',
            backgroundColor: 'transparent',
            autoIncrementEnabled: true,
            autoIncrementSpeed: 100,
            autoIncrementMaxPercent: 1,
            autoIncrementInitialPercent: 20,
            height: 3,
            appendTo: 'body',
            useCustomCss: false,
            spinnerEnabled: true,
            spinnerColor: 'grey',
            spinnerSize: 20,
            spinnerSpeed: 750
        };

        this.updateSettings(customSettings);
        this.appendCss();
        this.colorArray = this.getcolorArray();
        this.currentPercent = 0;
        this.currentAutoIncrementInterval = false;
        this.isRunning = false;
        this.autoIncrementIsPaused = false;

    }

    /** 
     * Start the progress bar. Restarts if already running.
     */
    start(): this {

        this.reset();

        let { forProgressContainer, bar } = this.appendForProgressElements();

        forProgressContainer.classList.add('disableTransitionForProgress');
        bar.classList.add('disableTransitionForProgress');

        this.setPercent(0);
        forProgressContainer.style.opacity = '1';

        forProgressContainer.offsetHeight;
        forProgressContainer.classList.remove('disableTransitionForProgress');
        bar.classList.remove('disableTransitionForProgress');

        this.startIncrement();

        return this;

    }

    /**
     * Manually set the percent of the progress bar.
     */
    setPercent(percent: number): this {

        if (!this.isRunning) this.start();

        if (percent < 0 || percent > 100) return this;

        this.changeBarProgress(percent);
        return this;

    }

    /**
     * Add to the current pecent of the progress bar. Use {@link getPercent} to get the current percent value.
     */
    addPercent(percent: number): this {

        if (!this.isRunning) this.start();

        let newPercent = this.currentPercent + percent;
        if (newPercent > 100) newPercent = 100;
        if (newPercent < 0) newPercent = 0;

        this.changeBarProgress(newPercent);
        return this;

    }

    /**
     * Get the current percent value of the progress bar.
     */
    getPercent(): number {

        return this.currentPercent;

    }

    /**
     * Sets the progress bar to 100% and fades out
     */
    done(): this {

        const forProgressContainer: HTMLElement | null = document.querySelector('div.forProgressContainer');

        if (!this.isRunning || !forProgressContainer) return this;

        this.clearCurrentAutoIncrementInterval();
        this.setPercent(100);
        forProgressContainer.style.opacity = '0';

        this.isRunning = false;

        forProgressContainer.addEventListener('transitionend', transitionEnd);

        function transitionEnd(event: Event) {

            if (!forProgressContainer) return;

            const element = event.target as HTMLElement;
            if (element.className !== 'forProgressContainer') return;

            try {

                forProgressContainer.remove();
                forProgressContainer.removeEventListener('transitionend', transitionEnd);

            } catch (e) {

            }

        }

        return this;

    }

    /**
     * Pause auto incrementation (if enabled).
     */
    pause(): this {

        this.autoIncrementIsPaused = true;
        return this;

    }

    /**
     * Resume auto incrementation.
     */
    resume(): this {

        this.autoIncrementIsPaused = false;
        return this;

    }

    private reset() {

        this.clearCurrentAutoIncrementInterval();
        this.isRunning = true;
        this.currentAutoIncrementInterval = false;
        this.autoIncrementIsPaused = !this.settings.autoIncrementEnabled;

    }

    private changeBarProgress(percent: number) {

        const bar: HTMLElement | null = document.querySelector('div.forProgressContainer div.bar');
        if (!bar) return;

        let translatePercent = -100 + percent;
        bar.style.transform = `translate3d(${translatePercent}%, 0px, 0px)`;

        this.currentPercent = percent;

    }

    private createForProgressContainer(): HTMLElement {

        let forProgressContainer = this.createElementWithClassName('div', 'forProgressContainer')
        let bar = this.createElementWithClassName('div', 'bar')
        let tip = this.createElementWithClassName('div', 'tip')
        let spinner = this.createElementWithClassName('div', 'spinner')

        if (!this.settings.useCustomCss) {

            forProgressContainer.style.background = this.settings.backgroundColor;
            bar.style.background = this.gradientGenerator();
            bar.style.height = `${this.settings.height}px`;
            tip.style.background = this.colorArray[this.colorArray.length - 1];
            spinner.style.borderTop = `2px solid ${this.settings.spinnerColor}`;
            spinner.style.height = `${this.settings.spinnerSize}px`;
            spinner.style.width = `${this.settings.spinnerSize}px`;
            spinner.style.animation = `spin ${this.settings.spinnerSpeed}ms linear infinite`

        }

        bar.append(tip);
        forProgressContainer.append(bar);
        if (this.settings.spinnerEnabled) forProgressContainer.append(spinner);

        return forProgressContainer;

    }

    private gradientGenerator(): string {

        let colorPosString = this.colorArray
            .map((color, i) => {

                let gradientPos = ((100 / (this.colorArray.length - 1)) * i).toFixed(2);
                return `${color} ${gradientPos}%`;

            })
            .join(', ');

        return `linear-gradient(95deg, ${colorPosString})`;

    }

    private getcolorArray(): string[] {

        let color = this.settings.color;

        if (typeof color === 'string') return [color, color];
        if (color.length === 1) return [color[0], color[0]]
        return color;

    }

    private appendForProgressElements(): { forProgressContainer: HTMLElement, bar: HTMLElement } {

        let forProgressContainer: HTMLElement | null = document.querySelector('div.forProgressContainer');
        if (forProgressContainer) forProgressContainer.remove();

        forProgressContainer = this.createForProgressContainer();
        let appendToElement: HTMLElement | null = document.querySelector(this.settings.appendTo);
        if (!appendToElement) throw `Cannot append to '${this.settings.appendTo}' as it does not exist in document`;
        appendToElement.append(forProgressContainer);

        let bar = forProgressContainer.querySelector('div.bar') as HTMLElement;

        return { forProgressContainer, bar };

    }

    private startIncrement() {

        if (this.currentPercent === 0 && !this.autoIncrementIsPaused) this.setPercent(this.settings.autoIncrementInitialPercent);

        this.currentAutoIncrementInterval = setInterval(() => {

            if (this.autoIncrementIsPaused) return;

            if (this.currentPercent === 0 && this.settings.autoIncrementInitialPercent !== 0) {

                this.setPercent(this.settings.autoIncrementInitialPercent)
                return;

            }

            let nextPercent = this.currentPercent + this.getRandomPercent();
            if (nextPercent <= 99.5) this.setPercent(nextPercent);

        }, this.settings.autoIncrementSpeed) as unknown as number;

    }

    private getRandomPercent(): number {

        // Random number between 0.1 and this.settings.autoIncrementMaxPercent.
        return parseFloat((Math.random() * (0.1 - this.settings.autoIncrementMaxPercent) + this.settings.autoIncrementMaxPercent).toFixed(2));

    }

    private updateSettings(customSettings: Settings) {

        for (let [key, value] of Object.entries(customSettings)) {

            (this.settings as any)[key] = value;

        }

    }

    private clearCurrentAutoIncrementInterval() {
        if (typeof this.currentAutoIncrementInterval === 'number') clearInterval(this.currentAutoIncrementInterval)
    }

    private appendCss() {

        if (this.settings.useCustomCss) return;

        let styleElement = document.createElement('style');
        styleElement.textContent = css;
        document.head.append(styleElement);

    }

    private createElementWithClassName(elementType: string, className: string): HTMLElement {

        let element = document.createElement(elementType);
        element.className = className;
        return element;

    }

};

export = ForProgress;
