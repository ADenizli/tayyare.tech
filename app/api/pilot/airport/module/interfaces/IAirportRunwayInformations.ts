export interface IAirportRunwayInformations {
     id: number;
     airport_ref: number;
     airport_ident: string;
     length_ft: number;
     width_ft: number;
     surface: string;
     lighted: boolean;
     closed: boolean;
     le_ident: string;
     le_latitude_deg: number;
     le_longitude_deg: number;
     le_elevation_ft: number;
     le_heading_degT: number;
     le_displaced_threshold_ft: number;
     he_ident: string;
     he_latitude_deg: number;
     he_longitude_deg: number;
     he_elevation_ft: number;
     he_heading_degT: number;
     he_displaced_threshold_ft: number;
}

export interface UARunway {
     run_apt: string;
     run_ident: string;
     run_lat: number;
     run_log: number;
     run_elv: number;
     run_hdg: number;
     run_lng: number;
     run_wid: number;
}
