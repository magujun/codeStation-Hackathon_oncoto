import { getFormatedTime } from './getFormatedTime';

describe('getFormatedTime utility function', () => {
  it('should return a formated string with the elapsed time', () => {

    const elapsedTime = getFormatedTime(60);

    expect(elapsedTime).toBe('01:00');
  })
})
