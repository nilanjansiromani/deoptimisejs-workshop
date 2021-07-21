const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

let iterations = 1e7;
const add = (x, y) => x + y;
const a = 1;
const b = 4;
performance.mark("starting loop")
while (iterations--) {
  add(a,b);
}
iterations = 1e7;
while (iterations--) {
  add(a,b);
}
performance.mark("ending loop")
performance.measure("Benchmarking adding two numbers", "starting loop", "ending loop");