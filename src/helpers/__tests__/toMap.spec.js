import { toMap } from '../toMap';

describe('toMap', () => {
  it('should convert an array to a map', () => {
    // given
    const input = [
      {
        id: '1',
        value: 'random 1',
      },
      {
        id: '2',
        value: 'random 1',
      },
    ];
    // when
    const actual = toMap(input, (element) => element.id);
    // then
    const expected = {
      1: {
        id: '1',
        value: 'random 1',
      },
      2: {
        id: '2',
        value: 'random 1',
      },
    };
    expect(actual).toStrictEqual(expected);
  });
});
