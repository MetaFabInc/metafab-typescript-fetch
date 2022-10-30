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
import type { ContractModel } from './ContractModel';
import {
    ContractModelFromJSON,
    ContractModelFromJSONTyped,
    ContractModelToJSON,
} from './ContractModel';

/**
 * 
 * @export
 * @interface GetExchanges200ResponseInner
 */
export interface GetExchanges200ResponseInner {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetExchanges200ResponseInner
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetExchanges200ResponseInner
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetExchanges200ResponseInner
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetExchanges200ResponseInner
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetExchanges200ResponseInner
     */
    createdAt?: string;
    /**
     * 
     * @type {ContractModel}
     * @memberof GetExchanges200ResponseInner
     */
    contract?: ContractModel;
}

/**
 * Check if a given object implements the GetExchanges200ResponseInner interface.
 */
export function instanceOfGetExchanges200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetExchanges200ResponseInnerFromJSON(json: any): GetExchanges200ResponseInner {
    return GetExchanges200ResponseInnerFromJSONTyped(json, false);
}

export function GetExchanges200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetExchanges200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'contract': !exists(json, 'contract') ? undefined : ContractModelFromJSON(json['contract']),
    };
}

export function GetExchanges200ResponseInnerToJSON(value?: GetExchanges200ResponseInner | null): any {
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
        'contract': ContractModelToJSON(value.contract),
    };
}

