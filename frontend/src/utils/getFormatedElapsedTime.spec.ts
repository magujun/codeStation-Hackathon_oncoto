import { getFormatedElapsedTime } from './getFormatedElapsedTime';
import { mocked } from 'ts-jest/utils';
import { differenceInSeconds } from 'date-fns';

jest.mock('date-fns');

describe('getFormatedElapsedTime utility function', () => {
  it('should return a formated string with the elapsed time', () => {
    const mockedDifferenceInSeconds = mocked(differenceInSeconds);
    mockedDifferenceInSeconds.mockReturnValueOnce(90);

    const fakeStartDate = new Date(2021, 5, 17, 0, 0, 0);
    const fakeEndDate = new Date(2021, 5, 17, 0, 1, 5);

    const elapsedTime = getFormatedElapsedTime(fakeStartDate, fakeEndDate);

    expect(elapsedTime).toBe('01:30');
  })
})
