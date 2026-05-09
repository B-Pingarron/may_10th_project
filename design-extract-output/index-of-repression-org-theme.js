// React Theme — extracted from https://www.index-of-repression.org/de/platform
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '12.8': string;
    '9.6': string;
 *   };
 *   space: {
    '4': string;
    '64': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    full: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#030712",
    "secondary": "#f3f4f6",
    "accent": "#fca5a5",
    "background": "#000000",
    "foreground": "#000000",
    "neutral50": "#e5e7eb",
    "neutral100": "#000000",
    "neutral200": "#ffffff",
    "neutral300": "#b3b3b3"
  },
  "fonts": {
    "body": "'Helvetica Neue', sans-serif",
    "mono": "'ui-monospace', monospace"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "12.8": "12.8px",
    "9.6": "9.6px"
  },
  "space": {
    "4": "4px",
    "64": "64px"
  },
  "radii": {
    "xs": "1px",
    "sm": "4px",
    "full": "9999px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#030712",
      "light": "hsl(224, 71%, 19%)",
      "dark": "hsl(224, 71%, 10%)"
    },
    "secondary": {
      "main": "#f3f4f6",
      "light": "hsl(220, 14%, 95%)",
      "dark": "hsl(220, 14%, 81%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#030712"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#2c3e50"
    }
  },
  "typography": {
    "fontFamily": "'Neue Montreal', sans-serif",
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "28px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "16px"
    }
  },
  "shape": {
    "borderRadius": 1
  },
  "shadows": []
};

export default theme;
