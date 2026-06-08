const express = require('express');
const app = express();

function gcd(a, b) {
    while (b > 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

function handle(req, res) {
    const x = req.query.x;
    const y = req.query.y;

    const isNatural = (n) => /^\d+$/.test(n) && BigInt(n) > 0n;

    res.setHeader('Content-Type', 'text/plain');

    if (!isNatural(x) || !isNatural(y)) {
        res.send('NaN');
    } else {
        const result = lcm(BigInt(x), BigInt(y));
        res.send(result.toString());
    }
}

app.get('/rayimbekoveldar7_gmail_com', handle);
app.get('/', handle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});