//@ts-nocheck
const { useState, useEffect } = preactHooks;
import FastAverageColor from 'fast-average-color';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAverageColor = (url: any, defaultColor = 'white') => {
  const [averageColor, setAverageColor] = useState(defaultColor);
  const fac = new FastAverageColor();

  useEffect(() => {
    fac
      .getColorAsync(url)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((color: { hexa: any }) => {
        setAverageColor(color.hexa);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((e: any) => {
        console.error(e);
      });
  }, [averageColor]);

  return averageColor;
};

export default useAverageColor;
