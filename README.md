📝** MERN Blog Platform**

A dynamic blogging platform built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, role-based access control, protected routes, and a responsive light/dark theme toggle.

🌟 **Features**

🔐 JWT Authentication (Login/Register)

🧑‍⚕️ Role-based Access Control (Admin, Doctor, Patient)

✍️ CRUD for Posts (Create, Edit, Delete, View)

🧭 Protected Dashboard Layout

🌗 Dark/Light Theme Toggle (Tailwind + ThemeProvider)

🚀 Built using pnpm, Vite, React, Tailwind CSS, and shadcn/ui


<img width="568" alt="Screenshot 2025-06-26 223240" src="https://github.com/user-attachments/assets/0ef857d3-1c44-4e56-b33c-a32972de8865" />

🚧 **Project Structure**

/client
  ├── src/
  │   ├── components/
  │   ├── context/
  │   ├── hooks/
  │   ├── pages/
  │   └── routes/
  └── tailwind.config.js
/server
  ├── controllers/
  ├── routes/
  ├── models/
  ├── middleware/
  └── server.js

⚙️** Getting Started**

📦** 1. Install Dependencies**

pnpm install

cd client && pnpm install


<img width="473" alt="Screenshot 2025-06-26 223544" src="https://github.com/user-attachments/assets/f36adf44-c5a1-40e1-9cb7-811328a5184f" />


<img width="451" alt="Screenshot 2025-06-26 223635" src="https://github.com/user-attachments/assets/06b6d29c-1993-4baf-bd37-c1459a956e6a" />



✨ **Light/Dark Theme**

Toggle button in the header lets users switch between modes. 

Theme is stored in localStorage and applied via the ThemeProvider context using Tailwind's darkMode: 'class' strategy.

🔐 **Authentication Notes**

Uses axios to send JWTs in Authorization headers

Role-based routing controls dashboard access and content visibility

Example roles: admin, doctor, patient


🧩 **Future Improvements**

🖼 Add blog cover image upload via Cloudinary

📅 Post scheduling

🌐 Multi-language support

🧠 Rich text editor for blog content (e.g., TipTap or Quill)


@JAMES MURACHIA
