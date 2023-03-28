let wightinkg = document.getElementById("wightinkg");
let fisnumb = document.getElementById("fisnumb");
let rednot = document.getElementById("rednot");

let removetime1 = "";
let removetime2 = "";

fisnumb.addEventListener("keyup", () => {
  if (+fisnumb.value <= 0 || isNaN(fisnumb.value)) {
    rednot.innerHTML = `<span style="color:red">Please Enter Valiad Number</span>`;

    clearTimeout(removetime1);
    removetime1 = setTimeout(() => {
      fisnumb.value = "";
      wightinkg.innerHTML = "";
      rednot.innerHTML = "";
    }, 4000);
  } else {
    wightinkg.innerHTML = (+fisnumb.value / 2.2).toFixed(2);
    clearTimeout(removetime2);
    removetime2 = setTimeout(() => {
      fisnumb.value = "";
      wightinkg.innerHTML = "";
    }, 10000);
  }
});
