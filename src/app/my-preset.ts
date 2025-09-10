import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#E6EBF5',
            100: '#B3C1E0',
            200: '#8097CC',
            300: '#4D6DB8',
            400: '#1A43A3',
            500: '#003591', // DNV Sea Blue
            600: '#0f204b', // DNV Dark Blue
            700: '#0C1A3D',
            800: '#091430',
            900: '#060D22'
        }
    },
    // button: {
    //     root: {
    //         style: {
    //             background: '{primary.500}',
    //             color: '#ffffff',
    //             border: 'none',
    //             fontFamily: "'Nunito Sans', sans-serif",
    //             fontSize: 'var(--dnv-font-button-l)',
    //             fontWeight: '700',
    //             lineHeight: '20px',
    //             letterSpacing: '0',
    //             padding: '0.571rem 1.143rem',
    //             borderRadius: '10px',
    //             cursor: 'pointer'
    //         },
    //         hover: {
    //             background: '{primary.600}',
    //             color: '#ffffff',
    //             borderColor: 'transparent'
    //         },
    //         active: {
    //             background: '{primary.700}',
    //             color: '#ffffff',
    //             borderColor: 'transparent'
    //         },
    //         focus: {
    //             outlineColor: 'transparent',
    //             boxShadow: 'none'
    //         },
    //         disabled: {
    //             background: '#e6e6e5',
    //             color: '#707070',
    //             borderColor: 'transparent',
    //             cursor: 'default'
    //         }
    //     },
    //     label: {
    //         style: {
    //             fontWeight: '700'
    //         }
    //     }
    // }
});

export default MyPreset;
