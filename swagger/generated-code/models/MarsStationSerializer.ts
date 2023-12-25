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
 * @interface MarsStationSerializer
 */
export interface MarsStationSerializer {
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    typeStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    dateCreate?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    dateForm?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    dateClose?: string;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializer
     */
    idEmployee?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializer
     */
    idModerator?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializer
     */
    idTransport?: number;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    statusTask?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializer
     */
    statusMission?: string;
}

/**
 * Check if a given object implements the MarsStationSerializer interface.
 */
export function instanceOfMarsStationSerializer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarsStationSerializerFromJSON(json: any): MarsStationSerializer {
    return MarsStationSerializerFromJSONTyped(json, false);
}

export function MarsStationSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarsStationSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'typeStatus': !exists(json, 'type_status') ? undefined : json['type_status'],
        'dateCreate': !exists(json, 'date_create') ? undefined : json['date_create'],
        'dateForm': !exists(json, 'date_form') ? undefined : json['date_form'],
        'dateClose': !exists(json, 'date_close') ? undefined : json['date_close'],
        'idEmployee': !exists(json, 'id_employee') ? undefined : json['id_employee'],
        'idModerator': !exists(json, 'id_moderator') ? undefined : json['id_moderator'],
        'idTransport': !exists(json, 'id_transport') ? undefined : json['id_transport'],
        'statusTask': !exists(json, 'status_task') ? undefined : json['status_task'],
        'statusMission': !exists(json, 'status_mission') ? undefined : json['status_mission'],
    };
}

export function MarsStationSerializerToJSON(value?: MarsStationSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type_status': value.typeStatus,
        'date_create': value.dateCreate,
        'date_form': value.dateForm,
        'date_close': value.dateClose,
        'id_employee': value.idEmployee,
        'id_moderator': value.idModerator,
        'id_transport': value.idTransport,
        'status_task': value.statusTask,
        'status_mission': value.statusMission,
    };
}

