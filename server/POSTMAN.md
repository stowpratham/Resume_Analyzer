# AI Resume Analyzer Backend - Postman Examples

## Register User
POST `http://localhost:5000/api/auth/register`

Headers:
- Content-Type: application/json

Body (raw JSON):
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePassword123"
}
```

## Login User
POST `http://localhost:5000/api/auth/login`

Headers:
- Content-Type: application/json

Body (raw JSON):
```json
{
  "email": "jane@example.com",
  "password": "securePassword123"
}
```

Response includes `token` in `data.token`.

## Upload Resume
POST `http://localhost:5000/api/resume/upload`

Headers:
- Authorization: Bearer <token>
- Content-Type: multipart/form-data

Body (form-data):
- Key: `resume`
- Value: select a file (.pdf, .doc, .docx)

## Get Resume Analysis
GET `http://localhost:5000/api/resume/<resumeId>`

Headers:
- Authorization: Bearer <token>

Response includes:
- `resumeInfo`
- `extractedText`

## Notes
- Use the token from login/register as `Authorization` header.
- Uploaded resume files are stored in `server/uploads`.
- For local development, run the backend from the server folder:
  - `cd server`
  - `npm install`
  - `npm run dev`
