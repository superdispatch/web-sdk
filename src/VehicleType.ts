import { toStartCase } from './internal/toStartCase';

export type VehicleType = typeof VEHICLE_TYPES[number];

export const VEHICLE_TYPES = [
  'sedan',
  '2_door_coupe',
  'suv',
  'pickup',
  '4_door_pickup',
  'van',
  'truck_daycab',
  'truck_sleeper',
  'motorcycle',
  'boat',
  'rv',
  'heavy_machinery',
  'freight',
  'livestock',
  'atv',
  'trailer_bumper_pull',
  'trailer_gooseneck',
  'trailer_5th_wheel',
  'other',
] as const;

export function isValidVehicleType(input: unknown): input is VehicleType {
  return VEHICLE_TYPES.includes(input as VehicleType);
}

/** @deprecated – use `VEHICLE_TYPES` */
export function listVehicleTypes(): readonly VehicleType[] {
  return VEHICLE_TYPES;
}

interface FormatVehicleTypeOptions {
  fallback?: string;
}

export function formatVehicleType(
  input: unknown,
  { fallback = 'Unknown' }: FormatVehicleTypeOptions = {},
): string {
  if (!isValidVehicleType(input)) return fallback;

  switch (input) {
    case '2_door_coupe':
      return 'Coupe (2 doors)';

    case 'pickup':
      return 'Pickup (2 doors)';
    case '4_door_pickup':
      return 'Pickup (4 doors)';

    case 'truck_daycab':
      return 'Truck (daycab)';
    case 'truck_sleeper':
      return 'Truck (with sleeper)';

    case 'trailer_bumper_pull':
      return 'Trailer (Bumper Pull)';
    case 'trailer_gooseneck':
      return 'Trailer (Gooseneck)';
    case 'trailer_5th_wheel':
      return 'Trailer (5th Wheel)';

    case 'rv':
    case 'atv':
    case 'suv':
      return input.toUpperCase();

    default:
      return toStartCase(input);
  }
}
