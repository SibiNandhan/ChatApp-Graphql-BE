export function mergeObjects(...objs:any[]) {
  const merged:any = {};
  for (let obj of objs) {
    for (let [key, value] of Object.entries(obj)) {
      if (merged.hasOwnProperty(key)) {
        merged[key] = Object.assign(merged[key], value);
      } else {
        merged[key] = value;
      }
    }
  }
  return merged;
}
