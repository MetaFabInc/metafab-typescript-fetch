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
  CreateShop200Response,
  CreateShopRequest,
  GetShops200ResponseInner,
  SetShopOfferRequest,
  ShopOffer,
  TransactionModel,
  WithdrawFromShopRequest,
} from '../models';
import {
    CreateShop200ResponseFromJSON,
    CreateShop200ResponseToJSON,
    CreateShopRequestFromJSON,
    CreateShopRequestToJSON,
    GetShops200ResponseInnerFromJSON,
    GetShops200ResponseInnerToJSON,
    SetShopOfferRequestFromJSON,
    SetShopOfferRequestToJSON,
    ShopOfferFromJSON,
    ShopOfferToJSON,
    TransactionModelFromJSON,
    TransactionModelToJSON,
    WithdrawFromShopRequestFromJSON,
    WithdrawFromShopRequestToJSON,
} from '../models';

export interface CreateShopOperationRequest {
    xAuthorization: string;
    xWalletDecryptKey: string;
    createShopRequest: CreateShopRequest;
}

export interface GetShopOfferRequest {
    shopId: string;
    shopOfferId: string;
}

export interface GetShopOffersRequest {
    shopId: string;
}

export interface GetShopsRequest {
    xGameKey: string;
}

export interface RemoveShopOfferRequest {
    shopId: string;
    shopOfferId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
}

export interface SetShopOfferOperationRequest {
    shopId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
    setShopOfferRequest: SetShopOfferRequest;
}

export interface UseShopOfferRequest {
    shopId: string;
    shopOfferId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
}

export interface WithdrawFromShopOperationRequest {
    shopId: string;
    xAuthorization: string;
    xWalletDecryptKey: string;
    withdrawFromShopRequest: WithdrawFromShopRequest;
}

/**
 * 
 */
export class ShopsApi extends runtime.BaseAPI {

    /**
     * Creates a new game shop and deploys a shop contract on behalf of the authenticating game\'s primary wallet. The deployed shop contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, a shop allows you to create shop offers for some set of item(s) to another set of item(s) or any mix of currency. Shops completely support gasless player transactions.
     * Create shop
     */
    async createShopRaw(requestParameters: CreateShopOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateShop200Response>> {
        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling createShop.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling createShop.');
        }

        if (requestParameters.createShopRequest === null || requestParameters.createShopRequest === undefined) {
            throw new runtime.RequiredError('createShopRequest','Required parameter requestParameters.createShopRequest was null or undefined when calling createShop.');
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
            path: `/v1/shops`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateShopRequestToJSON(requestParameters.createShopRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateShop200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new game shop and deploys a shop contract on behalf of the authenticating game\'s primary wallet. The deployed shop contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, a shop allows you to create shop offers for some set of item(s) to another set of item(s) or any mix of currency. Shops completely support gasless player transactions.
     * Create shop
     */
    async createShop(requestParameters: CreateShopOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateShop200Response> {
        const response = await this.createShopRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a shop offer object for the provided shopOfferId.
     * Get shop offer
     */
    async getShopOfferRaw(requestParameters: GetShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShopOffer>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling getShopOffer.');
        }

        if (requestParameters.shopOfferId === null || requestParameters.shopOfferId === undefined) {
            throw new runtime.RequiredError('shopOfferId','Required parameter requestParameters.shopOfferId was null or undefined when calling getShopOffer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/shops/{shopId}/offers/{shopOfferId}`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))).replace(`{${"shopOfferId"}}`, encodeURIComponent(String(requestParameters.shopOfferId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShopOfferFromJSON(jsonValue));
    }

    /**
     * Returns a shop offer object for the provided shopOfferId.
     * Get shop offer
     */
    async getShopOffer(requestParameters: GetShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShopOffer> {
        const response = await this.getShopOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all shop offers as an array of shop offer objects.
     * Get shop offers
     */
    async getShopOffersRaw(requestParameters: GetShopOffersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ShopOffer>>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling getShopOffers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/shops/{shopId}/offers`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShopOfferFromJSON));
    }

    /**
     * Returns all shop offers as an array of shop offer objects.
     * Get shop offers
     */
    async getShopOffers(requestParameters: GetShopOffersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ShopOffer>> {
        const response = await this.getShopOffersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of active shops for the game associated with the provided `X-Game-Key`.
     * Get shops
     */
    async getShopsRaw(requestParameters: GetShopsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetShops200ResponseInner>>> {
        if (requestParameters.xGameKey === null || requestParameters.xGameKey === undefined) {
            throw new runtime.RequiredError('xGameKey','Required parameter requestParameters.xGameKey was null or undefined when calling getShops.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xGameKey !== undefined && requestParameters.xGameKey !== null) {
            headerParameters['X-Game-Key'] = String(requestParameters.xGameKey);
        }

        const response = await this.request({
            path: `/v1/shops`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetShops200ResponseInnerFromJSON));
    }

    /**
     * Returns an array of active shops for the game associated with the provided `X-Game-Key`.
     * Get shops
     */
    async getShops(requestParameters: GetShopsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetShops200ResponseInner>> {
        const response = await this.getShopsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes the provided offer by offerId from the provided shop. Removed offers can no longer be used.
     * Remove shop offer
     */
    async removeShopOfferRaw(requestParameters: RemoveShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling removeShopOffer.');
        }

        if (requestParameters.shopOfferId === null || requestParameters.shopOfferId === undefined) {
            throw new runtime.RequiredError('shopOfferId','Required parameter requestParameters.shopOfferId was null or undefined when calling removeShopOffer.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling removeShopOffer.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling removeShopOffer.');
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
            path: `/v1/shops/{shopId}/offers/{shopOfferId}`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))).replace(`{${"shopOfferId"}}`, encodeURIComponent(String(requestParameters.shopOfferId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Removes the provided offer by offerId from the provided shop. Removed offers can no longer be used.
     * Remove shop offer
     */
    async removeShopOffer(requestParameters: RemoveShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.removeShopOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets a new shop offer or updates an existing one for the provided id. Shop offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make a shop offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * Set shop offer
     */
    async setShopOfferRaw(requestParameters: SetShopOfferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling setShopOffer.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling setShopOffer.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling setShopOffer.');
        }

        if (requestParameters.setShopOfferRequest === null || requestParameters.setShopOfferRequest === undefined) {
            throw new runtime.RequiredError('setShopOfferRequest','Required parameter requestParameters.setShopOfferRequest was null or undefined when calling setShopOffer.');
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
            path: `/v1/shops/{shopId}/offers`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetShopOfferRequestToJSON(requestParameters.setShopOfferRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Sets a new shop offer or updates an existing one for the provided id. Shop offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make a shop offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * Set shop offer
     */
    async setShopOffer(requestParameters: SetShopOfferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.setShopOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uses a shop offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * Use shop offer
     */
    async useShopOfferRaw(requestParameters: UseShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling useShopOffer.');
        }

        if (requestParameters.shopOfferId === null || requestParameters.shopOfferId === undefined) {
            throw new runtime.RequiredError('shopOfferId','Required parameter requestParameters.shopOfferId was null or undefined when calling useShopOffer.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling useShopOffer.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling useShopOffer.');
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
            path: `/v1/shops/{shopId}/offers/{shopOfferId}/uses`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))).replace(`{${"shopOfferId"}}`, encodeURIComponent(String(requestParameters.shopOfferId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Uses a shop offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * Use shop offer
     */
    async useShopOffer(requestParameters: UseShopOfferRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.useShopOfferRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Withdraws native token, currency or items from a shop. Whenever a shop offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the shop contract when the offer is used. These can be withdrawn to any other address.
     * Withdraw from shop
     */
    async withdrawFromShopRaw(requestParameters: WithdrawFromShopOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.shopId === null || requestParameters.shopId === undefined) {
            throw new runtime.RequiredError('shopId','Required parameter requestParameters.shopId was null or undefined when calling withdrawFromShop.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling withdrawFromShop.');
        }

        if (requestParameters.xWalletDecryptKey === null || requestParameters.xWalletDecryptKey === undefined) {
            throw new runtime.RequiredError('xWalletDecryptKey','Required parameter requestParameters.xWalletDecryptKey was null or undefined when calling withdrawFromShop.');
        }

        if (requestParameters.withdrawFromShopRequest === null || requestParameters.withdrawFromShopRequest === undefined) {
            throw new runtime.RequiredError('withdrawFromShopRequest','Required parameter requestParameters.withdrawFromShopRequest was null or undefined when calling withdrawFromShop.');
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
            path: `/v1/shops/{shopId}/withdrawals`.replace(`{${"shopId"}}`, encodeURIComponent(String(requestParameters.shopId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WithdrawFromShopRequestToJSON(requestParameters.withdrawFromShopRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * Withdraws native token, currency or items from a shop. Whenever a shop offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the shop contract when the offer is used. These can be withdrawn to any other address.
     * Withdraw from shop
     */
    async withdrawFromShop(requestParameters: WithdrawFromShopOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.withdrawFromShopRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
