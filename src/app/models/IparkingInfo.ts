export interface IparkingInfo {
  id?: number;
  vehicleLicenseNumber: number;
  vehicleType: string;
  vehicleOwnerName: string;
  vehicleOwnerPhone: string;
  status: boolean;
  carOwnerAddress: string;
  carEntryTime: string;
  carExitTime: string;
  parkingCharge: number;
}
