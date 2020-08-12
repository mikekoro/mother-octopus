## What is it about?

This app is a wrapper that allows you to run other instances of Create React App inside (à la Micro Frontends).<br/>
The app supports bidirectional communitation between the Micro Frontends via Redux.

## Getting started

  - Clone, `npm install` and `npm start` this repository.
  - Go to [https://github.com/mikekoro/child-octopus1](https://github.com/mikekoro/child-octopus1) and do the same to install and run the first Micro Frontend
  - Go to [https://github.com/mikekoro/child-octopus2](https://github.com/mikekoro/child-octopus2) and do the same to install and run another Micro Frontend for good measure.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NB! Based on the [blogpost](https://medium.com/better-programming/build-your-own-micro-frontend-ecosystem-a05128c74f99) from Jennifer Fu.

### Concepts

- Each Micro Frontend is represented by a component, eg.

```javascript
<Route 
    path="/some/path" 
	render={(props) => <CreateReactApp {...props}/>} 
/>
....
const CreateReactApp = (props) => {
  return (
    <MicroFrontend
        history={props}
    ></MicroFrontend>
  )
};
```
- You can pass any data/function to your Micro Frontends.

```javascript
import store from './store'; // Redux store that you normally pass to <Provider store={store}>
const redux_actions = require('./store/actions/app'); // any Redux actions you might have
....
const CreateReactApp = (props) => {
  return (
    <MicroFrontend
        history={props}
		foo="bar"
		methods={redux_actions}
		store={store}
    ></MicroFrontend>
  )
};
```
