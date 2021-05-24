import { isEmpty } from "lodash/fp";
import { useRef, useEffect } from "react";
/**
 * A hook that prints props that changed between renders
 *
 * Only for development
 * @param props Component props
 * @param name Name of component
 */
const useWhyUpdate = (
  props: { [key: string]: any },
  name = "set a name plz"
) => {
  const previousProps = useRef<{ [key: string]: any }>();
  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = allKeys.reduce((acc, cur) => {
        if (previousProps.current![cur] !== props[cur]) {
          return {
            ...acc,
            [cur]: { from: previousProps.current![cur], to: props[cur] },
          };
        }
        return acc;
      }, {});
      if (!isEmpty(changesObj)) {
        console.log("[why-update]", name, changesObj);
      }
    }
    previousProps.current = props;
  });
};

export default useWhyUpdate;
