/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */

var shortestPath = function (n, edges, labels, k) {
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v, w] of edges) {
        graph[u].push([v, w]);
    }
    let dist = Array.from(
        { length: n },
        () => Array(k + 1).fill(Infinity)
    );
    let pq = [[0, 0, 1]];
    dist[0][1] = 0;
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        let [cost, node, count] = pq.shift();
        if (cost !== dist[node][count]) continue;
        if (node === n - 1) return cost;
        for (let [next, weight] of graph[node]) {
            let nextCount =
                labels[node] === labels[next] ? count + 1 : 1;
            if (nextCount > k) continue;
            let newCost = cost + weight;
            if (newCost < dist[next][nextCount]) {
                dist[next][nextCount] = newCost;
                pq.push([newCost, next, nextCount]);
            }
        }
    }

    return -1;
};
