export function getCookie(name: string): string {
  if (typeof window === "undefined") return "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length === 2) {
    return parts.pop()?.split(";").shift() || "";
  }
  return "";
}

export const MAX_PLATFORMS = 4;
