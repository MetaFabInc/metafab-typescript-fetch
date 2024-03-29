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
 * @interface PublicGame
 */
export interface PublicGame {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    publishedKey?: string;
    /**
     * This field has not had a description added.
     * @type {Array<string>}
     * @memberof PublicGame
     */
    redirectUris?: Array<string>;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    iconImageUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    coverImageUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    primaryColorHex?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicGame
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the PublicGame interface.
 */
export function instanceOfPublicGame(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicGameFromJSON(json: any): PublicGame {
    return PublicGameFromJSONTyped(json, false);
}

export function PublicGameFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicGame {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'publishedKey': !exists(json, 'publishedKey') ? undefined : json['publishedKey'],
        'redirectUris': !exists(json, 'redirectUris') ? undefined : json['redirectUris'],
        'iconImageUrl': !exists(json, 'iconImageUrl') ? undefined : json['iconImageUrl'],
        'coverImageUrl': !exists(json, 'coverImageUrl') ? undefined : json['coverImageUrl'],
        'primaryColorHex': !exists(json, 'primaryColorHex') ? undefined : json['primaryColorHex'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function PublicGameToJSON(value?: PublicGame | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'publishedKey': value.publishedKey,
        'redirectUris': value.redirectUris,
        'iconImageUrl': value.iconImageUrl,
        'coverImageUrl': value.coverImageUrl,
        'primaryColorHex': value.primaryColorHex,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
    };
}

