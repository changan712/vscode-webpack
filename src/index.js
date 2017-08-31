

import './style/main.css'


function getComponent() {

    return import('lodash').then(_ => {

        var element = document.createElement('div');

        var btn = document.createElement('button');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = () => {
            import('./print').then(md => {
                let printMe = md.printMe;
                printMe();
            })
        };

        element.appendChild(btn);

        return element;
    })


}

var element;

getComponent().then(element => {
    element = element;
    document.body.appendChild(element);
})




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