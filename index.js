const express = require('express');
const app = express();

function gcd(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

app.get('/rayimbekoveldar7_gmail_com', (req, res) => {
    const x = req.query.x;
    const y = req.query.y;

    const xNum = Number(x);
    const yNum = Number(y);

    const isNatural = n => Number.isInteger(n) && n > 0;

    res.setHeader('Content-Type', 'text/plain');

    if (!isNatural(xNum) || !isNatural(yNum)) {
        res.send('NaN');
    } else {
        res.send(String(lcm(xNum, yNum)));
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});