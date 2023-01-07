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
 * @interface UpdatePlayerRequest
 */
export interface UpdatePlayerRequest {
    /**
     * The player's current password. Must be provided if setting `newPassword`.
     * @type {string}
     * @memberof UpdatePlayerRequest
     */
    currentPassword?: string;
    /**
     * A new password. The player's old password will no longer be valid.
     * @type {string}
     * @memberof UpdatePlayerRequest
     */
    newPassword?: string;
    /**
     * Revokes the player's previous access token and returns a new one if true.
     * @type {boolean}
     * @memberof UpdatePlayerRequest
     */
    resetAccessToken?: boolean;
}

/**
 * Check if a given object implements the UpdatePlayerRequest interface.
 */
export function instanceOfUpdatePlayerRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdatePlayerRequestFromJSON(json: any): UpdatePlayerRequest {
    return UpdatePlayerRequestFromJSONTyped(json, false);
}

export function UpdatePlayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePlayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentPassword': !exists(json, 'currentPassword') ? undefined : json['currentPassword'],
        'newPassword': !exists(json, 'newPassword') ? undefined : json['newPassword'],
        'resetAccessToken': !exists(json, 'resetAccessToken') ? undefined : json['resetAccessToken'],
    };
}

export function UpdatePlayerRequestToJSON(value?: UpdatePlayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentPassword': value.currentPassword,
        'newPassword': value.newPassword,
        'resetAccessToken': value.resetAccessToken,
    };
}

