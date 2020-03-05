export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    if (Object.entries(stringArrayOrObject).length === 0) {
      return true
    }
  }

  return false
}