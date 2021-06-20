import { getDistanceBetweenTwoPoints } from './getDistanceBetweenTwoPoints';
import { mocked } from 'ts-jest/utils';
import haversineDistance from "haversine-distance";

jest.mock('haversine-distance');

describe('getDistanceBetweenTwoPoints utility function', () => {
  it('should return the distance in meters when pass a valid lat and lng', () => {
    const mockedHaversineDistance = mocked(haversineDistance);
    mockedHaversineDistance.mockReturnValueOnce(1000);

    const distance = getDistanceBetweenTwoPoints({ lat: 1, lng: 1 }, { lat: 1, lng: 1 });

    expect(distance).toBe(1000);
  })

  it('should return the -1 when pass a invalid lat and lng', () => {
    const mockedHaversineDistance = mocked(haversineDistance);
    mockedHaversineDistance.mockReturnValueOnce(1000);

    const distance = getDistanceBetweenTwoPoints({ lat: 0, lng: 0 }, { lat: 0, lng: 0 });

    expect(distance).toBe(-1);
  })
})
