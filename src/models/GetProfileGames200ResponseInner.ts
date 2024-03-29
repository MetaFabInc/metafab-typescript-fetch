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
import type { PublicPlayer } from './PublicPlayer';
import {
    PublicPlayerFromJSON,
    PublicPlayerFromJSONTyped,
    PublicPlayerToJSON,
} from './PublicPlayer';

/**
 * 
 * @export
 * @interface GetProfileGames200ResponseInner
 */
export interface GetProfileGames200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    publishedKey?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    iconImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    coverImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    primaryColorHex?: string;
    /**
     * 
     * @type {string}
     * @memberof GetProfileGames200ResponseInner
     */
    createdAt?: string;
    /**
     * 
     * @type {Array<PublicPlayer>}
     * @memberof GetProfileGames200ResponseInner
     */
    players?: Array<PublicPlayer>;
}

/**
 * Check if a given object implements the GetProfileGames200ResponseInner interface.
 */
export function instanceOfGetProfileGames200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProfileGames200ResponseInnerFromJSON(json: any): GetProfileGames200ResponseInner {
    return GetProfileGames200ResponseInnerFromJSONTyped(json, false);
}

export function GetProfileGames200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileGames200ResponseInner {
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
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'players': !exists(json, 'players') ? undefined : ((json['players'] as Array<any>).map(PublicPlayerFromJSON)),
    };
}

export function GetProfileGames200ResponseInnerToJSON(value?: GetProfileGames200ResponseInner | null): any {
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
        'createdAt': value.createdAt,
        'players': value.players === undefined ? undefined : ((value.players as Array<any>).map(PublicPlayerToJSON)),
    };
}

