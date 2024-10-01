import type { Config } from "tailwindcss";
import { CSSRuleObject, PluginCreator } from "tailwindcss/types/config";

const staticVariantPlugin: PluginCreator = ({ addVariant }) => {
  addVariant("my-active", [".my-active &", ".my-active&"]);
  addVariant("hocus", ["&:hover", "&:focus"]);

  // https://tistory.github.io/document-tistory-skin/common/global.html 참조
  addVariant("tt-body-index", ["#tt-body-index &", "#tt-body-index&"]);
  addVariant("tt-body-page", ["#tt-body-page &", "#tt-body-page&"]);
  addVariant("tt-body-category", ["#tt-body-category &", "#tt-body-category&"]);
  addVariant("tt-body-archive", ["#tt-body-archive &", "#tt-body-archive&"]);
  addVariant("tt-body-tag", ["#tt-body-tag &", "#tt-body-tag&"]);
  addVariant("tt-body-search", ["#tt-body-search &", "#tt-body-search&"]);
  addVariant("tt-body-guestbook", [
    "#tt-body-guestbook &",
    "#tt-body-guestbook&",
  ]);
  addVariant("tt-body-location", ["#tt-body-location &", "#tt-body-location&"]);
  addVariant("tt-body-notice", ["#tt-body-notice &", "#tt-body-notice&"]); // custom
  addVariant("tt-body-notice-page", [
    "#tt-body-notice-page &",
    "#tt-body-notice-page&",
  ]); // custom
  addVariant("tt-body-tag-index", [
    "#tt-body-tag-index &",
    "#tt-body-tag-index&",
  ]); // custom

  addVariant("today_is_not_bad", [".today_is_not_bad &", ".today_is_not_bad&"]);
  addVariant("today_is_good", [".today_is_good &", ".today_is_good&"]);
  addVariant("today_is_pleasure", [
    ".today_is_pleasure &",
    ".today_is_pleasure&",
  ]);
  addVariant("today_is_happy", [".today_is_happy &", ".today_is_happy&"]);
  addVariant("today_is_sad", [".today_is_sad &", ".today_is_sad&"]);
  addVariant("today_is_soso", [".today_is_soso &", ".today_is_soso&"]);
  addVariant("today_is_blue", [".today_is_blue &", ".today_is_blue&"]);
  addVariant("today_is_angry", [".today_is_angry &", ".today_is_angry&"]);
  addVariant("today_is_flutter", [".today_is_flutter &", ".today_is_flutter&"]);
  addVariant("today_is_expect", [".today_is_expect &", ".today_is_expect&"]);
  addVariant("today_is_annoying", [
    ".today_is_annoying &",
    ".today_is_annoying&",
  ]);
  addVariant("today_is_bored", [".today_is_bored &", ".today_is_bored&"]);

  addVariant("mini_room_display_flag_show", [
    ".mini_room_display_flag_show &",
    ".mini_room_display_flag_show&",
  ]);
  addVariant("mini_room_display_flag_hide", [
    ".mini_room_display_flag_hide &",
    ".mini_room_display_flag_hide&",
  ]);
};

const customColorExtendPlugin: PluginCreator = ({ addUtilities }) => {
  const opacitys = Array.from({ length: 20 }).map((_, index) => index * 5);

  const extendColors: Record<string, string> = {
    "color-1": "var(--tcu-color-1)",
    "color-2": "var(--tcu-color-2)",
    "color-3": "var(--tcu-color-3)",
    "color-4": "var(--tcu-color-4)",
    "color-5": "var(--tcu-color-5)",
    "color-6": "var(--tcu-color-6)",
    "color-7": "var(--tcu-color-7)",
    "color-8": "var(--tcu-color-8)",
    "color-9": "var(--tcu-color-9)",
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

const otherElementPlugin: PluginCreator = ({ matchVariant }) => {
  // addVariant('other-hover', ({ modify }))
  matchVariant("other-hover", (value, extra) => {
    return [`.other\\/${value}:hover ~ * &`, `.other\\/${value}:hover ~ &`];
  });

  matchVariant("other-checked", (value, extra) => {
    return [`.other\\/${value}:checked ~ * &`, `.other\\/${value}:checked ~ &`];
  });

  matchVariant("other-exist", (value, extra) => {
    return [`.other\\/${value} ~ * &`, `.other\\/${value} ~ &`];
  });

  matchVariant("other-has", (value, extra) => {
    return [
      `.other\\/${extra.modifier}:has(${value}) ~ * &`,
      `.other\\/${extra.modifier}:has(${value}) ~ &`,
    ];
  });
};

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {},
  },
  plugins: [staticVariantPlugin, customColorExtendPlugin, otherElementPlugin],
} satisfies Config;
