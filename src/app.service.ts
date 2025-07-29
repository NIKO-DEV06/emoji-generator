import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji(index?: number): string {
    const emojis = this.getEmojis();

    if (index === undefined) {
      index = Math.floor(Math.random() * emojis.length) + 1;
    }

    if (index < 1 || index > emojis.length) {
      throw new BadRequestException(
        `Index out of range. Provide a number between 1 and ${emojis.length}`,
      );
    }

    return emojis[index - 1];
  }

  getEmojis() {
    return ['😀', '😂', '🌟', '🤔', '❤️', '🥳', '🌈', '🤯', '🙃', '🎉'];
  }
}
