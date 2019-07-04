/**
 * Calculate new image aspect ratio
 * 
 * @param {number} originalWidth
 * @param {number} originalHeight
 * @param {number} newWidth
 * 
 * @return {number}
 */
export default (originalWidth, originalHeight, newWidth) => {
  if (originalWidth === 0) {
    throw new Error('originalWidth should not be a zero')
  }

  if (typeof originalWidth !== 'number') {
    throw new Error('originalWidth should be a number')
  }

  if (typeof originalHeight !== 'number') {
    throw new Error('originalHeight should be a number')
  }

  if (typeof newWidth !== 'number') {
    throw new Error('newWidth should be a number')
  }

  return (originalHeight / originalWidth) * newWidth
}