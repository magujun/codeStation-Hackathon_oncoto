import { getPlayerNick } from './getPlayerNick';

describe('getPlayerNick utility function', () => {
  it('should return the player nick with one word', () => {

    const playerNick = getPlayerNick('Player');

    expect(playerNick).toBe('Player');
  })

  it('should return the player nick with name and last name', () => {

    const playerNick = getPlayerNick('Player Santos');

    expect(playerNick).toBe('Player S.');
  })

  it('should return the player nick with name and middle name', () => {

    const playerNick = getPlayerNick('Player Henrique Santos');

    expect(playerNick).toBe('Player H.');
  })

  it('should return the player nick with name and last name when is not a middle name', () => {

    const playerNick = getPlayerNick('Player dos Santos');

    expect(playerNick).toBe('Player S.');
  })
})
