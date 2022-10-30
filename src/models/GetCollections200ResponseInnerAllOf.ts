/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CollectionModel } from './CollectionModel';
import {
    CollectionModelFromJSON,
    CollectionModelFromJSONTyped,
    CollectionModelToJSON,
} from './CollectionModel';

/**
 * 
 * @export
 * @interface GetCollections200ResponseInnerAllOf
 */
export interface GetCollections200ResponseInnerAllOf {
    /**
     * 
     * @type {CollectionModel}
     * @memberof GetCollections200ResponseInnerAllOf
     */
    contract?: CollectionModel;
}

/**
 * Check if a given object implements the GetCollections200ResponseInnerAllOf interface.
 */
export function instanceOfGetCollections200ResponseInnerAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCollections200ResponseInnerAllOfFromJSON(json: any): GetCollections200ResponseInnerAllOf {
    return GetCollections200ResponseInnerAllOfFromJSONTyped(json, false);
}

export function GetCollections200ResponseInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCollections200ResponseInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contract': !exists(json, 'contract') ? undefined : CollectionModelFromJSON(json['contract']),
    };
}

export function GetCollections200ResponseInnerAllOfToJSON(value?: GetCollections200ResponseInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract': CollectionModelToJSON(value.contract),
    };
}

