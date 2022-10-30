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
 * @interface GetCollections200ResponseInner
 */
export interface GetCollections200ResponseInner {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCollections200ResponseInner
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCollections200ResponseInner
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCollections200ResponseInner
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCollections200ResponseInner
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCollections200ResponseInner
     */
    createdAt?: string;
    /**
     * 
     * @type {CollectionModel}
     * @memberof GetCollections200ResponseInner
     */
    contract?: CollectionModel;
}

/**
 * Check if a given object implements the GetCollections200ResponseInner interface.
 */
export function instanceOfGetCollections200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCollections200ResponseInnerFromJSON(json: any): GetCollections200ResponseInner {
    return GetCollections200ResponseInnerFromJSONTyped(json, false);
}

export function GetCollections200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCollections200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'contract': !exists(json, 'contract') ? undefined : CollectionModelFromJSON(json['contract']),
    };
}

export function GetCollections200ResponseInnerToJSON(value?: GetCollections200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'contractId': value.contractId,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'contract': CollectionModelToJSON(value.contract),
    };
}

