import { useCallback, useEffect, useState } from 'react';

import { useEventListener } from 'usehooks-ts';
import { GeolocationType } from '../redux/utils/types';

interface Size {
  width: number;
  height: number;
}

const useElementSize = <T extends HTMLElement = HTMLDivElement>(
  geolocation?: GeolocationType,
): [(node: T | null) => void, Size] => {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [geolocation]);

  useEventListener('resize', handleSize);

  // For some reason, using useLayoutEffect instead of useEffect introduces a bug in mobile (and not desktop)
  useEffect(() => {
    handleSize();
  }, [handleSize]);

  return [setRef, size];
};

export default useElementSize;
