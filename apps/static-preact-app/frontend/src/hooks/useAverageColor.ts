//@ts-ignore
const { useState, useEffect } = preactHooks;
import FastAverageColor from "fast-average-color";

const useAverageColor = (url: any, defaultColor = "white") => {
    const [averageColor, setAverageColor] = useState(defaultColor);
    const fac = new FastAverageColor();

    useEffect(() => {
        fac
            .getColorAsync(url)
            .then((color: { hexa: any; }) => {
                setAverageColor(color.hexa);
            })
            .catch((e: any) => {
                console.error(e);
            });
    }, [averageColor]);

    return averageColor;
};

export default useAverageColor;