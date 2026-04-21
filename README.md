# Background-Colour-Changer-

🎨 Color Changer Web App

A simple and interactive web application that allows users to change the background color of the page using buttons. This project is built using HTML, CSS, and JavaScript, and is perfect for beginners learning DOM manipulation and event handling.

---

🚀 Features

- 🔴 Change background to Red
- 🔵 Change background to Blue
- 🎲 Generate a Random Color from a predefined list
- 💡 Clean and minimal UI design

---

🛠️ Tech Stack

- HTML – Structure of the web page
- CSS – Styling and layout
- JavaScript – Functionality and interactivity

---

📂 Project Structure

project-folder/
│
├── index.html     # Main HTML file
├── style.css      # Styling file
├── script.js      # JavaScript logic
└── README.md      # Project documentation

---

📸 Preview

The app displays three buttons:

- Red
- Blue
- Random

Clicking any button changes the background color of the page accordingly.

---

⚙️ How It Works

- Event listeners are added to each button using "addEventListener".
- When a button is clicked:
  - The background color of the "body" is updated.
- For the random button:
  - A predefined array of colors is used.
  - A random index is generated using "Math.random()".

---

📌 Example Code Snippet

randomBtn.addEventListener('click', ()=>{
  let colours = ['red','blue','green','yellow'];
  let random = Math.floor(Math.random() * colours.length);
  document.body.style.backgroundColor = colours[random];
});

---

🎯 Learning Goals

- Understand DOM selection
- Learn event handling
- Practice JavaScript functions
- Work with arrays and random values

---

🤝 Contributing

Feel free to fork this repo and improve it. Suggestions and pull requests are welcome!

---

📄 License

This project is open-source and available under the MIT License.
