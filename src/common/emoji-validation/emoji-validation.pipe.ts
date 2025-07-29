import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value === null || value === undefined) {
      return undefined;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue) || numericValue < 0 || numericValue > 10) {
      throw new BadRequestException(
        'Invalid index: must be a non-negative number between 0 and 10',
      );
    }

    console.log(`EmojiValidationPipe validation passed`);
    return numericValue;
  }
}
