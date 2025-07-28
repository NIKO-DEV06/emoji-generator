import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return;
    }

    if (isNaN(value) || value < 0 || value > 11) {
      throw new BadRequestException(
        'Invalid index: must be a non-negative number between 0 and 11',
      );
    }
    console.log(`EmojiValidationPipe validation passed`);
    return value;
  }
}
