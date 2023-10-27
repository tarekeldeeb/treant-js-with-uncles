import { Injectable } from '@angular/core';
import * as mydata from '../../assets/data.js';

@Injectable({
    providedIn: 'root',
})
export class DemoAppService {

    constructor() {}

    getBasicPopoverData(): any {
        return mydata.default;
    }

    flattenItems(items, key): any {
        return items.reduce((flattenedItems, item) => {
            flattenedItems.push(item);
            if (Array.isArray(item[key])) {
                flattenedItems = flattenedItems.concat(this.flattenItems(item[key], key));
                // delete item[key]
            }
            return flattenedItems;
        }, []);
    }
}
