

// README (short)
# Time Management Backend


1. Copy files into a folder.
2. Create a .env from .env.example and set values.
3. Run `npm install`.
4. Run `npm run dev` to start the server.


API endpoints:
- POST /api/auth/signup
- POST /api/auth/login
- CRUD /api/goals
- CRUD /api/tasks (+ /add-time/:id)
- CRUD /api/notes
- CRUD /api/links
- CRUD /api/habits (+ /done/:id)
- GET /api/progress


---


// Extra suggestions
- Add rate-limiter, request sanitization, and request size limits for production.
- Add role-based access if you plan multi-user organizations.
- Add tests (jest/supertest) and CI pipeline.


---


// End of document