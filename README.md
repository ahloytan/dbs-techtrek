<a name="readme-top"></a>
# ![dbs](https://github.com/ahloytan/dbs-techtrek/assets/28771440/3e0d3888-bfb9-4600-b832-d4ced17574b7) DBS TechTrek Hackathon 2024 
A proof of concept full-stack web application for the DBS TechTrek Hackathon on 20th January 2024

# Docs
- API documentation: https://docs.google.com/document/d/1hWhf-5ytvn-O1q9UHb7SWASgIA3gR9MakcC6iGB-Bwk/edit
- [How to Set Up](#how-to-set-up)
- [Tech Stack](#tech-stack)
- [Contact Me](#contact-me)

# How to set-up

## Pre-requisites
1. Ensure you have [Node.js](https://nodejs.org/en/download) installed
2. Node.js (v18.18.0) | npm (v10.2.0)
3. Ensure you have [WAMP](https://www.wampserver.com/en/) or [MAMP](https://www.mamp.info/en/downloads/)


## Frontend
1. Open command prompt, type in `cd frontend`
2. If this is your first time setting up, type `npm i`
3. Launch the project using `npm run dev`

## Backend
1. Ensure that you have a `.env` file with all the credentials in the root folder
2. Launch WAMP/MAMP
3. Load the `.sql` script located in `backend/sql_scripts`
4. Open command prompt, type in `cd backend`
5. If this is your first time setting up the project, type `npm i`
6. You will need an `.env` file that contains the following variables
```
CHATGPT_API=""
BARD_COOKIE="" 
TELEGRAM_BOT_TOKEN=""
FE_ENDPOINT=""
SECRET=""
DB_HOST="" 
DB_USERNAME="" 
DB_PASSWORD="" 
DB_DATABASE="" 
DB_PORT=
```
8. Launch the project using `npm run start`

## Deployment
1. If you have not set up the deployment projects, head over to Vercel and create 2 repository on your own (1 for the frontend, another for the backend)
2. On the Vercel dashboard for your frontend project, you will have to set the following 2 environment variables. Alternatively, you can create a `.env` and place it in your frontend root folder
3. ![Untitled](https://github.com/ahloytan/dbs-techtrek/assets/28771440/f57d601e-0bc4-45aa-9f20-704881f8b2d9)
4. Both frontend and backend is deployed on Vercel
5. To deploy the frontend, navigate to the `frontend` root folder, type in `npm run build`, followed by `vercel .`
6. To deploy the backend, navigate to the `backend` root folder, followed by `vercel .`
7. By default, authentication is required when you are in `Staging`. Hence, if you want to test the API calls, go ahead and switch off the Vercel Authentication (remember to switch it back on after you are done) or you can simply deploy it to `Production` 
8. ![Staging](https://github.com/ahloytan/dbs-techtrek/assets/28771440/16232e9c-d9df-41c8-9bf4-a66af407e883)
9. Once you are satisfied with the previews, you can deploy to production by typing `vercel --prod`


<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Tech Stack

## Frontend
### Framework
[Next.js](https://nextjs.org/), [React.js](https://react.dev/), [Redux](https://redux.js.org/) <br>
![My Skills](https://skillicons.dev/icons?i=next,react,redux&perline=3)

### Styling
[Material UI](https://mui.com/), [Tailwind](https://tailwindcss.com/) <br>
![My Skills](https://skillicons.dev/icons?i=materialui,tailwind&perline=3)

## Backend
[Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/), [MySQL](https://www.mysql.com/) <br>
![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql&perline=3)

## Deployment
[Vercel](https://vercel.com/), [Firebase](https://firebase.google.com/) <br>
![My Skills](https://skillicons.dev/icons?i=vercel,firebase&perline=3)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Libraries
1. [apexcharts](https://apexcharts.com/) - Visualisation
2. [axios](https://www.npmjs.com/package/axios) - HTTP requests
3. [date-fns](https://www.npmjs.com/package/date-fns) - Date formatting
4. [export-to-csv](https://www.npmjs.com/package/export-to-csv) - Export

5. [bcrypt](https://www.npmjs.com/package/bcrypt) - Password hasher
6. [mysql2](https://www.npmjs.com/package/mysql2) - MySQL driver
7. [telegraf](https://www.npmjs.com/package/telegraf) - Telegram bot
8. [bard](https://www.npmjs.com/package/bard-ai-google) - Bard
9. [chatgpt](https://github.com/PawanOsman/ChatGPT) - ChatGPT
10. [ocr](https://www.npmjs.com/package/ocr-space-api-wrapper) - Optical character recognition
11. [jwt](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token
12. [firebase-admin](https://www.npmjs.com/package/firebase-admin) - Firebase SDK

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Contact Me
1. To explore more of my works, head over to [Portfolio Website](https://ahloytan.netlify.app)
2. Feel free to contact me if there are issues or if there are opportunities that I can help you with!

<p align="right">(<a href="#readme-top">back to top</a>)</p>
