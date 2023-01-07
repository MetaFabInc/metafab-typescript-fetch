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
 * @interface CreateCurrencyRequest
 */
export interface CreateCurrencyRequest {
    /**
     * The name of this currency. This can be anything, such as `Bright Gems`, `Gold`, etc.
     * @type {string}
     * @memberof CreateCurrencyRequest
     */
    name: string;
    /**
     * The shorthand symbol to represent this currency. This can be anything, such as `BGEM`, `GLD`, etc.
     * @type {string}
     * @memberof CreateCurrencyRequest
     */
    symbol: string;
    /**
     * The maximum amount of this currency that can ever exist. Use `0` if you do not want this currency to have a maximum supply.
     * @type {number}
     * @memberof CreateCurrencyRequest
     */
    supplyCap: number;
    /**
     * The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
     * @type {string}
     * @memberof CreateCurrencyRequest
     */
    chain: CreateCurrencyRequestChainEnum;
}


/**
 * @export
 */
export const CreateCurrencyRequestChainEnum = {
    Ethereum: 'ETHEREUM',
    Goerli: 'GOERLI',
    Matic: 'MATIC',
    Maticmumbai: 'MATICMUMBAI',
    Arbitrum: 'ARBITRUM',
    Arbitrumgoerli: 'ARBITRUMGOERLI',
    Fantom: 'FANTOM',
    Fantomtest: 'FANTOMTEST'
} as const;
export type CreateCurrencyRequestChainEnum = typeof CreateCurrencyRequestChainEnum[keyof typeof CreateCurrencyRequestChainEnum];


/**
 * Check if a given object implements the CreateCurrencyRequest interface.
 */
export function instanceOfCreateCurrencyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "supplyCap" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function CreateCurrencyRequestFromJSON(json: any): CreateCurrencyRequest {
    return CreateCurrencyRequestFromJSONTyped(json, false);
}

export function CreateCurrencyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCurrencyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'symbol': json['symbol'],
        'supplyCap': json['supplyCap'],
        'chain': json['chain'],
    };
}

export function CreateCurrencyRequestToJSON(value?: CreateCurrencyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'symbol': value.symbol,
        'supplyCap': value.supplyCap,
        'chain': value.chain,
    };
}

