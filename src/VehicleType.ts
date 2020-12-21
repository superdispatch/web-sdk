export type VehicleType =
  | 'sedan'
  | '2_door_coupe'
  | 'suv'
  | 'pickup'
  | '4_door_pickup'
  | 'van'
  | 'truck_daycab'
  | 'truck_sleeper'
  | 'motorcycle'
  | 'boat'
  | 'rv'
  | 'heavy_machinery'
  | 'freight'
  | 'livestock'
  | 'atv'
  | 'trailer_bumper_pull'
  | 'trailer_gooseneck'
  | 'trailer_5th_wheel'
  | 'other';

const values = new Map<VehicleType, string>([
  ['sedan', 'Sedan'],
  ['2_door_coupe', 'Coupe (2 doors)'],
  ['suv', 'SUV'],
  ['pickup', 'Pickup (2 doors)'],
  ['4_door_pickup', 'Pickup (4 doors)'],
  ['van', 'Van'],
  ['truck_daycab', 'Truck (daycab)'],
  ['truck_sleeper', 'Truck (with sleeper)'],
  ['motorcycle', 'Motorcycle'],
  ['boat', 'Boat'],
  ['rv', 'RV'],
  ['heavy_machinery', 'Heavy Machinery'],
  ['freight', 'Freight'],
  ['livestock', 'Livestock'],
  ['atv', 'ATV'],
  ['trailer_bumper_pull', 'Trailer (Bumper Pull)'],
  ['trailer_gooseneck', 'Trailer (Gooseneck)'],
  ['trailer_5th_wheel', 'Trailer (5th Wheel)'],
  ['other', 'Other'],
]);

export function listVehicleTypes(): VehicleType[] {
  return Array.from(values.keys());
}

interface FormatVehicleTypeOptions {
  fallback?: string;
}

export function formatVehicleType(
  value: VehicleType,
  { fallback = 'Unknown' }: FormatVehicleTypeOptions = {},
): string {
  return values.get(value) || fallback;
}
