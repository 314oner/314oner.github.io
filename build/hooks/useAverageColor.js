const {useState, useEffect} = preactHooks;
import FastAverageColor from "../_snowpack/pkg/fast-average-color.js";
const useAverageColor = (url, defaultColor = "white") => {
  const [averageColor, setAverageColor] = useState(defaultColor);
  const fac = new FastAverageColor();
  useEffect(() => {
    fac.getColorAsync(url).then((color) => {
      setAverageColor(color.hexa);
    }).catch((e) => {
      console.error(e);
    });
  }, [averageColor]);
  return averageColor;
};
export default useAverageColor;
