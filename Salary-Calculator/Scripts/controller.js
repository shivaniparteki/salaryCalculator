window.addEventListener("load", bindEvents);

function bindEvents() {
  document.getElementById("compute").addEventListener("click", computeIt);
}

function validation(bs) {
  // let bs = document.querySelector("#basicSalary").value;

  if (bs.length == 0) {
    document.querySelector("#error").innerText = "Please enter the basic salary";
    return false;
  }
  return false;
}


// let errordiv = document.querySelector("#error");
// errordiv.innerHTML = "";
function computeIt() {
  let bs = document.getElementById("basicsalary").value;
  if (validation(bs)) {
    return;
  }
  allowances.basicsalary = parseInt(bs);

  let fieldset = document.querySelector("fieldset");
  fieldset.innerHTML = "";

  for (let key in allowances) {
    if (typeof allowances[key] === "function") {
      let pTag = document.createElement("p");
      pTag.innerHTML = `${key.toUpperCase()} is &#8377;  ${
        isNaN(allowances[key]()) ? 0 : allowances[key]().toLocaleString("hi-IN")
      }`;
      fieldset.appendChild(pTag);
    }
  }
  // let spans = document.getElementsByTagName("span");
  // for(let i = 0;i < spans.length;i++)
  // {
  //   spans[i].innerText = allowances[spans[i].id]();
  // }

  //   document.getElementById('hra').innerHTML =  allowances.hra();
  //   document.getElementById('da').innerHTML =  allowances.da();
  //   document.getElementById('ta').innerHTML =  allowances.ta();
  //   document.getElementById('ma').innerHTML =  allowances.ma();
  //   document.getElementById('pf').innerHTML =  allowances.pf();
  //   document.getElementById('gs').innerHTML =  allowances.gs();
  //   document.getElementById('ns').innerHTML =  allowances.ns();
}
