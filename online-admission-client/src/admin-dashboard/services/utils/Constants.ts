function deepEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (isObject(val1) && isObject(val2)) {
      if (!deepEqual(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

function isObject(object: any): boolean {
  return object !== null && typeof object === "object";
}

export { deepEqual };
