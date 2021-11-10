import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	html, body {
		max-width: 100vw;
		max-height: 100vh;
	}
	button {
		cursor: pointer;
		background: none;
		border: none;
		
		&:focus{
			outline: none;
		}
	}
	a {
		text-decoration: none;
	}
	svg, svg path {
		margin: 0;
	}
	:root {
		--black0: 		rgba(38, 38, 38, 1);
		--gray50: 		rgba(247, 247, 247, 1);
		--gray100: 		rgba(202, 199, 199, 1);
		--gray200: 		rgba(222, 226, 230, 1);
		--purple100:	rgba(150, 119, 217, 1);
		--purple200:	rgba(120, 78, 209, 1);
		--purple300:	rgba(69, 36, 122, 0.87);
		--purple400:	rgba(188, 116, 255, 1);
		--orange100:	rgba(242, 151, 68, 1);
		--orange200:	rgba(247, 112, 0, 1);
		--yellow50:		rgba(252, 244, 94, 1);
		--yellow100:	rgba(250, 250, 0, 1);
		--green50:		rgba(134, 224, 145, 1);
		--red50:		rgba(244, 64, 64, 1);
		--red100:		rgba(221, 104, 104, 1);
	}
	`;
