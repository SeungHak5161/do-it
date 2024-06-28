/**
 * check file size
 * unit of size is MB
 */
export const checkFileSize = (file: File, limit: number) => {
  if (file.size / 1024 / 1024 > limit) {
    return false
  } else {
    return true
  }
}
