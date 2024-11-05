## Hospital CRM - Download Instructions

1. Create a new folder named `hospital-crm`

2. Create the following folder structure:
```
hospital-crm/
├── src/
│   ├── components/
│   └── contexts/
├── server/
└── public/
```

3. Download all files into their respective locations:

Root files:
- package.json
- .env
- README.md
- eslint.config.js
- postcss.config.js
- tailwind.config.js
- tsconfig.json
- tsconfig.app.json
- tsconfig.node.json
- vite.config.ts
- index.html

src/ files:
- src/App.tsx
- src/main.tsx
- src/index.css
- src/vite-env.d.ts

src/components/ files:
- src/components/Sidebar.tsx
- src/components/Dashboard.tsx
- src/components/Patients.tsx
- src/components/Appointments.tsx
- src/components/Records.tsx
- src/components/UserManagement.tsx

src/contexts/ files:
- src/contexts/AuthContext.tsx

server/ files:
- server/index.js

4. After downloading all files:

```bash
cd hospital-crm
npm install
npm run build
npm start
```

The application will be available at http://localhost:3000

Default admin credentials:
- Email: admin@hospital.com
- Password: admin123