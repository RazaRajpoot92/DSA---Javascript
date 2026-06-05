/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    const ans = solve(num2) - solve(num1 - 1);
    return Number(ans);
};

function solve(limit) {
    if (limit < 0) return 0n;

    const digits = String(limit);
    const memo = new Map();

    function dfs(pos, tight, started, prev2, prev1, len) {
        if (pos === digits.length) {
            return [1n, 0n]; 
        }

        const key = `${pos}|${tight}|${started}|${prev2}|${prev1}|${len}`;

        if (!tight && memo.has(key)) {
            return memo.get(key);
        }

        const maxDigit = tight ? Number(digits[pos]) : 9;

        let totalCount = 0n;
        let totalWavy = 0n;

        for (let d = 0; d <= maxDigit; d++) {
            const nextTight = tight && d === maxDigit;

            // still leading zeros
            if (!started && d === 0) {
                const [cnt, wav] = dfs(
                    pos + 1,
                    nextTight,
                    false,
                    -1,
                    -1,
                    0
                );

                totalCount += cnt;
                totalWavy += wav;
                continue;
            }

            if (!started) {
                const [cnt, wav] = dfs(
                    pos + 1,
                    nextTight,
                    true,
                    -1,
                    d,
                    1
                );

                totalCount += cnt;
                totalWavy += wav;
                continue;
            }

            let add = 0n;

            if (len >= 2) {
                const peak =
                    prev1 > prev2 && prev1 > d;

                const valley =
                    prev1 < prev2 && prev1 < d;

                if (peak || valley) add = 1n;
            }

            const [cnt, wav] = dfs(
                pos + 1,
                nextTight,
                true,
                prev1,
                d,
                len + 1
            );

            totalCount += cnt;
            totalWavy += wav + add * cnt;
        }

        const result = [totalCount, totalWavy];

        if (!tight) {
            memo.set(key, result);
        }

        return result;
    }

    return dfs(0, true, false, -1, -1, 0)[1];
}