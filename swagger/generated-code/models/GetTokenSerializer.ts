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
import type { Employee } from './Employee';
import {
    EmployeeFromJSON,
    EmployeeFromJSONTyped,
    EmployeeToJSON,
} from './Employee';
import type { Users } from './Users';
import {
    UsersFromJSON,
    UsersFromJSONTyped,
    UsersToJSON,
} from './Users';

/**
 * 
 * @export
 * @interface GetTokenSerializer
 */
export interface GetTokenSerializer {
    /**
     * 
     * @type {Users}
     * @memberof GetTokenSerializer
     */
    user: Users;
    /**
     * 
     * @type {Employee}
     * @memberof GetTokenSerializer
     */
    employee: Employee;
    /**
     * 
     * @type {string}
     * @memberof GetTokenSerializer
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof GetTokenSerializer
     */
    accessToken: string;
}

/**
 * Check if a given object implements the GetTokenSerializer interface.
 */
export function instanceOfGetTokenSerializer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "employee" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "accessToken" in value;

    return isInstance;
}

export function GetTokenSerializerFromJSON(json: any): GetTokenSerializer {
    return GetTokenSerializerFromJSONTyped(json, false);
}

export function GetTokenSerializerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTokenSerializer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UsersFromJSON(json['user']),
        'employee': EmployeeFromJSON(json['employee']),
        'message': json['message'],
        'accessToken': json['access_token'],
    };
}

export function GetTokenSerializerToJSON(value?: GetTokenSerializer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UsersToJSON(value.user),
        'employee': EmployeeToJSON(value.employee),
        'message': value.message,
        'access_token': value.accessToken,
    };
}

