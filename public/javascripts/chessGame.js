const socket = io();
socket.emit("churan")
socket.on("lololo", () => {
    console.log("lololo")
})