# Purpose

react rerender demo

download react dev tools (chrome extension)
use profile to record an user action
find optimization target

try to block rerender at parent if possible
memoize component (wrap with memoFixed)
use useWhyUpdate hook/withWhyUpdate hoc to check changing props
extract props to constant if possible 
memoize data (useMemo) /callbacks (useCallback) in props

use memoFixed with partialEqByKeys to tune 'prop dependencies' when memoizing component which you cannot control it's props
(e.g. react-table Cell render function)
