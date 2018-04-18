
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


  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("grid").addEventListener("click", set, false);
  });


// document.getElementById("grid").foreach.innerHTML = ""
 // logic for resetting game - didn't get to finish it
// hacker news  ! ! mentat / Snailmail ! ? / use portfolio as excuse to email old recruiters/people again
// tripple a
// name drop recruiter's name in subject line
// use clearbit for ALL recruiters or whomevers. not just one, who knows what positions the others are looking to fill.
//
// Julia Clisham, MS  2nd degree connection2nd
// Talent Acquisition Partner at AAA Club Alliance
//
// Melanie L.  3rd degree connection3rd Melanie L. is a Premium member
// Corporate Talent Scout - AAA * GIG Car Share * A3 Ventures
//
// Ramon Millan  3rd degree connection3rd Ramon Millan is a Premium member
// Chief Technology Officer / CIO @ AAA
// Miami/Fort Lauderdale Area
// Current: CTO / CIO at AAA National
//
//
// dan grampsas  3rd degree connection3rd
// Senior Programmer Analyst at AAA
// San Francisco Bay Area
//
//
// Kimber Lockhart  3rd degree connection3rd Kimber Lockhart is a Premium member
// CTO at One Medical Group
// San Francisco Bay Area
//
// Stuart Parmenter  3rd degree connection3rd Stuart Parmenter is a Premium member
// VP Engineering at One Medical
// San Francisco Bay Area
//
// (Hi Melanie,) refered by "xxx" for fullstack developer position.
//
// Nicholas Bacon, Fullstack Engineer, Informational Interview Request
//
// Nicholas Bacon,Fullstack Engineer, following up on "company" position/work culture
//
// Hi Ramon, An Informational Interview Request by Nicholas Bacon, Ruby Professional.
//
//
// Hi Sharon,
//
// Today I applied for the Software Developer position I saw on LinkedIn and noticed you are a Recruiter at
// Synopsys.  While I do not know if you are the right person to connect with I definitely have the ___________
// experience that your team is seeking.  I am a skilled developer who can code quickly and also believe I would
//  be a great fit for your team.
//
// I know you are super busy, but I would really enjoy the opportunity to hop on a quick Skype/call to learn more
//  about what roles you and your team are recruiting for and to learn more about you and the company.  Might you
//  be free to chat for 15 minutes this week?
//
// In advance, I have attached my resume for your review and really appreciate your consideration and look forward to hearing from you.
//
//
//
//
// Wassam js new runtime approach
