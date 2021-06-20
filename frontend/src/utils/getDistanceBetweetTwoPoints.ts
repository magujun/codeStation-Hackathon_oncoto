import haversineDistance from "haversine-distance";

export type LatLangData = {
  lat: number;
  lng: number;
};

export function getDistanceBetweetTwoPoints(
  origin: LatLangData,
  destination: LatLangData
): number {
  return origin?.lat && destination?.lat ? haversineDistance(origin, destination) : -1;
}
