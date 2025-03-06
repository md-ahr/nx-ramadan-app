const formatUptime = (uptimeInSeconds: number): string => {
  const days = Math.floor(uptimeInSeconds / (24 * 60 * 60));
  const hours = Math.floor((uptimeInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((uptimeInSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  const parts = [];

  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

  return parts.join(' ');
};

const checkServer = () => {
  const uptimeInSeconds = Math.floor(process.uptime());

  return {
    uptime: formatUptime(uptimeInSeconds),
    uptimeRaw: uptimeInSeconds,
    timestamp: new Date().toISOString(),
  };
};

export { checkServer };
