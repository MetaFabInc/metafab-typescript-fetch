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
 * @interface UpdatePlayer200Response
 */
export interface UpdatePlayer200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    connectedWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    profileId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof UpdatePlayer200Response
     */
    profilePermissions?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    createdAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof UpdatePlayer200Response
     */
    walletDecryptKey?: string;
}

/**
 * Check if a given object implements the UpdatePlayer200Response interface.
 */
export function instanceOfUpdatePlayer200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdatePlayer200ResponseFromJSON(json: any): UpdatePlayer200Response {
    return UpdatePlayer200ResponseFromJSONTyped(json, false);
}

export function UpdatePlayer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePlayer200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'connectedWalletId': !exists(json, 'connectedWalletId') ? undefined : json['connectedWalletId'],
        'profileId': !exists(json, 'profileId') ? undefined : json['profileId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'profilePermissions': !exists(json, 'profilePermissions') ? undefined : json['profilePermissions'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'walletDecryptKey': !exists(json, 'walletDecryptKey') ? undefined : json['walletDecryptKey'],
    };
}

export function UpdatePlayer200ResponseToJSON(value?: UpdatePlayer200Response | null): any {
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
        'profileId': value.profileId,
        'username': value.username,
        'accessToken': value.accessToken,
        'profilePermissions': value.profilePermissions,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'walletDecryptKey': value.walletDecryptKey,
    };
}

