"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(a, b) {
    let ans = [];
    let curA = 0;
    let curB = 0;
    while ((curA < a.length) && (curB < b.length)) {
        if (a[curA] <= b[curB]) {
            ans.push(a[curA++]);
        }
        else {
            ans.push(b[curB++]);
        }
    }
    while (curA < a.length) {
        ans.push(a[curA++]);
    }
    while (curB < b.length) {
        ans.push(b[curB++]);
    }
    return ans;
}
exports.merge = merge;
