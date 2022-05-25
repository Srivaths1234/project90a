function adduser() {
	player1_name = document.getElementById("player1_name").value;
	player2_name = document.getElementById("player2_name").value;

	localStorage.getItem("player1_name");
    localStorage.getItem("player2_name");

	window.location.replace("game_page.html");
}