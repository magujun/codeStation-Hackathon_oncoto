import { getPlayerId } from './getPlayerId';

describe('getPlayerId utility function', () => {
  it('should return the playerId', () => {

    const playerId = getPlayerId('test@gmail.com', 'Google');

    expect(playerId).toBe('test');
  })
})
