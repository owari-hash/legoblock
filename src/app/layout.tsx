import 'src/global.css';

// ----------------------------------------------------------------------

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import { Metadata, Viewport } from 'next';
import { defaultMetadata } from 'src/config/seo';
import { CartProvider } from 'src/contexts/cart-context';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  ...defaultMetadata,
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            }}
          >
            <CartProvider>
              <ThemeProvider>
                <SnackbarProvider>
                  <MotionLazy>
                    <ProgressBar />
                    <SettingsDrawer />
                    {children}
                  </MotionLazy>
                </SnackbarProvider>
              </ThemeProvider>
            </CartProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
