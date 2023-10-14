/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars, import/no-duplicates
import { homePageAssets } from './data.js';
// eslint-disable-next-line no-unused-vars, import/no-duplicates
import { watchListAssets } from './data.js';

// const symbols = 'BTC,ETH'; // You can add or modify the symbols here
const targetUrl2 = encodeURIComponent(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?&id=1'
);

const xhr2 = new XMLHttpRequest();
xhr2.open(
  'GET',
  'https://lfz-cors.herokuapp.com/?url=' + targetUrl2);
xhr2.setRequestHeader(
  'X-CMC_PRO_API_KEY',
  '6d916365-b158-4d2a-9542-47a2ab51afd4'
);

xhr2.responseType = 'json';
xhr2.addEventListener('load', function () {
  console.log(xhr2.response);
});
xhr2.send();

function initializeApp(event) {
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
  });
  xhr.send();
  const rawAssets = xhr.response.data;
  console.log('rawAssets:', rawAssets);

  rawAssets.forEach(asset => {
    const processedAsset = {
      name: asset.name,
      price: asset.quote.USD.price.toFixed(2),
      percentChange: asset.percentChange,
      logo: asset.logo,
      cmcRank: asset.cmc_rank
    };

    homePageAssets.push(processedAsset);
  });
}

document.addEventListener(initializeApp, 'event');

// eslint-disable-next-line no-unused-vars
function renderAsset(asset) {
  const $asset = document.createElement('div');
  $asset.setAttribute('class', 'home-page-listing');

  const $logoContainer = document.createElement('div');
  $logoContainer.setAttribute('id', 'logo-container');

  const $name = document.createElement('div');
  $name.setAttribute('id', 'name');
  $name.innerText = asset.name;

  const $price = document.createElement('div');
  $price.setAttribute('id', 'price');

  const $percentChange = document.createElement('div');
  $percentChange.setAttribute('id', 'percent-change');

  const $heart = document.createElement('i');
  $heart.setAttribute('id', 'heart');

  $asset.appendChild($logoContainer);
  $asset.appendChild($name);
  $asset.appendChild($price);
  $asset.appendChild($percentChange);
  $asset.appendChild($heart);

  return $asset;
}
