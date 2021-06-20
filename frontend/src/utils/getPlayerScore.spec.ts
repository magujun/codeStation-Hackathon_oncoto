import { getPlayerScore } from './getPlayerScore';

describe('getPlayerScore utility function', () => {
  it('should return a score greater than 800', () => {

    const playerNick = getPlayerScore(0, 'easy',10);

    expect(playerNick).toBeGreaterThan(800);
  })

  it('should return a zero score when provide invalid distance', () => {

    const playerNick = getPlayerScore(-1, 'easy',10);

    expect(playerNick).toBe(0);
  })
});

