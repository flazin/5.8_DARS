const contEl = document.querySelector(".container");

const sorov = new XMLHttpRequest();

sorov.open(
  "GET",
  "https://api.api-ninjas.com/v1/webscriper?url=https://shop.bmw.ru/"
);

sorov.setRequestHeader("X-Api-Key", "U/LMDglXOMvkQRpb2tXDbA==bAeFWRlv23g0510R");
sorov.send();

sorov.addEventListener("load", () => {
  const data = JSON.parse(sorov.response);
  contEl.innerHTML = data.data;
});
