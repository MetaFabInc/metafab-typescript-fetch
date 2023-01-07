/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TransactionModel,
  WalletModel,
} from '../models';
import {
    TransactionModelFromJSON,
    TransactionModelToJSON,
    WalletModelFromJSON,
    WalletModelToJSON,
} from '../models';

export interface GetWalletRequest {
    walletId: string;
}

export interface GetWalletBalancesRequest {
    walletId: string;
}

export interface GetWalletTransactionsRequest {
    walletId: string;
}

/**
 * 
 */
export class WalletsApi extends runtime.BaseAPI {

    /**
     * Returns a wallet object for the provided walletId.
     * Get wallet
     */
    async getWalletRaw(requestParameters: GetWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalletModel>> {
        if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
            throw new runtime.RequiredError('walletId','Required parameter requestParameters.walletId was null or undefined when calling getWallet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/wallets/{walletId}`.replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalletModelFromJSON(jsonValue));
    }

    /**
     * Returns a wallet object for the provided walletId.
     * Get wallet
     */
    async getWallet(requestParameters: GetWalletRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalletModel> {
        const response = await this.getWalletRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the current native token balance for all chains supported by MetaFab for the provided walletId. This includes balances like Eth, Matic and other native tokens from chains MetaFab supports.
     * Get wallet balances
     */
    async getWalletBalancesRaw(requestParameters: GetWalletBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: number; }>> {
        if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
            throw new runtime.RequiredError('walletId','Required parameter requestParameters.walletId was null or undefined when calling getWalletBalances.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/wallets/{walletId}/balances`.replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns the current native token balance for all chains supported by MetaFab for the provided walletId. This includes balances like Eth, Matic and other native tokens from chains MetaFab supports.
     * Get wallet balances
     */
    async getWalletBalances(requestParameters: GetWalletBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: number; }> {
        const response = await this.getWalletBalancesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of MetaFab initiated transactions performed by the provided walletId. Transactions returned are ordered chronologically from newest to oldest.
     * Get wallet transactions
     */
    async getWalletTransactionsRaw(requestParameters: GetWalletTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TransactionModel>>> {
        if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
            throw new runtime.RequiredError('walletId','Required parameter requestParameters.walletId was null or undefined when calling getWalletTransactions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/wallets/{walletId}/transactions`.replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TransactionModelFromJSON));
    }

    /**
     * Returns an array of MetaFab initiated transactions performed by the provided walletId. Transactions returned are ordered chronologically from newest to oldest.
     * Get wallet transactions
     */
    async getWalletTransactions(requestParameters: GetWalletTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TransactionModel>> {
        const response = await this.getWalletTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
