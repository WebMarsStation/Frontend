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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AsyncResultInput
 */
export interface AsyncResultInput {
    /**
     * 
     * @type {string}
     * @memberof AsyncResultInput
     */
    token: string;
    /**
     * 
     * @type {number}
     * @memberof AsyncResultInput
     */
    idDraft: number;
    /**
     * 
     * @type {string}
     * @memberof AsyncResultInput
     */
    statusMission: string;
}

/**
 * Check if a given object implements the AsyncResultInput interface.
 */
export function instanceOfAsyncResultInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "idDraft" in value;
    isInstance = isInstance && "statusMission" in value;

    return isInstance;
}

export function AsyncResultInputFromJSON(json: any): AsyncResultInput {
    return AsyncResultInputFromJSONTyped(json, false);
}

export function AsyncResultInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsyncResultInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
        'idDraft': json['id_draft'],
        'statusMission': json['status_mission'],
    };
}

export function AsyncResultInputToJSON(value?: AsyncResultInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'id_draft': value.idDraft,
        'status_mission': value.statusMission,
    };
}

