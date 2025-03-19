import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-exo)'],
      },
	  fontWeight: {
		extralight: "100",
        light: "200",
		midlight: "300",
        normal: "400",
		midnormal: "500",
		semibold: "600",
		bold: "700",
		extrabold: "800",
        ultrabold: "900",
      },
  		colors: {
			brand: {
				red: "var(--brand-red)",
				blue: "var(--brand-blue)",
				green: "var(--brand-green)",
				yellow: "var(--brand-yellow)",
				purple: "var(--brand-purple)",
				orange: "var(--brand-orange)",
				gray: "var(--brand-gray)",
				white: "var(--brand-white)",
				black: "var(--brand-black)",
			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      spacing: {
		'0.25px': '0.25px',
        '0.5px': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
      },
  	}
  },
  plugins: [animate],
};
export default config;
