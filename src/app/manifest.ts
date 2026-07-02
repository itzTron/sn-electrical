import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SN Electrical Services",
    short_name: "SN Electrical",
    description:
      "Premium residential, commercial, and industrial electrical services.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066FF",
  };
}
