export function getModifiedImageUrl(
  url: string,
  height: number = 600,
  width: number = 400
): string {
  if (!url || url.length === 0) return url
  const delimiter = '/media/'
  const split = url.split(delimiter)
  const modifiedUrl = `${split[0]}${delimiter}crop/${height}/${width}/${split[1]}`

  return modifiedUrl
}
