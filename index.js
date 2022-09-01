let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let ulLi = document.getElementById("ul-li")

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for(let i =0 ; i<myLeads.length; i++) {
       // listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
       listItems += `
       <li>
          <a href='${myLeads[i]}' target='_blank'> 
            ${myLeads[i]}
          </a>
       </li>`
    }
    ulLi.innerHTML = listItems
}
