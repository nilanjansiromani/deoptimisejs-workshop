const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

let iterations = 1e7;
const double = (x) => x + x;
const sumOfDoubles = (y,z) => double(y) + double(z)
const y = 1;
const z = 4;
performance.mark("starting loop")
while (iterations--) {
    sumOfDoubles(y,z);
}

performance.mark("ending loop")
performance.measure("Benchmarking adding two numbers", "starting loop", "ending loop");