const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

let iterations = 1e7;

const add = (x, y) => x + y;

performance.mark("starting loop")
while (iterations--) {
  add(2,4);
  add(2,4);
}
add(2,"4");
performance.mark("ending loop")
performance.measure("Benchmarking adding two numbers", "starting loop", "ending loop");