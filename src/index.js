function Ails(index = 0) {
	const ln = code[index]||"0"
	if (/^get \d+$/.test(ln)) {
		memory = n(code[ln.slice(4)]||"0")
	}
	if (ln == "output") {
		console.log(memory)
	}
	if (/^add \d+/.test(ln)) {
		memory += n(code[ln.slice(4)])
	}
	if (/^go \d+/.test(ln)) {
		index = Number(ln.slice(3)) - 1
	}
	if (/^store \d+/.test(ln)) {
		code[ln.slice(6)] = memory
	}
	if(/^jump \d+/.test(ln)){
		if(memory)index = Number(ln.slice(5)) - 1
	}
	if (/^multiply \d+/.test(ln)) {
		memory *= n(code[ln.slice(9)])
	}
	if (/^divide \d+/.test(ln)) {
		memory /= n(code[ln.slice(7)])
	}
	if (/^sub \d+/.test(ln)) {
		memory -= n(code[ln.slice(4)])
	}

	if (index != (code.length - 1)) window.requestAnimationFrame(() => Ails(index + 1))
}

function n(num) {
	if (!Number.isNaN(Number(num))) return Number(num)
	return num
}
let memory = 0