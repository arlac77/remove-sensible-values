
/**
 * generates a new object tree by removing sensible values like credentials from the given one
 * @param {Object} object source
 * @return {Object} object tree hopefully free of sensible data
 */
export function removeSensibleValues(
  object,
  toBeRemoved = key => key.match(/pass|auth|key|user|secret/)
) {
  if (
    object === undefined ||
    object === null ||
    typeof object === "bigint" ||
    typeof object === "number" ||
    typeof object === "string" ||
    typeof object === "boolean" ||
    object instanceof String
  ) {
    return object;
  }

  if(Array.isArray(object)) {
    return object.map(e => removeSensibleValues(e,toBeRemoved));
  }

  const result = {};
  for (const key of Object.keys(object)) {
    const value = object[key];

    if (typeof value === "string" || value instanceof String) {
      if (toBeRemoved(key,toBeRemoved)) {
        result[key] = "...";
        continue;
      }
    }

    result[key] = removeSensibleValues(value,toBeRemoved);
  }

  return result;
}
