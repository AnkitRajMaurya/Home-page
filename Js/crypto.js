fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
  .then(res => res.json())
  .then(data => {
    document.getElementById('cryptoPrices').innerHTML = `
    BTC: $${data.bitcoin.usd}<br>
    ETH: $${data.ethereum.usd}<br>
    DOGE: $${data.dogecoin.usd}
  `;
  })
  .catch(() => {
    document.getElementById('cryptoPrices').innerText = "Crypto Unavailable";
  });