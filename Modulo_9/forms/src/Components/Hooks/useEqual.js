export function useEqual(value, valueConfirmation) {
  const validation = value === valueConfirmation? true : false
  return validation
}