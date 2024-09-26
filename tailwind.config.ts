import type { Config } from "tailwindcss";
import { CSSRuleObject, PluginCreator } from "tailwindcss/types/config";

const customColorExtendPlugin: PluginCreator = ({ addUtilities }) => {
  const opacitys = Array.from({ length: 20 }).map((_, index) => index * 5);

  const extendColors: Record<string, string> = {
    "color-1": "var(--tcu-color-1)",
    "color-2": "var(--tcu-color-2)",
    "color-3": "var(--tcu-color-3)",
  };

  const keys = Object.keys(extendColors);
  for (const colorName of keys) {
    const cssValue = extendColors[colorName];

    // text-*
    const textCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "text-",
      cssMap: [
        {
          cssProperty: "color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // bg-*
    const bgCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "bg-",
      cssMap: [
        {
          cssProperty: "background-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // outline-*
    const outlineCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "outline-",
      cssMap: [
        {
          cssProperty: "outline-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // stroke-*
    const strokeCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "stroke-",
      cssMap: [
        {
          cssProperty: "stroke",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // fill-*
    const fillCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "fill-",
      cssMap: [
        {
          cssProperty: "fill",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // shadow-*
    const shadowCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "shadow-",
      cssMap: [
        {
          cssProperty: "--tw-shadow-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
        {
          cssProperty: "--tw-shadow",
          cssValue(opacity) {
            return `var(--tw-shadow-colored)`;
          },
        },
      ],
      opacitys,
    });

    // border-*
    const borderCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-",
      cssMap: [
        {
          cssProperty: "border-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-l-*
    const borderLCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-l-",
      cssMap: [
        {
          cssProperty: "border-left-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-r-*
    const borderRCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-r-",
      cssMap: [
        {
          cssProperty: "border-right-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-t-*
    const borderTCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-t-",
      cssMap: [
        {
          cssProperty: "border-top-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    // border-b-*
    const borderBCSSRuleObjects = generateColorCSSRuleObject({
      colorName,
      classNamePrefix: "border-b-",
      cssMap: [
        {
          cssProperty: "border-bottom-color",
          cssValue: (opacity) => {
            if (opacity === undefined) return cssValue;
            return `color-mix(in hsl, ${cssValue} ${opacity}%, transparent)`;
          },
        },
      ],
      opacitys,
    });

    const temp: CSSRuleObject[] = [];
    const allObjects = temp.concat(
      textCSSRuleObjects,
      bgCSSRuleObjects,
      outlineCSSRuleObjects,
      strokeCSSRuleObjects,
      fillCSSRuleObjects,
      shadowCSSRuleObjects,
      borderCSSRuleObjects,
      borderLCSSRuleObjects,
      borderRCSSRuleObjects,
      borderTCSSRuleObjects,
      borderBCSSRuleObjects
    );

    addUtilities(allObjects);
  }
};

function generateColorCSSRuleObject(params: {
  colorName: string;
  classNamePrefix: string;
  opacitys: number[];
  cssMap: { cssProperty: string; cssValue: (opacity?: number) => string }[];
}) {
  const { colorName, classNamePrefix, opacitys, cssMap } = params;

  const classNameCSSRuleObject: CSSRuleObject = {};

  classNameCSSRuleObject[`.${classNamePrefix}${colorName}`] = {};
  for (const { cssProperty, cssValue } of cssMap) {
    classNameCSSRuleObject[`.${classNamePrefix}${colorName}`]![cssProperty] =
      cssValue();
  }

  for (const opacity of opacitys) {
    classNameCSSRuleObject[`.${classNamePrefix}${colorName}\\/${opacity}`] = {};
    for (const { cssProperty, cssValue } of cssMap) {
      classNameCSSRuleObject[`.${classNamePrefix}${colorName}\\/${opacity}`]![
        cssProperty
      ] = cssValue(opacity);
    }
  }

  return classNameCSSRuleObject;
}

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {},
  },
  plugins: [customColorExtendPlugin],
} satisfies Config;
