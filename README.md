------------------------
Getting The App to work:
------------------------
0) First clone this repository into a new folder called clone.
1) Install npm on your computer. Go to https://nodejs.org/en/download/, select your OS and download the Long term support(LTS).
2) Verify that the installation worked by running ( npm --version ) in your command line.
    If you see a version show up, then the installation worked successfully.
3) Use npm to install create react app by running ( npm install -g create-react-app ) in you command line.
4) Now create a new folder called ejeka. Open your command line and cd into that folder.
5) Run ( create-react-app react-app ) and give it a little time ( I lied. *Give it a lot of time ;) ).
6) If all goes well you should have a new folder called react-app within ejeka.
7) Now this is very IMPORTANT, remember to cd into the react-app folder from within your command line and leave it running, we'll come back to it later.
8) Now open the ejeka folder in your text editor, go to the "public" folder and delete everything in it.
9) Do thesame for the "src" folder by deleting everything in it.
10) Now go to your clone folder, look for the "package.json" file and copy everything in it.
11) Go to your ejeka folder, look for it's "package.json" clear everything and paste what you just copied from the clone's package.json.
12) Now go to your clone folder again, look for it's "public" folder and copy every file in it. Paste it in  ejeka's  "public" folder (which must have been empty till now)
13) Repeat procedure 12 but this time copy every file in the "src" folder within clone and paste it in the "src" folder within ejeka.
14) Now go to your command line once more and run ( npm install )
15) Lastly run ( npm start ) and Voila! You are welcome.
