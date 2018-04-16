
	var
		turn = "X",
		score,
		moves;


	function set(e) {
    // debugger;
  		if (e.target.innerHTML == "") {
        // debugger
        e.target.innerHTML = turn
        turn = turn === "X" ? "O" : "X";
        e.target.className = "cell coloredcell";
        moves += 1;
  			return;
		    }
		}

	// init();
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("grid").addEventListener("click", set, false);
  });
