/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */

var assignTasks = function (servers, tasks) {
    let idle = [];
    let busy = [];
    let ans = new Array(tasks.length);

    function push(heap, val, compare) {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (compare(heap[p], heap[i]) <= 0) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    }

    function pop(heap, compare) {
        let top = heap[0];
        let last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (i * 2 + 1 < heap.length) {
                let left = i * 2 + 1;
                let right = i * 2 + 2;
                let best = left;
                if (right < heap.length && compare(heap[right], heap[left]) < 0) {
                    best = right;
                }
                if (compare(heap[i], heap[best]) <= 0) break;
                [heap[i], heap[best]] = [heap[best], heap[i]];
                i = best;
            }
        }
        return top;
    }

    function compareIdle(a, b) {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    }

    function compareBusy(a, b) {
        return a[0] - b[0];
    }

    for (let i = 0; i < servers.length; i++) {
        push(idle, [servers[i], i], compareIdle);
    }

    let time = 0;

    for (let j = 0; j < tasks.length; j++) {
        time = Math.max(time, j);

        if (idle.length === 0 && busy.length > 0) {
            time = Math.max(time, busy[0][0]);
        }

        while (busy.length > 0 && busy[0][0] <= time) {
            let [_, weight, index] = pop(busy, compareBusy);
            push(idle, [weight, index], compareIdle);
        }

        let [weight, index] = pop(idle, compareIdle);
        ans[j] = index;
        push(busy, [time + tasks[j], weight, index], compareBusy);
    }

    return ans;
};
