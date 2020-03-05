export const hashtags = (text) => {
  const hashtagItem = text.match(/#\S+/g)
  return hashtagItem
}