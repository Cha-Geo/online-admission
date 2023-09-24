/* eslint-disable @typescript-eslint/ban-types */
// pipes/validation.pipe.ts

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DtoValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Validation failed: No data submitted');
    }

    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation failed',
        this.buildError(errors),
      );
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private buildError(errors) {
    const result = {};
    errors.forEach((error) => {
      const key = error.property;
      Object.entries(error.constraints).forEach(
        ([constraintKey, constraint]) => {
          result[key + constraintKey] = `${constraint}`;
        },
      );
    });
    return result;
  }
}
