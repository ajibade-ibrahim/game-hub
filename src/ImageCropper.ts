export function getModifiedImageUrl(
  url: string,
  height: number = 600,
  width: number = 400
): string {
  const delimiter = '/media/'
  const split = url.split(delimiter)
  const modifiedUrl = `${split[0]}${delimiter}crop/${height}/${width}/${split[1]}`

  return modifiedUrl
}
