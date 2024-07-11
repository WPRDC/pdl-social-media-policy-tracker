export function getCookie(name: string): string {
  if (typeof window === "undefined") return "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length === 2) {
    return parts.pop()?.split(";").shift() || "";
  }
  return "";
}

export const MAX_PLATFORMS = 3;

// template string pass-through function to signal prettier to format strings
export const tw = (strings: ArrayLike<string>, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export function asID(d: string): string {
  return d.trim().replace(/\s/g, "");
}
