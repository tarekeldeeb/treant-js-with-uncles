import { Injectable } from '@angular/core';
import * as top from '../../assets/top.js';
import * as hafs from '../../assets/hafs.js';
import * as warsh from '../../assets/warsh.js';

@Injectable({
    providedIn: 'root',
})
export class DemoAppService {

    private config: any = [];

    constructor() {
        this.config = [{
            container: '#basic-popover',
            animateOnInit: true,
    
            node: {
                collapsable: true,
            },
            animation: {
                nodeAnimation: 'easeOutBounce',
                nodeSpeed: 700,
                connectorsAnimation: 'bounce',
                connectorsSpeed: 700,
            },
        }];
    }

    getBasicPopoverData(treeName="hafs"): any {
        switch (treeName) {
            case 'top':
                return this.config.concat(top.default);
            case 'hafs':
                return this.config.concat(hafs.default);
            case 'warsh':
                return this.config.concat(warsh.default);
            default:
                return this.config.concat(top.default);
        }

    }
}
