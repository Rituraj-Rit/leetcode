/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */

var palindromePath = function(n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const parent = Array(n).fill(-1);
    const depth = Array(n).fill(0);
    const size = Array(n).fill(1);
    const heavy = Array(n).fill(-1);
    const order = [0];
    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            parent[v] = u;
            depth[v] = depth[u] + 1;
            order.push(v);
        }
    }
    for (let i = order.length - 1; i > 0; i--) {
        const u = order[i];
        const p = parent[u];
        size[p] += size[u];
        if (heavy[p] === -1 || size[u] > size[heavy[p]]) {
            heavy[p] = u;
        }
    }
    const head = Array(n);
    const pos = Array(n);
    let timer = 0;
    const stack = [[0, 0]];
    while (stack.length) {
        const [u, h] = stack.pop();
        for (let v = u; v !== -1; v = heavy[v]) {
            head[v] = h;
            pos[v] = timer++;

            for (const w of adj[v]) {
                if (w !== parent[v] && w !== heavy[v]) {
                    stack.push([w, w]);
                }
            }
        }
    }
    let segSize = 1;
    while (segSize < n) segSize *= 2;
    const seg = Array(segSize * 2).fill(0);
    for (let i = 0; i < n; i++) {
        seg[segSize + pos[i]] = 1 << (s.charCodeAt(i) - 97);
    }
    for (let i = segSize - 1; i > 0; i--) {
        seg[i] = seg[i * 2] ^ seg[i * 2 + 1];
    }
    function update(p, val) {
        p += segSize;
        seg[p] = val;
        while (p > 1) {
            p >>= 1;
            seg[p] = seg[p * 2] ^ seg[p * 2 + 1];
        }
    }
    function rangeQuery(l, r) {
        let res = 0;
        l += segSize;
        r += segSize;
        while (l <= r) {
            if (l & 1) res ^= seg[l++];
            if (!(r & 1)) res ^= seg[r--];
            l >>= 1;
            r >>= 1;
        }
        return res;
    }
    function pathQuery(u, v) {
        let mask = 0;
        while (head[u] !== head[v]) {
            if (depth[head[u]] < depth[head[v]]) {
                [u, v] = [v, u];
            }

            mask ^= rangeQuery(pos[head[u]], pos[u]);
            u = parent[head[u]];
        }
        if (depth[u] > depth[v]) [u, v] = [v, u];
        mask ^= rangeQuery(pos[u], pos[v]);
        return (mask & (mask - 1)) === 0;
    }
    const answer = [];
    for (const q of queries) {
        const parts = q.split(" ");
        if (parts[0] === "update") {
            const u = Number(parts[1]);
            const c = parts[2];

            s = s.slice(0, u) + c + s.slice(u + 1);
            update(pos[u], 1 << (c.charCodeAt(0) - 97));
        } else {
            const u = Number(parts[1]);
            const v = Number(parts[2]);

            answer.push(pathQuery(u, v));
        }
    }
    return answer;
};
