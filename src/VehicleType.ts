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

export function listVehicleTypes(): VehicleType[] {
  return [
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
  ];
}

export function formatVehicleType(value: VehicleType): string {
  switch (value) {
    case 'sedan':
      return 'Sedan';
    case '2_door_coupe':
      return 'Coupe (2 doors)';
    case 'suv':
      return 'SUV';
    case 'pickup':
      return 'Pickup (2 doors)';
    case '4_door_pickup':
      return 'Pickup (4 doors)';
    case 'van':
      return 'Van';
    case 'truck_daycab':
      return 'Truck (daycab)';
    case 'truck_sleeper':
      return 'Truck (with sleeper)';
    case 'motorcycle':
      return 'Motorcycle';
    case 'boat':
      return 'Boat';
    case 'rv':
      return 'RV';
    case 'heavy_machinery':
      return 'Heavy Machinery';
    case 'freight':
      return 'Freight';
    case 'livestock':
      return 'Livestock';
    case 'atv':
      return 'ATV';
    case 'trailer_bumper_pull':
      return 'Trailer (Bumper Pull)';
    case 'trailer_gooseneck':
      return 'Trailer (Gooseneck)';
    case 'trailer_5th_wheel':
      return 'Trailer (5th Wheel)';
    case 'other':
      return 'Other';
    default:
      return 'Unknown';
  }
}
