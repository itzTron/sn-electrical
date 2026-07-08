"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";

function getISTDayTime() {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * 5.5); // +5:30 for IST
  const hours = nd.getHours();
  // Light mode from 6 AM to 6 PM (18:00) IST
  return hours >= 6 && hours < 18;
}

function ThemeInit({ children }: { children: ReactNode }) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      // Set theme based on IST time only if user hasn't made a manual selection
      if (!storedTheme || storedTheme === "system") {
        const expectedTheme = getISTDayTime() ? "light" : "dark";
        if (theme !== expectedTheme) {
          setTheme(expectedTheme);
        }
      }
    } catch (e) {
      // Ignore localStorage errors (e.g., in incognito mode)
    }
  }, [setTheme, theme]);

  return <>{children}</>;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ThemeInit>{children}</ThemeInit>
    </NextThemesProvider>
  );
}
