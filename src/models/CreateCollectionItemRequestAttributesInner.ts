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
 * @interface CreateCollectionItemRequestAttributesInner
 */
export interface CreateCollectionItemRequestAttributesInner {
    /**
     * 
     * @type {string}
     * @memberof CreateCollectionItemRequestAttributesInner
     */
    traitType: string;
    /**
     * 
     * @type {any}
     * @memberof CreateCollectionItemRequestAttributesInner
     */
    value: any | null;
}

/**
 * Check if a given object implements the CreateCollectionItemRequestAttributesInner interface.
 */
export function instanceOfCreateCollectionItemRequestAttributesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "traitType" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateCollectionItemRequestAttributesInnerFromJSON(json: any): CreateCollectionItemRequestAttributesInner {
    return CreateCollectionItemRequestAttributesInnerFromJSONTyped(json, false);
}

export function CreateCollectionItemRequestAttributesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollectionItemRequestAttributesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'traitType': json['trait_type'],
        'value': json['value'],
    };
}

export function CreateCollectionItemRequestAttributesInnerToJSON(value?: CreateCollectionItemRequestAttributesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trait_type': value.traitType,
        'value': value.value,
    };
}

