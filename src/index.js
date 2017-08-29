import _ from 'lodash';
import { printMe } from './print.js';

import './style/main.css'


function component() {

    var element = document.createElement('div');

    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

var element =  component();

document.body.appendChild(element);


console.log(process.env.NODE_ENV);


 if (module.hot) {

    module.hot.accept('./print.js', function () {

        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    }, function (e) {
        console.error(e)
    })
} 