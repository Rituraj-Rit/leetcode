/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let start = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    let end = leaveAlice < leaveBob ? leaveAlice : leaveBob;
    if (start > end) return 0;
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function count(date) {
        let month = Number(date.slice(0, 2));
        let day = Number(date.slice(3));
        let total = day;
        for (let i = 0; i < month - 1; i++) {
            total += days[i];
        }
        return total;
    }
    return count(end) - count(start) + 1;
};