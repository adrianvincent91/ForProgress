# ForProgress

> A simple but flexible progress bar for single-page applications, written in TypeScript. Used at [CompareDial](https://www.comparedial.com/).

## Install

```bash
npm i forprogress
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
<script src="https://unpkg.com/forprogress@1.0.1"></script>
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
Default values are show in the examples:


### `color`

Set the color of the progress bar, using any valid CSS color data type. For a gradient, use an array of colors. 
```javascript
const bar = new ForProgress({ color: 'red' });
```

### `autoIncrement`

Auto increment the progress bar once started.
```javascript
const bar = new ForProgress({ autoIncrement: true });
```

### `autoIncrementSpeed`

The speed, in milliseconds, between auto incrementation. Lower is faster.
```javascript
const bar = new ForProgress({ autoIncrementSpeed: 100 });
```

### `autoIncrementMaxPercent`

The maximum percent increase between auto incrementation. A random number will be chosen between 0.1 and `autoIncrementMaxPercent` for each incrementation.
```javascript
const bar = new ForProgress({ autoIncrementMaxPercent: 1 });
```

### `autoIncrementFirstPercent`

The starting percent for the progress bar when `autoIncrement` is true.
```javascript
const bar = new ForProgress({ autoIncrementFirstPercent: 10 });
```

### `height`

The height of the progress bar in px.
```javascript
const bar = new ForProgress({ height: 3 });
```

### `appendTo`

The CSS query selector to append the progress bar to.
```javascript
const bar = new ForProgress({ appendTo: 'body' });
```

### `useCustomCss`

Set to true to disable automatic stylesheet injection and use your own style sheet. See [ForProgress.scss](./src/ForProgress.scss) for reference.
```javascript
const bar = new ForProgress({ useCustomCss: false });
```

© [Adrian Vincent](https://twitter.com/adrianvincent) | [MIT License](LICENSE.md)
