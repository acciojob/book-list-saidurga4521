//your JS code here. If required.
const titleE1=document.getElementById('title')
const authorE1=document.getElementById('author')
const ISBNE1=document.getElementById('isbn')
const btnE1=document.getElementById('submit')
let tbody=document.getElementById('book-list')
btnE1.addEventListener('click',()=>{
	var tr=document.createElement('tr')
	var td1=document.createElement('td')
	var td2=document.createElement('td')
	var td3=document.createElement('td')
	var btn=document.createElement('button')
	btn.classList.add("delete")
	btn.textContent = "Delete"
	td1.textContent = titleE1.value
    td2.textContent = authorE1.value
	td3.textContent = ISBNE1.value
	btn.addEventListener('click', () => {
        tbody.removeChild(tr)
    })
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(btn)
	tbody.appendChild(tr)
	
	
})