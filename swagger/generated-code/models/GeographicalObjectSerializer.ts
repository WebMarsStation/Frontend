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
 * @interface GeographicalObjectSerializer
 */
export interface GeographicalObjectSerializer {
    /**
     * 
     * @type {number}
     * @memberof GeographicalObjectSerializer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GeographicalObjectSerializer
     */
    feature: string;
    /**
     * 
     * @type {string}
     * @memberof GeographicalObjectSerializer
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof GeographicalObjectSerializer
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof GeographicalObjectSerializer
     */
    describe?: string;
    /**
     * 
     * @type {Blob}
     * @memberof GeographicalObjectSerializer
     */
    photo?: Blob;
    /**
     * 
     * @type {boolean}
     * @memberof GeographicalObjectSerializer
     */
    status: boolean;
}

/**
 * Check if a given object implements the GeographicalObjectSerializer interface.
 */
export function instanceOfGeographicalObjectSerializer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function GeographicalObjectSerializerFromJSON(json: any): GeographicalObjectSerializer {
    return GeographicalObjectSerializerFromJSONTyped(json, false);
}

export function GeographicalObjectSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeographicalObjectSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'feature': json['feature'],
        'type': json['type'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'describe': !exists(json, 'describe') ? undefined : json['describe'],
        'photo': !exists(json, 'photo') ? undefined : json['photo'],
        'status': json['status'],
    };
}

export function GeographicalObjectSerializerToJSON(value?: GeographicalObjectSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'feature': value.feature,
        'type': value.type,
        'size': value.size,
        'describe': value.describe,
        'photo': value.photo,
        'status': value.status,
    };
}

