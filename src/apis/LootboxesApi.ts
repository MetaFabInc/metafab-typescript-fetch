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


import * as runtime from '../runtime';
import type {
  CreateLootboxManager200Response,
  CreateLootboxManagerRequest,
  GetLootboxManagers200ResponseInner,
  LootboxManagerLootbox,
  SetLootboxManagerLootboxRequest,
  TransactionModel,
} from '../models';
import {
    CreateLootboxManager200ResponseFromJSON,
    CreateLootboxManager200ResponseToJSON,
    CreateLootboxManagerRequestFromJSON,
    CreateLootboxManagerRequestToJSON,
    GetLootboxManagers200ResponseInnerFromJSON,
    GetLootboxManagers200ResponseInnerToJSON,
    LootboxManagerLootboxFromJSON,
    LootboxManagerLootboxToJSON,
    SetLootboxManagerLootboxRequestFromJSON,
    SetLootboxManagerLootboxRequestToJSON,
    TransactionModelFromJSON,
    TransactionModelToJSON,
} from '../models';

export interface CreateLootboxManagerOperationRequest {
    xAuthorization: string;
    xWalletDecryptKey: string;
    createLootboxManagerRequest: CreateLootboxManagerRequest;
}

export interface GetLootboxManagerLootboxRequest {
    lootboxManagerId: string;
    lootboxManagerLootboxId: string;
}

export interface GetLootboxManagerLootboxesRequest {
    lootboxManagerId: string;
}

export interface GetLootboxManagersRequest {
    xGameKey: string;
}

export interface OpenLootboxManagerLootboxRequest {
    lootboxManagerId: string;
    lootboxManagerLootboxId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
}

export interface RemoveLootboxManagerLootboxRequest {
    lootboxManagerId: string;
    lootboxManagerLootboxId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
}

export interface SetLootboxManagerLootboxOperationRequest {
    lootboxManagerId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
    setLootboxManagerLootboxRequest: SetLootboxManagerLootboxRequest;
}

/**
 * 
 */
export class LootboxesApi extends runtime.BaseAPI {

    /**
     * Creates a new game lootbox manager and deploys a lootbox manager contract on behalf of the authenticating game\'s primary wallet. The deployed lootbox manager contract allows you to create lootbox behavior for existing items. For example, you can define item id(s) from one of your item collections as the requirement(s) to open a \"lootbox\". The required item(s) would be burned from the interacting player\'s wallet and the player would receive item(s) from a weighted randomized set of possible items the lootbox can contain.
     * Create lootbox manager
     */
    async createLootboxManagerRaw(requestParameters: CreateLootboxManagerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateLootboxManager200Response>> {
        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling createLootboxManager.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling createLootboxManager.');
        }

        if (requestParameters.createLootboxManagerRequest === null || requestParameters.createLootboxManagerRequest === undefined) {
            throw new runtime.RequiredError('createLootboxManagerRequest','Required parameter requestParameters.createLootboxManagerRequest was null or undefined when calling createLootboxManager.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        if (requestParameters.xWalletDecryptKey !== undefined && requestParameters.xWalletDecryptKey !== null) {
            headerParameters['X-Wallet-Decrypt-Key'] = String(requestParameters.xWalletDecryptKey);
        }

        const response = await this.request({
            path: `/v1/lootboxManagers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLootboxManagerRequestToJSON(requestParameters.createLootboxManagerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateLootboxManager200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new game lootbox manager and deploys a lootbox manager contract on behalf of the authenticating game\'s primary wallet. The deployed lootbox manager contract allows you to create lootbox behavior for existing items. For example, you can define item id(s) from one of your item collections as the requirement(s) to open a \"lootbox\". The required item(s) would be burned from the interacting player\'s wallet and the player would receive item(s) from a weighted randomized set of possible items the lootbox can contain.
     * Create lootbox manager
     */
    async createLootboxManager(requestParameters: CreateLootboxManagerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateLootboxManager200Response> {
        const response = await this.createLootboxManagerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a lootbox manager lootbox object for the provided lootboxManagerLootboxId.
     * Get lootbox manager lootbox
     */
    async getLootboxManagerLootboxRaw(requestParameters: GetLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LootboxManagerLootbox>> {
        if (requestParameters.lootboxManagerId === null || requestParameters.lootboxManagerId === undefined) {
            throw new runtime.RequiredError('lootboxManagerId','Required parameter requestParameters.lootboxManagerId was null or undefined when calling getLootboxManagerLootbox.');
        }

        if (requestParameters.lootboxManagerLootboxId === null || requestParameters.lootboxManagerLootboxId === undefined) {
            throw new runtime.RequiredError('lootboxManagerLootboxId','Required parameter requestParameters.lootboxManagerLootboxId was null or undefined when calling getLootboxManagerLootbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}`.replace(`{${"lootboxManagerId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerId))).replace(`{${"lootboxManagerLootboxId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerLootboxId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LootboxManagerLootboxFromJSON(jsonValue));
    }

    /**
     * Returns a lootbox manager lootbox object for the provided lootboxManagerLootboxId.
     * Get lootbox manager lootbox
     */
    async getLootboxManagerLootbox(requestParameters: GetLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LootboxManagerLootbox> {
        const response = await this.getLootboxManagerLootboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all lootbox manager lootboxes as an array of lootbox objects.
     * Get lootbox manager lootboxes
     */
    async getLootboxManagerLootboxesRaw(requestParameters: GetLootboxManagerLootboxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LootboxManagerLootbox>>> {
        if (requestParameters.lootboxManagerId === null || requestParameters.lootboxManagerId === undefined) {
            throw new runtime.RequiredError('lootboxManagerId','Required parameter requestParameters.lootboxManagerId was null or undefined when calling getLootboxManagerLootboxes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/lootboxManagers/{lootboxManagerId}/lootboxes`.replace(`{${"lootboxManagerId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LootboxManagerLootboxFromJSON));
    }

    /**
     * Returns all lootbox manager lootboxes as an array of lootbox objects.
     * Get lootbox manager lootboxes
     */
    async getLootboxManagerLootboxes(requestParameters: GetLootboxManagerLootboxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LootboxManagerLootbox>> {
        const response = await this.getLootboxManagerLootboxesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of active lootbox managers for the game associated with the provided `X-Game-Key`.
     * Get lootbox managers
     */
    async getLootboxManagersRaw(requestParameters: GetLootboxManagersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetLootboxManagers200ResponseInner>>> {
        if (requestParameters.xGameKey === null || requestParameters.xGameKey === undefined) {
            throw new runtime.RequiredError('xGameKey','Required parameter requestParameters.xGameKey was null or undefined when calling getLootboxManagers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xGameKey !== undefined && requestParameters.xGameKey !== null) {
            headerParameters['X-Game-Key'] = String(requestParameters.xGameKey);
        }

        const response = await this.request({
            path: `/v1/lootboxManagers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetLootboxManagers200ResponseInnerFromJSON));
    }

    /**
     * Returns an array of active lootbox managers for the game associated with the provided `X-Game-Key`.
     * Get lootbox managers
     */
    async getLootboxManagers(requestParameters: GetLootboxManagersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetLootboxManagers200ResponseInner>> {
        const response = await this.getLootboxManagersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Opens a lootbox manager lootbox. The required input item(s) are burned from the wallet or player wallet opening the lootbox. The given output item(s) are given to the wallet or player wallet opening the lootbox.
     * Open lootbox manager lootbox
     */
    async openLootboxManagerLootboxRaw(requestParameters: OpenLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionModel>>> {
        if (requestParameters.lootboxManagerId === null || requestParameters.lootboxManagerId === undefined) {
            throw new runtime.RequiredError('lootboxManagerId','Required parameter requestParameters.lootboxManagerId was null or undefined when calling openLootboxManagerLootbox.');
        }

        if (requestParameters.lootboxManagerLootboxId === null || requestParameters.lootboxManagerLootboxId === undefined) {
            throw new runtime.RequiredError('lootboxManagerLootboxId','Required parameter requestParameters.lootboxManagerLootboxId was null or undefined when calling openLootboxManagerLootbox.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling openLootboxManagerLootbox.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling openLootboxManagerLootbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        if (requestParameters.xWalletDecryptKey !== undefined && requestParameters.xWalletDecryptKey !== null) {
            headerParameters['X-Wallet-Decrypt-Key'] = String(requestParameters.xWalletDecryptKey);
        }

        const response = await this.request({
            path: `/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}/opens`.replace(`{${"lootboxManagerId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerId))).replace(`{${"lootboxManagerLootboxId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerLootboxId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionModelFromJSON));
    }

    /**
     * Opens a lootbox manager lootbox. The required input item(s) are burned from the wallet or player wallet opening the lootbox. The given output item(s) are given to the wallet or player wallet opening the lootbox.
     * Open lootbox manager lootbox
     */
    async openLootboxManagerLootbox(requestParameters: OpenLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionModel>> {
        const response = await this.openLootboxManagerLootboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes the provided lootbox by lootboxId from the provided lootbox manager. Removed lootboxes can no longer be used.
     * Remove lootbox manager lootbox
     */
    async removeLootboxManagerLootboxRaw(requestParameters: RemoveLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.lootboxManagerId === null || requestParameters.lootboxManagerId === undefined) {
            throw new runtime.RequiredError('lootboxManagerId','Required parameter requestParameters.lootboxManagerId was null or undefined when calling removeLootboxManagerLootbox.');
        }

        if (requestParameters.lootboxManagerLootboxId === null || requestParameters.lootboxManagerLootboxId === undefined) {
            throw new runtime.RequiredError('lootboxManagerLootboxId','Required parameter requestParameters.lootboxManagerLootboxId was null or undefined when calling removeLootboxManagerLootbox.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling removeLootboxManagerLootbox.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling removeLootboxManagerLootbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        if (requestParameters.xWalletDecryptKey !== undefined && requestParameters.xWalletDecryptKey !== null) {
            headerParameters['X-Wallet-Decrypt-Key'] = String(requestParameters.xWalletDecryptKey);
        }

        const response = await this.request({
            path: `/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}`.replace(`{${"lootboxManagerId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerId))).replace(`{${"lootboxManagerLootboxId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerLootboxId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Removes the provided lootbox by lootboxId from the provided lootbox manager. Removed lootboxes can no longer be used.
     * Remove lootbox manager lootbox
     */
    async removeLootboxManagerLootbox(requestParameters: RemoveLootboxManagerLootboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.removeLootboxManagerLootboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets a new lootbox manager lootbox or updates an existing one for the provided id. Lootboxes allow item(s) to be burned to receive a random set of possible item(s) based on probability weight.  Lootboxes can require any number of unique types of items and quantities to open a created lootbox type within the system. A common pattern with lootboxes is to create a lootbox item type within an item collection, and require it as the input item type.
     * Set lootbox manager lootbox
     */
    async setLootboxManagerLootboxRaw(requestParameters: SetLootboxManagerLootboxOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.lootboxManagerId === null || requestParameters.lootboxManagerId === undefined) {
            throw new runtime.RequiredError('lootboxManagerId','Required parameter requestParameters.lootboxManagerId was null or undefined when calling setLootboxManagerLootbox.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling setLootboxManagerLootbox.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling setLootboxManagerLootbox.');
        }

        if (requestParameters.setLootboxManagerLootboxRequest === null || requestParameters.setLootboxManagerLootboxRequest === undefined) {
            throw new runtime.RequiredError('setLootboxManagerLootboxRequest','Required parameter requestParameters.setLootboxManagerLootboxRequest was null or undefined when calling setLootboxManagerLootbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        if (requestParameters.xWalletDecryptKey !== undefined && requestParameters.xWalletDecryptKey !== null) {
            headerParameters['X-Wallet-Decrypt-Key'] = String(requestParameters.xWalletDecryptKey);
        }

        const response = await this.request({
            path: `/v1/lootboxManagers/{lootboxManagerId}/lootboxes`.replace(`{${"lootboxManagerId"}}`, encodeURIComponent(String(requestParameters.lootboxManagerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetLootboxManagerLootboxRequestToJSON(requestParameters.setLootboxManagerLootboxRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Sets a new lootbox manager lootbox or updates an existing one for the provided id. Lootboxes allow item(s) to be burned to receive a random set of possible item(s) based on probability weight.  Lootboxes can require any number of unique types of items and quantities to open a created lootbox type within the system. A common pattern with lootboxes is to create a lootbox item type within an item collection, and require it as the input item type.
     * Set lootbox manager lootbox
     */
    async setLootboxManagerLootbox(requestParameters: SetLootboxManagerLootboxOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.setLootboxManagerLootboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
