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
/**
 * 
 * @export
 * @interface CurrencyModel
 */
export interface CurrencyModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    symbol?: string;
    /**
     * This field has not had a description added.
     * @type {number}
     * @memberof CurrencyModel
     */
    supplyCap?: number;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CurrencyModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the CurrencyModel interface.
 */
export function instanceOfCurrencyModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrencyModelFromJSON(json: any): CurrencyModel {
    return CurrencyModelFromJSONTyped(json, false);
}

export function CurrencyModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyModel {
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
    };
}

export function CurrencyModelToJSON(value?: CurrencyModel | null): any {
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
    };
}

