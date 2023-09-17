function formatDate(date: Date): string {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function timeElapsed(timestamp: string): string {
  try {
    const timestampDate = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - timestampDate.getTime();
    const minutes = Math.floor(timeDifference / 60000); // 1 minute = 60,000 milliseconds
    const hours = Math.floor(minutes / 60); // 1 hour = 60 minutes
    const days = Math.floor(hours / 24); // 1 day = 24 hours
    const months = Math.floor(days / 30.4375); // Approximate average number of days per month
    const weeks = Math.floor(days / 7); // 1 week = 7 days

    if (months > 1) {
      return `${formatDate(timestampDate)}`;
    } else if (weeks > 0) {
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (days > 0) {
      return `${formatDate(timestampDate)}`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${formatDate(timestampDate)}`;
    }
  } catch (error) {
    return "Invalid timestamp format";
  }
}

export { timeElapsed };
