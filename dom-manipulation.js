
	var N_SIZE = 3,
		EMPTY = "&nbsp;",
		boxes = [],
		turn = "X",
		score,
		moves;


	function set(e) {
    debugger;
		if (e.target.innerHTML !== EMPTY) {
      e.target.innerHTML = turn
      turn = turn === "X" ? "O" : "X";
      moves += 1;
			return;
		}

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("grid").addEventListener("click", set, false);
  });
