
import { A } from "./a";
import './style/index.less'

export class Index {
    name: string = 'index';
    constructor() {

        let a = new A()
        console.log(a.name,123131231223);
    }

}

new Index();