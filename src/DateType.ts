export type DateType =
  | 'estimated'
  | 'exact'
  | 'not_earlier_than'
  | 'not_later_than';

const values = new Map<DateType, string>([
  ['estimated', 'Estimated'],
  ['exact', 'Exactly'],
  ['not_earlier_than', 'No Earlier than'],
  ['not_later_than', 'No Later than'],
]);

export function listDateTypes(): DateType[] {
  return Array.from(values.keys());
}

export function formatDateType(value: DateType): string {
  return values.get(value) || 'Unknown';
}
