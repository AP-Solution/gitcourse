let header = document.querySelector('header');
let cont = document.createElement('div');
cont.cssText = `
	width: 50%;
	height: 200px;
	background-color: red;
`;

header.style.cssText = `
	background-color: lightblue;
	width: 100%;
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;