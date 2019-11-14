/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2beta1ExternalMetricSource } from './v2beta1ExternalMetricSource';
import { V2beta1ObjectMetricSource } from './v2beta1ObjectMetricSource';
import { V2beta1PodsMetricSource } from './v2beta1PodsMetricSource';
import { V2beta1ResourceMetricSource } from './v2beta1ResourceMetricSource';

/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
export class V2beta1MetricSpec {
    'external'?: V2beta1ExternalMetricSource;
    'object'?: V2beta1ObjectMetricSource;
    'pods'?: V2beta1PodsMetricSource;
    'resource'?: V2beta1ResourceMetricSource;
    /**
    * type is the type of metric source.  It should be one of \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "external",
            "baseName": "external",
            "type": "V2beta1ExternalMetricSource"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2beta1ObjectMetricSource"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2beta1PodsMetricSource"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2beta1ResourceMetricSource"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta1MetricSpec.attributeTypeMap;
    }
}
