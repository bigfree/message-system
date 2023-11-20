import {
    Button,
    createTheme,
    defaultVariantColorsResolver,
    MantineThemeOverride,
    parseThemeColor,
    PasswordInput,
    rem,
    TextInput,
    VariantColorsResolver,
} from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

// const variantColorResolver: VariantColorsResolver = (input) => {
//     const defaultResolvedColors = defaultVariantColorsResolver(input);
//     const parsedColor = parseThemeColor({
//         color: input.color || input.theme.primaryColor,
//         theme: input.theme,
//     });
//
//     if (parsedColor.isThemeColor && 'toolbox' === input.variant) {
//         return {
//             background: 'white',
//             color: 'red',
//             border: '',
//             paddingRight: '100px',
//             borderRight: '1px solid red',
//             hover: 'white',
//         };
//     }
//
//     return defaultResolvedColors;
// };

export const theme: MantineThemeOverride = createTheme({
    scale: 1,
    // variantColorResolver,
    components: {
        TextInput: TextInput.extend({
            styles: {
                label: {
                    marginBottom: rem(2),
                },
            },
        }),
        PasswordInput: PasswordInput.extend({
            styles: {
                label: {
                    marginBottom: rem(2),
                },
            },
        }),
        Button: Button.extend({}),
    },
});
export const vars = themeToVars(theme);