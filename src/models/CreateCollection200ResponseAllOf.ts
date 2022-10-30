/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateCollection200ResponseAllOfContract } from './CreateCollection200ResponseAllOfContract';
import {
    CreateCollection200ResponseAllOfContractFromJSON,
    CreateCollection200ResponseAllOfContractFromJSONTyped,
    CreateCollection200ResponseAllOfContractToJSON,
} from './CreateCollection200ResponseAllOfContract';

/**
 * 
 * @export
 * @interface CreateCollection200ResponseAllOf
 */
export interface CreateCollection200ResponseAllOf {
    /**
     * 
     * @type {CreateCollection200ResponseAllOfContract}
     * @memberof CreateCollection200ResponseAllOf
     */
    contract?: CreateCollection200ResponseAllOfContract;
}

/**
 * Check if a given object implements the CreateCollection200ResponseAllOf interface.
 */
export function instanceOfCreateCollection200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCollection200ResponseAllOfFromJSON(json: any): CreateCollection200ResponseAllOf {
    return CreateCollection200ResponseAllOfFromJSONTyped(json, false);
}

export function CreateCollection200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollection200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contract': !exists(json, 'contract') ? undefined : CreateCollection200ResponseAllOfContractFromJSON(json['contract']),
    };
}

export function CreateCollection200ResponseAllOfToJSON(value?: CreateCollection200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract': CreateCollection200ResponseAllOfContractToJSON(value.contract),
    };
}

