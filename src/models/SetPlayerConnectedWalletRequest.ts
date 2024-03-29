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
 * @interface SetPlayerConnectedWalletRequest
 */
export interface SetPlayerConnectedWalletRequest {
    /**
     * The address of the external wallet to connect to the player.
     * @type {string}
     * @memberof SetPlayerConnectedWalletRequest
     */
    address: string;
    /**
     * Any positive integer that hasn't been used previously to connect or disconnect this external wallet. Must be the same nonce used to generate the `signature`.
     * @type {number}
     * @memberof SetPlayerConnectedWalletRequest
     */
    nonce: number;
    /**
     * A signature string generated by signing a keccak256 hash generated with abiCoder encode arguments of `[ 'bytes32', 'address', 'bool', 'address', 'uint256' ]` and `[ keccak256(gameId), delegate wallet approved (player's custodial wallet address), true, external wallet address, any unused nonce number ]`.
     * @type {string}
     * @memberof SetPlayerConnectedWalletRequest
     */
    signature: string;
    /**
     * The blockchain you want to support this wallet connection on. If you need to support multiple blockchains, make multiple requests using different `chain` arguments. Support for new blockchains are added over time.
     * @type {string}
     * @memberof SetPlayerConnectedWalletRequest
     */
    chain: SetPlayerConnectedWalletRequestChainEnum;
}


/**
 * @export
 */
export const SetPlayerConnectedWalletRequestChainEnum = {
    Arbitrum: 'ARBITRUM',
    Arbitrumgoerli: 'ARBITRUMGOERLI',
    Arbitrumnova: 'ARBITRUMNOVA',
    Avalanche: 'AVALANCHE',
    Avalanchefuji: 'AVALANCHEFUJI',
    Ethereum: 'ETHEREUM',
    Fantom: 'FANTOM',
    Fantomtest: 'FANTOMTEST',
    Goerli: 'GOERLI',
    Matic: 'MATIC',
    Maticmumbai: 'MATICMUMBAI',
    Thundercore: 'THUNDERCORE',
    Thundercoretestnet: 'THUNDERCORETESTNET'
} as const;
export type SetPlayerConnectedWalletRequestChainEnum = typeof SetPlayerConnectedWalletRequestChainEnum[keyof typeof SetPlayerConnectedWalletRequestChainEnum];


/**
 * Check if a given object implements the SetPlayerConnectedWalletRequest interface.
 */
export function instanceOfSetPlayerConnectedWalletRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function SetPlayerConnectedWalletRequestFromJSON(json: any): SetPlayerConnectedWalletRequest {
    return SetPlayerConnectedWalletRequestFromJSONTyped(json, false);
}

export function SetPlayerConnectedWalletRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetPlayerConnectedWalletRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'nonce': json['nonce'],
        'signature': json['signature'],
        'chain': json['chain'],
    };
}

export function SetPlayerConnectedWalletRequestToJSON(value?: SetPlayerConnectedWalletRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'nonce': value.nonce,
        'signature': value.signature,
        'chain': value.chain,
    };
}

