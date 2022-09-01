let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
let ulLi = document.getElementById("ul-li")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}


tabBtn.addEventListener("click", function() {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
 })
})

deleteBtn.addEventListener("dblclick", function() {
  //console.log("double clicked")
  localStorage.clear()
  myLeads = []
  render(myLeads) //clearing the DOM
})

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

   // console.log( localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = ""
    for(let i =0 ; i<leads.length; i++) {
       // listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
       listItems += `
       <li>
          <a href='${leads[i]}' target='_blank'> 
            ${leads[i]}
          </a>
       </li>`
    }
    ulLi.innerHTML = listItems
}

