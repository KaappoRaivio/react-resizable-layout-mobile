import useResizable from './useResizable';

import type { ResizableProps } from './types';

const Resizable = ({
  axis,
  disabled = false,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  onResizeStart,
  onResizeEnd,
  children,
}: ResizableProps): JSX.Element => {
  const resizable = useResizable({
    axis,
    disabled,
    initial,
    min,
    max,
    reverse,
    onResizeStart,
    onResizeEnd,
  });

  return children(resizable);
};

export default Resizable;
