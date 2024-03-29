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
import type { ProfilePermissionsValue } from './ProfilePermissionsValue';
import {
    ProfilePermissionsValueFromJSON,
    ProfilePermissionsValueFromJSONTyped,
    ProfilePermissionsValueToJSON,
} from './ProfilePermissionsValue';

/**
 * 
 * @export
 * @interface UpdateProfilePlayerRequest
 */
export interface UpdateProfilePlayerRequest {
    /**
     * A properly formatted permissions object that validates against the MetaFab profile permissions schema.
     * @type {{ [key: string]: ProfilePermissionsValue; }}
     * @memberof UpdateProfilePlayerRequest
     */
    permissions?: { [key: string]: ProfilePermissionsValue; };
}

/**
 * Check if a given object implements the UpdateProfilePlayerRequest interface.
 */
export function instanceOfUpdateProfilePlayerRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateProfilePlayerRequestFromJSON(json: any): UpdateProfilePlayerRequest {
    return UpdateProfilePlayerRequestFromJSONTyped(json, false);
}

export function UpdateProfilePlayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProfilePlayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissions': !exists(json, 'permissions') ? undefined : (mapValues(json['permissions'], ProfilePermissionsValueFromJSON)),
    };
}

export function UpdateProfilePlayerRequestToJSON(value?: UpdateProfilePlayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissions': value.permissions === undefined ? undefined : (mapValues(value.permissions, ProfilePermissionsValueToJSON)),
    };
}

