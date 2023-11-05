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

    unflatten(arr): any {
        var tree = [],
            mappedArr = {},
            arrElem,
            mappedElem;

        for (var i = 0, len = arr.length; i < len; i++) {
            arrElem = arr[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]['children'] = [];
        }

        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];

                if (mappedElem.parentId) {
                    mappedArr[mappedElem['parentId']] &&
                        mappedArr[mappedElem['parentId']]['children'].push(mappedElem);
                } else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }
}
