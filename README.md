# ForProgress

> A simple but flexible progress bar for single-page applications, written in TypeScript. Used at [CompareDial](https://www.comparedial.com/).

## Install

```bash
$ npm i forprogress
```
CommonJS
```javascript
const ForProgress = require('forprogress');
```

ES6
```javascript
import ForProgress from 'ForProgress';
```

HTML
```html
<script src="https://unpkg.com/forprogress@2.0.0"></script>
```

## Usage
```javascript
const bar = new ForProgress();

bar.start();

// a request that takes time...

bar.done();
```

## Advanced usage

```javascript
bar.setPercent(30); // Set progress percent to 30
```

```javascript
bar.addPercent(40); // Add 40 to the current progress percent
```

```javascript
const currentPercent = bar.getPercent(); // Return current progress percent
console.log(currentPercent); // 70
```

```javascript
bar.pause(); // Pause auto incrementation
```

```javascript
bar.resume(); // Resume auto incrementation
```

## Configuration
You can change the default values during class initialisation.


### `color` (default: 'red')

Set the color of the progress bar, using any valid CSS color data type. For a gradient, use an array of colors. 
```javascript
const bar = new ForProgress({ color: 'red' }); // Single color

const bar = new ForProgress({ color: ['green', '#0000FF', 'purple'] }); // Gradient
```

### `backgroundColor` (default: 'transparent')

Set the background color of the progress bar, using any valid CSS color data type. 
```javascript
const bar = new ForProgress({ backgroundColor: 'transparent' });
```

### `autoIncrementEnabled` (default: true)

Enable or disable progress bar auto incrementation.
```javascript
const bar = new ForProgress({ autoIncrementEnabled: true });
```

### `autoIncrementSpeed` (default: 100)

The interval speed between auto incrementations, in milliseconds. Lower is faster.
```javascript
const bar = new ForProgress({ autoIncrementSpeed: 100 });
```

### `autoIncrementMaxPercent` (default: 1)

The maximum progress percent increase between auto incrementation intervals. A random number will be chosen between 0.1 and `autoIncrementMaxPercent` for each interval.
```javascript
const bar = new ForProgress({ autoIncrementMaxPercent: 1 });
```

### `autoIncrementInitialPercent` (default: 20)

Set the initial progress percent. Only applies when `autoIncrementEnabled` is true.
```javascript
const bar = new ForProgress({ autoIncrementInitialPercent: 20 });
```

### `height` (default: 3)

The height of the progress bar in px.
```javascript
const bar = new ForProgress({ height: 3 });
```

### `appendTo` (default: 'body')

The CSS query selector to append the progress bar to.
```javascript
const bar = new ForProgress({ appendTo: 'body' });
```

### `useCustomCss` (default: false)

Set to true to disable automatic style sheet injection and use your own style sheet. See [ForProgress.scss](./src/ForProgress.scss) for reference.
```javascript
const bar = new ForProgress({ useCustomCss: false });
```

### `spinnerEnabled` (default: true)

Enable or disable the spinner.
```javascript
const bar = new ForProgress({ spinnerEnabled: true });
```

### `spinnerColor` (default: 'grey')

The color of the spinner, using any valid CSS color data type
```javascript
const bar = new ForProgress({ spinnerColor: 'grey' });
```

### `spinnerSize` (default: 20)

The size of the spinner in px.
```javascript
const bar = new ForProgress({ spinnerSize: 20 });
```

### `spinnerSpeed` (default: 750)

The speed at which the spinner completes 360 degrees, in milliseconds. Lower is faster.
```javascript
const bar = new ForProgress({ spinnerSpeed: 750 });
```

© [Adrian Vincent](https://twitter.com/adrianvincent) | [MIT License](LICENSE.md)
