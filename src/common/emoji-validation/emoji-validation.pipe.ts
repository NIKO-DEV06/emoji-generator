import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value === null || value === undefined) {
      return undefined;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue) || numericValue < 1 || numericValue > 10) {
      throw new BadRequestException(
        'Invalid index: must be a non-negative from 1 to 10',
      );
    }

    console.log(`EmojiValidationPipe validation passed`);
    return numericValue;
  }
}
