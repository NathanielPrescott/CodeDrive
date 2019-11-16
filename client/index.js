import './styles.css';
import {cube} from "./math.js";

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');
  const mathElement = document.createElement('pre');

  button.innerHTML = 'Click me and look at the console';
  element.innerHTML = 'Hello webpack!';
  element.appendChild(br);
  element.appendChild(button);

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;

    print();
  });

  mathElement.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}

