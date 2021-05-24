import { ComponentType } from "react";
import useWhyUpdate from "./useWhyUpdate";
/**
 * A HOC that prints props that changed between renders
 *
 * using whis with 3rd-party components
 *
 * Only for development
 * @param props {object} Component props
 * @param name Name of component
 */
const withWhyUpdate =
  <P extends {}>(Comp: ComponentType<P>, name = "set a name plz") =>
  (props: P) => {
    useWhyUpdate(props, name);
    return <Comp {...props} />;
  };

export default withWhyUpdate;
