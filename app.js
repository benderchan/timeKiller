const board = document.querySelector("#board");
const input = document.querySelector(".input")

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "white", "salmon"]

function generateBoard() {
	for (let i = 0; i < input.value; i++) {
		if (input.value > 500) {
			alert("Add a number <500")
			break
		}
		else {
		const square = document.createElement("div")
		square.classList.add("square");
		square.addEventListener("mouseover", () => {
			setColor(square)
		});
		square.addEventListener("mouseleave", () => {
			removeColor(square)
		});
		board.append(square);
		}
		document.getElementById("btn").disabled = true;
	 }

}


function setColor(elem) {
	const color = getRandomColor()
	elem.style.backgroundColor = color
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}
function removeColor(elem) {
	elem.style.backgroundColor = "#1d1d1d"
	elem.style.boxShadow = `0 0 2px #000`
}


function getRandomColor(params) {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
