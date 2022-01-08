var div = document.createElement("div");
var tipAmount = document.getElementById("tipamount");

function getTip() {
  let billAmount = document.getElementById("totalBill").value;
  let service = document.getElementById("percentage").value;
  let people = document.getElementById("people").value;
  //console.log(billAmount, service, people);
  let tip = ((billAmount * service) / 100 / people).toFixed(2);

  div.innerHTML = `<h1>TIP AMOUNT  <br>
      $${tip}
  
    <br>  Each </h1>`;

  tipAmount.append(div);
}
