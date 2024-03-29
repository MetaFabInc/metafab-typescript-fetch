/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 * Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContractModel } from './ContractModel';
import {
    ContractModelFromJSON,
    ContractModelFromJSONTyped,
    ContractModelToJSON,
} from './ContractModel';

/**
 * 
 * @export
 * @interface GetCurrencies200ResponseInner
 */
export interface GetCurrencies200ResponseInner {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    symbol?: string;
    /**
     * This field has not had a description added.
     * @type {number}
     * @memberof GetCurrencies200ResponseInner
     */
    supplyCap?: number;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetCurrencies200ResponseInner
     */
    createdAt?: string;
    /**
     * 
     * @type {ContractModel}
     * @memberof GetCurrencies200ResponseInner
     */
    contract?: ContractModel;
}

/**
 * Check if a given object implements the GetCurrencies200ResponseInner interface.
 */
export function instanceOfGetCurrencies200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCurrencies200ResponseInnerFromJSON(json: any): GetCurrencies200ResponseInner {
    return GetCurrencies200ResponseInnerFromJSONTyped(json, false);
}

export function GetCurrencies200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCurrencies200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'supplyCap': !exists(json, 'supplyCap') ? undefined : json['supplyCap'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'contract': !exists(json, 'contract') ? undefined : ContractModelFromJSON(json['contract']),
    };
}

export function GetCurrencies200ResponseInnerToJSON(value?: GetCurrencies200ResponseInner | null): any {
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
        'name': value.name,
        'symbol': value.symbol,
        'supplyCap': value.supplyCap,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'contract': ContractModelToJSON(value.contract),
    };
}

