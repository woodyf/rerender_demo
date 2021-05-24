import { ComponentProps, ComponentType, memo } from "react";
/**
 * fixes React.memo losing generic type information problem
 * @param Component component to wrap by React.memo
 * @param propsAreEqual custom equal function
 * @returns
 */
const memoFixed = <T extends ComponentType<any>>(
  Component: T,
  propsAreEqual?: (
    prevProps: Readonly<ComponentProps<T>>,
    nextProps: Readonly<ComponentProps<T>>
  ) => boolean
): T => {
  return memo(Component, propsAreEqual) as unknown as T;
};

export default memoFixed;
