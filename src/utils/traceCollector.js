export async function collectPerformanceMetrics(page) {
  const client = await page.context().newCDPSession(page);
  await client.send('Performance.enable');
  const metrics = await client.send('Performance.getMetrics');
  console.log('Performance Metrics:', metrics);
  return metrics;
}
