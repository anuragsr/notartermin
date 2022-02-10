Steps for making changes:


1. First, navigate to the project directory and run this command:

 `npm install`

2. Then, you can run:

 `npm start`

This runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

3. For changes:

	a. NavBar changes - src/App.js line 48 onwards
	b. Home Page changes - src/components/Home.js line 93 onwards
	c. Form Steps changes - src/components/Steps.js. Here there are functions named `Step1`, `Step2` etc
		 Look inside the `return()` of each function for appropriate HTML. For CSS, I used SCSS (mostly similar to CSS), all main CSS is in - src/scss/common.scss
	d. For email related changes, in `backend` folder, edit common.php, line 21 onwards. After change, transfer to `backend` folder on the site.

4. To build the app so that you can host the files:

 `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
You can see the files you need to transfer in the `build` folder


5. Then use an FTP program (I use FileZilla)

Host: notartermin.com
User: anuragsr@notartermin.com
Pass: pCvSwYtv4MNH
Port: 21 or can be blank


5. Transfer the files from `build` folder to the site's directory. 

Let me know if there are any questions :)

