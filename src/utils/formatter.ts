// Formatting helper functions
export const formatNumber = (value: number | undefined): string => {
  if (value === undefined) return "";
  const rounded = Math.round(value);
  return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatTimestamp = (timestamp: string): string => {
  if (!timestamp) return "";

  try {
    const date = new Date(timestamp);
    // Check if date is invalid or is Unix epoch (Jan 1, 1970)
    if (isNaN(date.getTime()) || date.getFullYear() === 1970) {
      return "";
    }
    return date.toLocaleString("hu-HU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } catch {
    return "";
  }
};