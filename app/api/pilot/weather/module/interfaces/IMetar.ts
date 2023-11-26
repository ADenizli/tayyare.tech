export interface IMetarCloud {
     code: string;
     text: string;
}

export interface IMetarDewpoint {
     celsius: number;
     fahrenheit: number;
}

export interface IMetarElevation {
     feet: number;
     meters: number;
}

export interface IMetarHumidity {
     percent: number;
}

export interface IMetarStationGeometry {
     coordinates: [number, number];
     type: string;
}

export interface IMetarStation {
     geometry: IMetarStationGeometry;
     location: string;
     name: string;
     type: string;
}

export interface IMetarTemperature {
     celsius: number;
     fahrenheit: number;
}

export interface IMetarVisibility {
     miles: string;
     miles_float: number;
     meters: string;
     meters_float: number;
}

export interface IMetarWind {
     degrees: number;
     speed_kph: number;
     speed_kts: number;
     speed_mph: number;
     speed_mps: number;
}

export interface IMetarData {
     icao: string;
     barometer: {
          hg: number;
          hpa: number;
          kpa: number;
          mb: number;
     };
     clouds: IMetarCloud[];
     dewpoint: IMetarDewpoint;
     elevation: IMetarElevation;
     flight_category: string;
     humidity: IMetarHumidity;
     observed: string;
     station: IMetarStation;
     temperature: IMetarTemperature;
     raw_text: string;
     visibility: IMetarVisibility;
     wind: IMetarWind;
}

export interface IFetchedMetar {
     results: number;
     data: IMetarData[];
}
