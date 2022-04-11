interface LocationDataType {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
}

interface CurrentLocationDataType {
  lat: number;
  lng: number;
}
interface rideInfoDataType {
  destinationCoord: CurrentLocationDataType
  destinationName: string
  originCoord: CurrentLocationDataType
  originName: string
}

export type {LocationDataType, CurrentLocationDataType,rideInfoDataType}