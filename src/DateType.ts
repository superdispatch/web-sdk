export type DateType =
  | 'estimated'
  | 'exact'
  | 'not_earlier_than'
  | 'not_later_than';

export function listDateTypes(): DateType[] {
  return ['estimated', 'exact', 'not_earlier_than', 'not_later_than'];
}

export function formatDateType(value: DateType): string {
  switch (value) {
    case 'estimated':
      return 'Estimated';
    case 'exact':
      return 'Exactly';
    case 'not_earlier_than':
      return 'No Earlier than';
    case 'not_later_than':
      return 'No Later than';
    default:
      return 'Unknown';
  }
}
