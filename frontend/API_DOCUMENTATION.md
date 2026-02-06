# PaperPop API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All template endpoints require authentication via JWT token stored in HTTP-only cookies.

---

## Template APIs

### 1. Generate Template
Create and save a new template.

**Endpoint:** `POST /api/templates/generate`

**Request Body:**
```json
{
  "title": "Happy Birthday",
  "subtitle": "John Doe",
  "date": "March 16, 2024",
  "time": "5:00 PM",
  "location": "123 Main St",
  "phone": "+1234567890",
  "message": "Join us for a celebration!",
  "templateType": "birthday",
  "variant": 5,
  "imageUrl": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Template generated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f191e810c19729de860ea",
    "title": "Happy Birthday",
    "subtitle": "John Doe",
    "templateType": "birthday",
    "variant": 5,
    "createdAt": "2024-03-16T10:00:00.000Z"
  }
}
```

---

### 2. Search Templates
Search templates by query, type, or variant.

**Endpoint:** `GET /api/templates/search`

**Query Parameters:**
- `q` (string, optional): Search query
- `type` (string, optional): Template type (birthday, assembly, announcement, achievement)
- `variant` (number, optional): Template variant number
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Results per page (default: 20)

**Example:**
```
GET /api/templates/search?q=birthday&type=birthday&page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "total": 45,
  "page": 1,
  "pages": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Happy Birthday",
      "subtitle": "John Doe",
      "templateType": "birthday",
      "variant": 5,
      "createdAt": "2024-03-16T10:00:00.000Z"
    }
  ]
}
```

---

### 3. Download Template
Get template data for PDF generation.

**Endpoint:** `POST /api/templates/download`

**Request Body:**
```json
{
  "templateId": "507f1f77bcf86cd799439011"
}
```

**Alternative:** `GET /api/templates/download?id=507f1f77bcf86cd799439011`

**Response:**
```json
{
  "success": true,
  "message": "Template retrieved successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Happy Birthday",
    "subtitle": "John Doe",
    "date": "March 16, 2024",
    "time": "5:00 PM",
    "location": "123 Main St",
    "phone": "+1234567890",
    "message": "Join us!",
    "templateType": "birthday",
    "variant": 5,
    "imageUrl": "https://example.com/image.jpg"
  }
}
```

---

### 4. Get All Templates
Retrieve all templates for the authenticated user.

**Endpoint:** `GET /api/templates`

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Results per page (default: 50)

**Example:**
```
GET /api/templates?page=1&limit=20
```

**Response:**
```json
{
  "success": true,
  "count": 20,
  "total": 100,
  "page": 1,
  "pages": 5,
  "data": [...]
}
```

---

### 5. Get Single Template
Get a specific template by ID.

**Endpoint:** `GET /api/templates/:id`

**Example:**
```
GET /api/templates/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Happy Birthday",
    ...
  }
}
```

---

### 6. Update Template
Update an existing template.

**Endpoint:** `PUT /api/templates/:id`

**Request Body:**
```json
{
  "title": "Updated Title",
  "message": "Updated message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Template updated successfully",
  "data": {...}
}
```

---

### 7. Delete Template
Delete a template by ID.

**Endpoint:** `DELETE /api/templates/:id`

**Example:**
```
DELETE /api/templates/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "message": "Template deleted successfully"
}
```

---

## Authentication APIs

### 1. Signup
Create a new user account.

**Endpoint:** `POST /api/auth/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "507f191e810c19729de860ea",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

### 2. Login
Authenticate a user.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "507f191e810c19729de860ea",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

### 3. Logout
Log out the current user.

**Endpoint:** `POST /api/auth/logout`

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### 4. Get Current User
Get the authenticated user's information.

**Endpoint:** `GET /api/auth/me`

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "507f191e810c19729de860ea",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## Upload API

### Upload Image
Upload an image file.

**Endpoint:** `POST /api/upload`

**Request:** multipart/form-data with `file` field

**Response:**
```json
{
  "success": true,
  "url": "https://example.com/uploads/image.jpg"
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Server Error

---

## Frontend Integration

### Using the API Service

```javascript
import apiService from '@/services/api';

// Generate template
const result = await apiService.generateTemplate({
  title: 'Birthday Party',
  templateType: 'birthday',
  variant: 5
});

// Search templates
const templates = await apiService.searchTemplates({
  q: 'birthday',
  type: 'birthday',
  page: 1
});

// Download template
const template = await apiService.downloadTemplate('templateId');
```

### Using the Hook

```javascript
import { useTemplateApi } from '@/hooks/useTemplateApi';

function MyComponent() {
  const { loading, error, generateTemplate, searchTemplates } = useTemplateApi();

  const handleGenerate = async () => {
    try {
      const result = await generateTemplate(templateData);
      console.log('Success:', result);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}
```

---

## Setup Instructions

1. **Install MongoDB** (see SETUP_MONGODB.md)

2. **Configure Environment Variables** (.env.local):
```
MONGODB_URI=mongodb://localhost:27017/paperpop
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

3. **Start the Development Server:**
```bash
npm run dev
```

4. **Test the APIs:**
- Use Postman or curl to test endpoints
- Or use the frontend integration

---

## Notes

- All template endpoints require authentication
- JWT tokens are stored in HTTP-only cookies
- Images can be uploaded before creating templates
- Templates are user-specific (users can only access their own templates)
