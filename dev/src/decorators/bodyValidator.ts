import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
