import { matches, pick } from "lodash/fp";
/**
 * A partial equal helper
 * @param keys varargs of property path strings
 * @returns properties specify by keys in object a and b matches
 */
const partialEqByKeys =
  (...keys: [...string[]]) =>
  (a: object, b: object) => {
    return matches(pick(keys)(b))(a);
  };

export default partialEqByKeys;
