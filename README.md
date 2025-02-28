# **Code Snippet Manager (Spring Boot + React)**

A full-stack project for storing and managing code snippets. The backend is built with Spring Boot and Gradle, while the frontend is developed using React. This project helps me learn common technologies like Gradle, Spring Boot, and React.

---

## **How to Run the Project**

Rename the `development.secrets.properties` file to `secrets.properties` and update it with your settings in the backend files.  
Start the backend by running the main class. The backend API will be available at `http://localhost:8080`.  

For the frontend, navigate to the `frontend` directory, install dependencies with `npm install`, and start the development server using `npm run dev`. The frontend will be available at `http://localhost:3000`.

---

## **Project Overview**

- **Backend:** Spring Boot (Gradle)
- **Database:** H2 (dev) / PostgreSQL (prod)
- **API:** REST & Swagger
- **Security:** Optional (JWT, Basic Auth)
- **Frontend:** React
- **State Management:** useState, useEffect
- **Routing:** React Router
- **API Integration:** Fetch API
- **Styling:** Tailwind CSS / Styled Components / CSS Modules

---

## **To-Do List**

- **Security & Authentication**
  - [ ] Integrate Spring Security?
  - [ ] Do we need authentication? (JWT, OAuth?)
  - [ ] Restrict access to API routes
  - [ ] Define user roles and permissions

- **UI & Navigation (Frontend)**
  - [ ] Improve UI design
  - [ ] Improve form styling
  - [ ] Add a dark mode

- **Code Quality & Documentation**
  - [ ] Improve logging & error handling
  - [ ] Improve API error handling in frontend
  - [ ] Show user-friendly error messages
  - [ ] Handle loading states properly

- **Testing & Deployment**
  - [ ] Write unit tests (`SnippetService`, `SnippetRepository`)
  - [ ] API integration tests (`@SpringBootTest`)
  - [ ] React unit tests (Jest + React Testing Library)
  - [ ] Prepare for production
  - [ ] Dockerize backend & frontend
  - [ ] Deploy backend to a cloud provider
  - [ ] Deploy frontend to Vercel / Netlify
  - [ ] Connect backend and frontend via environment variables
