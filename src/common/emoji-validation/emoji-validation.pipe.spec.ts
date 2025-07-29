import { EmojiValidationPipe } from './emoji-validation.pipe';
import { BadRequestException } from '@nestjs/common';

describe('EmojiValidationPipe', () => {
  let pipe: EmojiValidationPipe;

  beforeEach(() => {
    pipe = new EmojiValidationPipe();
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  describe('transform', () => {
    it('should return the value if it is a valid number within range', () => {
      expect(pipe.transform(5)).toBe(5);
      expect(pipe.transform(10)).toBe(10);
    });

    it('should throw BadRequestException if value is less than 0', () => {
      expect(() => pipe.transform(-1)).toThrow(BadRequestException);
    });

    it('should throw BadRequestException if value is greater than 10', () => {
      expect(() => pipe.transform(12)).toThrow(BadRequestException);
    });

    it('should throw BadRequestException if value is not a number', () => {
      expect(() => pipe.transform('abc')).toThrow(BadRequestException);
    });

    it('should return undefined if value is null or undefined', () => {
      expect(pipe.transform(undefined)).toBeUndefined();
      expect(pipe.transform(null)).toBeUndefined();
    });

    it('should throw BadRequestException if value is NaN', () => {
      expect(() => pipe.transform(NaN)).toThrow(BadRequestException);
    });
  });
});
