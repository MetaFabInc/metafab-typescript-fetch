/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.2
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
 * @interface GetCurrencyFees200Response
 */
export interface GetCurrencyFees200Response {
    /**
     * The wallet address that fees from all applicable transactions are automatically sent to.
     * @type {string}
     * @memberof GetCurrencyFees200Response
     */
    recipientAddress?: string;
    /**
     * The number of fee basis points. 100 basisPoints = 1% fee of the total transaction amount deducted from the total received by the recipient.
     * @type {number}
     * @memberof GetCurrencyFees200Response
     */
    basisPoints?: number;
    /**
     * The fixed number of currency as a fee regardless of the total transaction amount. 10 = 10 of the currency as a fee for any transaction, deducted from the total received by the recipient.
     * @type {number}
     * @memberof GetCurrencyFees200Response
     */
    fixedAmount?: number;
    /**
     * The maximum combined fee between basisPoints and fixedAmount. If the total transaction fee is over this amount, the capAmount will be used as the transaction fee deducted from the total received by the recipient.
     * @type {number}
     * @memberof GetCurrencyFees200Response
     */
    capAmount?: number;
}

/**
 * Check if a given object implements the GetCurrencyFees200Response interface.
 */
export function instanceOfGetCurrencyFees200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCurrencyFees200ResponseFromJSON(json: any): GetCurrencyFees200Response {
    return GetCurrencyFees200ResponseFromJSONTyped(json, false);
}

export function GetCurrencyFees200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCurrencyFees200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recipientAddress': !exists(json, 'recipientAddress') ? undefined : json['recipientAddress'],
        'basisPoints': !exists(json, 'basisPoints') ? undefined : json['basisPoints'],
        'fixedAmount': !exists(json, 'fixedAmount') ? undefined : json['fixedAmount'],
        'capAmount': !exists(json, 'capAmount') ? undefined : json['capAmount'],
    };
}

export function GetCurrencyFees200ResponseToJSON(value?: GetCurrencyFees200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipientAddress': value.recipientAddress,
        'basisPoints': value.basisPoints,
        'fixedAmount': value.fixedAmount,
        'capAmount': value.capAmount,
    };
}

