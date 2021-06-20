import { getLevelTime } from './getLevelTime';

describe('getLevelTime utility function', () => {
  it('should return the time for easy level', () => {

    const elapsedTime = getLevelTime('easy');

    expect(elapsedTime).toBe(5 * 1000 * 60);
  })
  it('should return the time for easy medium', () => {

    const elapsedTime = getLevelTime('medium');

    expect(elapsedTime).toBe(3 * 1000 * 60);
  })
  it('should return the time for easy hard', () => {

    const elapsedTime = getLevelTime('hard');

    expect(elapsedTime).toBe(1 * 1000 * 60);
  })
})
