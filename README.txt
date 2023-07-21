chat-app

I built this program over windows so its probably best to work on this there.


Prerequesits:

	Start by ensuring that you have Node.js installed, it can be installed here: 
		
		https://nodejs.org/en/download

	Once it is installed, open command prompt and navigate into the "chat-app" directory

	From there you will need to type in two commands:

		npm install express

	and

		npm install socket.io
	

	Once you have dont this you are ready to use the program.


Server initiation:

	If you arent already, navigate to chat-app in the command prompt.

	Once there enter:

		node index.js

	This should start locally hosting the website through port 3001.


Website usage:

	Open up prefered web-browser and open 2 tabs, both being: 

		http://localhost:3001/

	There you should be able to type something into either of the inputs and see that message appear on the other tab.


Server termination:

	In the command prompt press:

		ctrl + c

