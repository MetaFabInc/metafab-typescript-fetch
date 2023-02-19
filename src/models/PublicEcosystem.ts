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
 * @interface PublicEcosystem
 */
export interface PublicEcosystem {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    publishedKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    iconImageUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    coverImageUrl?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    primaryColorHex?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicEcosystem
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the PublicEcosystem interface.
 */
export function instanceOfPublicEcosystem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicEcosystemFromJSON(json: any): PublicEcosystem {
    return PublicEcosystemFromJSONTyped(json, false);
}

export function PublicEcosystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicEcosystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'publishedKey': !exists(json, 'publishedKey') ? undefined : json['publishedKey'],
        'iconImageUrl': !exists(json, 'iconImageUrl') ? undefined : json['iconImageUrl'],
        'coverImageUrl': !exists(json, 'coverImageUrl') ? undefined : json['coverImageUrl'],
        'primaryColorHex': !exists(json, 'primaryColorHex') ? undefined : json['primaryColorHex'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function PublicEcosystemToJSON(value?: PublicEcosystem | null): any {
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
        'iconImageUrl': value.iconImageUrl,
        'coverImageUrl': value.coverImageUrl,
        'primaryColorHex': value.primaryColorHex,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
    };
}
