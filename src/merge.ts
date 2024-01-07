export function merge(a: Array<number>, b: Array<number>) :Array<number> {
    let ans: Array<number> = [];
    let curA: number = 0;
    let curB: number = 0;
    while ((curA < a.length) && (curB < b.length)) {
        if (a[curA] <= b[curB]) {
            ans.push(a[curA++]);
        } else {
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
