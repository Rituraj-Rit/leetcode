/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }

    let arr = [];

    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    // Extra rotations remove
    k = k % arr.length;

    // Right rotate
    for (let i = 0; i < k; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }

    let newHead = new ListNode(arr[0]);
    current = newHead;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return newHead;
};