import IAirportInformation from '@/app/api/pilot/airport/module/interfaces/IAirportInformation';

export default interface STakeoffInformationsDTO {
     depICAO: string;
     arrICAO: string;
     depAirportInformation: IAirportInformation;
     arrAirportInformation: IAirportInformation;
}
