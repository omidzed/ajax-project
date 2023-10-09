/* eslint-disable no-console */
const targetUrl = encodeURIComponent(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
xhr.setRequestHeader(
  'X-CMC_PRO_API_KEY',
  '6d916365-b158-4d2a-9542-47a2ab51afd4'
);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.response);
  console.log(xhr.status);
  console.log(xhr.response.data[0].name);
  console.log(
    xhr.response.data[0].circulating_supply + ' ' + xhr.response.data[0].symbol
  );
  console.log(
    '$ ' + parseFloat(xhr.response.data[0].quote.USD.price.toFixed(2))
  );
  console.log(xhr.response.data[0].name);
  console.log(xhr.response.data[0].name);
  console.log(xhr.response.data[0].name);
  console.log(xhr.response.data[0].name);
});
xhr.send();
