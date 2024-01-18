/**
 * 
 * @param {any[]} items 
 */
export function choice(items) {
  const idx = Math.floor(Math.random() * (items.length-1));
  if (idx >= 0) {
    return items[idx];
  }
  return null;
}

/**
 * 
 * @param {any[]} items 
 * @param {any} item 
 */
export function remove(items, item) {
  const idx = items.indexOf(item);
  if (idx >= 0) {
    items.splice(idx, 1);
    return item;
  }
  return undefined;
}