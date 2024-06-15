# Fetch Assignment Instructions

Please Note: This will be running on PORT 8000

1) Download the file by clicking the green coding button and selecting "Download ZIP"
![image](https://github.com/BrookeKanonik/assignment-fetch/assets/117051601/fffc22ce-b534-4e2f-8e5c-dbe7c45db016)

2) Extract the file and then open it in the editor of your choice (Visual Studio Code is what I use)

IF YOU DO NOT HAVE NODE please go to https://nodejs.org/en and download node so that you will be able to run the code

3) In your editor, open the terminal and enter the command "npm install" (make sure you are in the right folder!)

If you have the following, you may need to cd assignment-fetch-main to go into an additional folder

![image](https://github.com/BrookeKanonik/assignment-fetch/assets/117051601/5fbf51ea-bf53-4dd8-badb-c1d48d7dc910)

4) Once you have your node_modules folder and all dependencies installed, run "npm start" on the command line

If you are using Postman to test the code, please follow the below instructions:

First, create a POST request with the URL localhost:8000/receipts/process and add your testing JSON in the Body (raw) section as shown below

![image](https://github.com/BrookeKanonik/assignment-fetch/assets/117051601/2fdf5b8a-1352-42e3-b075-3f55bc0e6c3c)

When you send the request, you will receive a generated id. Please copy that generated id to use for the get request

Create a GET request with the URL localhost:8000/receipts/:id/points and be sure to replace the :id with your copied id as shown below

![image](https://github.com/BrookeKanonik/assignment-fetch/assets/117051601/5317ad60-1006-409a-a5ab-2ccc4efd993c)

Once you hit the send button, you will receive a response with the total number of points
