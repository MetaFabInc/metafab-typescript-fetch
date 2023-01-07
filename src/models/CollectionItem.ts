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
 * @interface CollectionItem
 */
export interface CollectionItem {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionItem
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionItem
     */
    image?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionItem
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionItem
     */
    description?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionItem
     */
    externalUrl?: string;
    /**
     * This field has not had a description added.
     * @type {Array<object>}
     * @memberof CollectionItem
     */
    attributes?: Array<object>;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof CollectionItem
     */
    data?: object;
}

/**
 * Check if a given object implements the CollectionItem interface.
 */
export function instanceOfCollectionItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionItemFromJSON(json: any): CollectionItem {
    return CollectionItemFromJSONTyped(json, false);
}

export function CollectionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'externalUrl': !exists(json, 'externalUrl') ? undefined : json['externalUrl'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CollectionItemToJSON(value?: CollectionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'image': value.image,
        'name': value.name,
        'description': value.description,
        'externalUrl': value.externalUrl,
        'attributes': value.attributes,
        'data': value.data,
    };
}

