export function toStartCase(input: string): string {
  return input
    .replace(/_/g, ' ')
    .replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
}
