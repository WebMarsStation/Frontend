/* tslint:disable */
/* eslint-disable */
/**
 * Географические объекты
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200Response,
  ApiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest,
  ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200Response,
} from '../models/index';
import {
    ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200ResponseFromJSON,
    ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200ResponseToJSON,
    ApiLocationIdLocationMarsStationIdMarsStationUpdatePutRequestFromJSON,
    ApiLocationIdLocationMarsStationIdMarsStationUpdatePutRequestToJSON,
    ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200ResponseFromJSON,
    ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200ResponseToJSON,
} from '../models/index';

export interface ApiLocationIdLocationMarsStationIdMarsStationUpdatePutOperationRequest {
    idLocation: number;
    idMarsStation: number;
    authorization: string;
    apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest: ApiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest;
}

export interface ApiLocationIdLocationMarsStationPkMarsStationDeleteDeleteRequest {
    idLocation: number;
    pkMarsStation: number;
    authorization: string;
}

/**
 * 
 */
export class LocationApi extends runtime.BaseAPI {

    /**
     * Обновляет информацию о марсианской станции по ID
     */
    async apiLocationIdLocationMarsStationIdMarsStationUpdatePutRaw(requestParameters: ApiLocationIdLocationMarsStationIdMarsStationUpdatePutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200Response>> {
        if (requestParameters.idLocation === null || requestParameters.idLocation === undefined) {
            throw new runtime.RequiredError('idLocation','Required parameter requestParameters.idLocation was null or undefined when calling apiLocationIdLocationMarsStationIdMarsStationUpdatePut.');
        }

        if (requestParameters.idMarsStation === null || requestParameters.idMarsStation === undefined) {
            throw new runtime.RequiredError('idMarsStation','Required parameter requestParameters.idMarsStation was null or undefined when calling apiLocationIdLocationMarsStationIdMarsStationUpdatePut.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling apiLocationIdLocationMarsStationIdMarsStationUpdatePut.');
        }

        if (requestParameters.apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest === null || requestParameters.apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest === undefined) {
            throw new runtime.RequiredError('apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest','Required parameter requestParameters.apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest was null or undefined when calling apiLocationIdLocationMarsStationIdMarsStationUpdatePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/api/location/{id_location}/mars_station/{id_mars_station}/update/`.replace(`{${"id_location"}}`, encodeURIComponent(String(requestParameters.idLocation))).replace(`{${"id_mars_station"}}`, encodeURIComponent(String(requestParameters.idMarsStation))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ApiLocationIdLocationMarsStationIdMarsStationUpdatePutRequestToJSON(requestParameters.apiLocationIdLocationMarsStationIdMarsStationUpdatePutRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200ResponseFromJSON(jsonValue));
    }

    /**
     * Обновляет информацию о марсианской станции по ID
     */
    async apiLocationIdLocationMarsStationIdMarsStationUpdatePut(requestParameters: ApiLocationIdLocationMarsStationIdMarsStationUpdatePutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiLocationIdLocationMarsStationIdMarsStationUpdatePut200Response> {
        const response = await this.apiLocationIdLocationMarsStationIdMarsStationUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Удаляет марсианскую станцию по ID
     */
    async apiLocationIdLocationMarsStationPkMarsStationDeleteDeleteRaw(requestParameters: ApiLocationIdLocationMarsStationPkMarsStationDeleteDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200Response>> {
        if (requestParameters.idLocation === null || requestParameters.idLocation === undefined) {
            throw new runtime.RequiredError('idLocation','Required parameter requestParameters.idLocation was null or undefined when calling apiLocationIdLocationMarsStationPkMarsStationDeleteDelete.');
        }

        if (requestParameters.pkMarsStation === null || requestParameters.pkMarsStation === undefined) {
            throw new runtime.RequiredError('pkMarsStation','Required parameter requestParameters.pkMarsStation was null or undefined when calling apiLocationIdLocationMarsStationPkMarsStationDeleteDelete.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling apiLocationIdLocationMarsStationPkMarsStationDeleteDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/api/location/{id_location}/mars_station/{pk_mars_station}/delete/`.replace(`{${"id_location"}}`, encodeURIComponent(String(requestParameters.idLocation))).replace(`{${"pk_mars_station"}}`, encodeURIComponent(String(requestParameters.pkMarsStation))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Удаляет марсианскую станцию по ID
     */
    async apiLocationIdLocationMarsStationPkMarsStationDeleteDelete(requestParameters: ApiLocationIdLocationMarsStationPkMarsStationDeleteDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiLocationIdLocationMarsStationPkMarsStationDeleteDelete200Response> {
        const response = await this.apiLocationIdLocationMarsStationPkMarsStationDeleteDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
