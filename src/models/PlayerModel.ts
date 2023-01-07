/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.3
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
 * @interface PlayerModel
 */
export interface PlayerModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    connectedWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PlayerModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the PlayerModel interface.
 */
export function instanceOfPlayerModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlayerModelFromJSON(json: any): PlayerModel {
    return PlayerModelFromJSONTyped(json, false);
}

export function PlayerModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'connectedWalletId': !exists(json, 'connectedWalletId') ? undefined : json['connectedWalletId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function PlayerModelToJSON(value?: PlayerModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'walletId': value.walletId,
        'connectedWalletId': value.connectedWalletId,
        'username': value.username,
        'accessToken': value.accessToken,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
    };
}

