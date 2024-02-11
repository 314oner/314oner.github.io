import React from 'react';
import OriginalToggle from '@theme-original/ColorModeToggle';
import {
  lightStorage,
  darkStorage,
  type ColorState,
  updateDOMColors,
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_BACKGROUND_COLOR,
  COLOR_SHADES,
} from '@site/src/utils/colorUtils';
import type { Props } from '@theme/ColorModeToggle';

export default function ColorModeToggle(props: Props): JSX.Element {
  return (
    <OriginalToggle
      {...props}
      onChange={(colorMode) => {
        props.onChange(colorMode);
        const isDarkMode = colorMode === 'dark';
        const storage = isDarkMode ? darkStorage : lightStorage;
        const colorState = (JSON.parse(
          storage.get() ?? 'null',
        ) as ColorState | null) ?? {
          baseColor: isDarkMode ? DARK_PRIMARY_COLOR : LIGHT_PRIMARY_COLOR,
          background: isDarkMode
            ? DARK_BACKGROUND_COLOR
            : LIGHT_BACKGROUND_COLOR,
          shades: COLOR_SHADES,
        };
        updateDOMColors(colorState, isDarkMode);
      }}
    />
  );
}
