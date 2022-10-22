export function getHighOrderPrototype(clazz) {
  let tested = clazz;
  let last = clazz;

  while (tested.hasOwnProperty('prototype')) {
    const current = Object.getPrototypeOf(tested);
    if (current.hasOwnProperty('prototype')) last = current;
    tested = current;
  }

  return last;
}
