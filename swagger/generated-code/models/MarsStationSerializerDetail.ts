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
import type { EmployeeSerializer } from './EmployeeSerializer';
import {
    EmployeeSerializerFromJSON,
    EmployeeSerializerFromJSONTyped,
    EmployeeSerializerToJSON,
} from './EmployeeSerializer';
import type { GeographicalObjectSerializer } from './GeographicalObjectSerializer';
import {
    GeographicalObjectSerializerFromJSON,
    GeographicalObjectSerializerFromJSONTyped,
    GeographicalObjectSerializerToJSON,
} from './GeographicalObjectSerializer';
import type { LocationSerializer } from './LocationSerializer';
import {
    LocationSerializerFromJSON,
    LocationSerializerFromJSONTyped,
    LocationSerializerToJSON,
} from './LocationSerializer';
import type { TransportSerializer } from './TransportSerializer';
import {
    TransportSerializerFromJSON,
    TransportSerializerFromJSONTyped,
    TransportSerializerToJSON,
} from './TransportSerializer';

/**
 * 
 * @export
 * @interface MarsStationSerializerDetail
 */
export interface MarsStationSerializerDetail {
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializerDetail
     */
    typeStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializerDetail
     */
    dateCreate?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializerDetail
     */
    dateForm?: string;
    /**
     * 
     * @type {string}
     * @memberof MarsStationSerializerDetail
     */
    dateClose?: string;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    idEmployee?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    idModerator?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    idTransport?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    statusTask?: number;
    /**
     * 
     * @type {number}
     * @memberof MarsStationSerializerDetail
     */
    statusMission?: number;
    /**
     * 
     * @type {EmployeeSerializer}
     * @memberof MarsStationSerializerDetail
     */
    employee?: EmployeeSerializer;
    /**
     * 
     * @type {EmployeeSerializer}
     * @memberof MarsStationSerializerDetail
     */
    moderator?: EmployeeSerializer;
    /**
     * 
     * @type {TransportSerializer}
     * @memberof MarsStationSerializerDetail
     */
    transport?: TransportSerializer;
    /**
     * 
     * @type {Array<LocationSerializer>}
     * @memberof MarsStationSerializerDetail
     */
    location?: Array<LocationSerializer>;
    /**
     * 
     * @type {Array<GeographicalObjectSerializer>}
     * @memberof MarsStationSerializerDetail
     */
    geographicalObject?: Array<GeographicalObjectSerializer>;
}

/**
 * Check if a given object implements the MarsStationSerializerDetail interface.
 */
export function instanceOfMarsStationSerializerDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarsStationSerializerDetailFromJSON(json: any): MarsStationSerializerDetail {
    return MarsStationSerializerDetailFromJSONTyped(json, false);
}

export function MarsStationSerializerDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarsStationSerializerDetail {
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
        'employee': !exists(json, 'employee') ? undefined : EmployeeSerializerFromJSON(json['employee']),
        'moderator': !exists(json, 'moderator') ? undefined : EmployeeSerializerFromJSON(json['moderator']),
        'transport': !exists(json, 'transport') ? undefined : TransportSerializerFromJSON(json['transport']),
        'location': !exists(json, 'location') ? undefined : ((json['location'] as Array<any>).map(LocationSerializerFromJSON)),
        'geographicalObject': !exists(json, 'geographical_object') ? undefined : ((json['geographical_object'] as Array<any>).map(GeographicalObjectSerializerFromJSON)),
    };
}

export function MarsStationSerializerDetailToJSON(value?: MarsStationSerializerDetail | null): any {
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
        'employee': EmployeeSerializerToJSON(value.employee),
        'moderator': EmployeeSerializerToJSON(value.moderator),
        'transport': TransportSerializerToJSON(value.transport),
        'location': value.location === undefined ? undefined : ((value.location as Array<any>).map(LocationSerializerToJSON)),
        'geographical_object': value.geographicalObject === undefined ? undefined : ((value.geographicalObject as Array<any>).map(GeographicalObjectSerializerToJSON)),
    };
}

