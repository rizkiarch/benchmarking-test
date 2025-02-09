const autocannon = require('autocannon');

async function runBenchmark() {
    const result = await autocannon({
        url: 'http://localhost:3000',
        connections: 10000, // Jumlah koneksi concurrent
        pipelining: 1,   // Jumlah request per koneksi
        duration: 10,    // Durasi benchmark dalam detik
    });

    console.log('Hasil Benchmark:');
    console.log('Rata-rata Latency:', result.latency.average, 'ms');
    console.log('Rata-rata Request/Detik:', result.requests.average);
    console.log('Total Request:', result.requests.total);
    console.log('Total Data Transfer:', result.throughput.total, 'bytes');
}

runBenchmark().catch(console.error);
