/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(224, 71%, 97%)',
            '100': 'hsl(224, 71%, 94%)',
            '200': 'hsl(224, 71%, 86%)',
            '300': 'hsl(224, 71%, 76%)',
            '400': 'hsl(224, 71%, 64%)',
            '500': 'hsl(224, 71%, 50%)',
            '600': 'hsl(224, 71%, 40%)',
            '700': 'hsl(224, 71%, 32%)',
            '800': 'hsl(224, 71%, 24%)',
            '900': 'hsl(224, 71%, 16%)',
            '950': 'hsl(224, 71%, 10%)',
            DEFAULT: '#030712'
        },
        secondary: {
            '50': 'hsl(220, 14%, 97%)',
            '100': 'hsl(220, 14%, 94%)',
            '200': 'hsl(220, 14%, 86%)',
            '300': 'hsl(220, 14%, 76%)',
            '400': 'hsl(220, 14%, 64%)',
            '500': 'hsl(220, 14%, 50%)',
            '600': 'hsl(220, 14%, 40%)',
            '700': 'hsl(220, 14%, 32%)',
            '800': 'hsl(220, 14%, 24%)',
            '900': 'hsl(220, 14%, 16%)',
            '950': 'hsl(220, 14%, 10%)',
            DEFAULT: '#f3f4f6'
        },
        accent: {
            '50': 'hsl(0, 94%, 97%)',
            '100': 'hsl(0, 94%, 94%)',
            '200': 'hsl(0, 94%, 86%)',
            '300': 'hsl(0, 94%, 76%)',
            '400': 'hsl(0, 94%, 64%)',
            '500': 'hsl(0, 94%, 50%)',
            '600': 'hsl(0, 94%, 40%)',
            '700': 'hsl(0, 94%, 32%)',
            '800': 'hsl(0, 94%, 24%)',
            '900': 'hsl(0, 94%, 16%)',
            '950': 'hsl(0, 94%, 10%)',
            DEFAULT: '#fca5a5'
        },
        'neutral-50': '#e5e7eb',
        'neutral-100': '#000000',
        'neutral-200': '#ffffff',
        'neutral-300': '#b3b3b3',
        background: '#000000',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Helvetica Neue',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '16px',
                letterSpacing: '-0.7px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '28px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '28px'
            }
        ],
        '12.8': [
            '12.8px',
            {
                lineHeight: '19.2px'
            }
        ],
        '9.6': [
            '9.6px',
            {
                lineHeight: '14.4px'
            }
        ]
    },
    spacing: {
        '0': '4px',
        '1': '64px'
    },
    borderRadius: {
        xs: '1px',
        sm: '4px',
        full: '9999px'
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    transitionDuration: {
        '150': '0.15s',
        '300': '0.3s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
},
  },
};
