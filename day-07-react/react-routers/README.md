# React Routers Project

A modern React project demonstrating routing, navigation, and a responsive UI with Tailwind CSS.

## Features

- **React Router** for navigation (`Home`, `About`, `Contact`, `Login`, `Get Started`)
- **Responsive Header & Footer** with social links and logo
- **Contact Form** with styled inputs
- **Modern UI** using Tailwind CSS
- **Accessible** and mobile-friendly

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd react-routers
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the development server

```sh
npm run dev
```

or

```sh
npm start
```

### 4. Open in your browser

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  components/
    Header/
      Header.jsx
    Footer/
      Footer.jsx
    Home/
      Home.jsx
    About/
      About.jsx
    Contact/
      Contact.jsx
    ...
  App.jsx
  main.jsx
public/
  logo.jpg
  images/
    Remote1.png
    Remote2.png
```

## Notes

- **Logo not showing?**  
  Place your `logo.jpg` inside the `public` folder.
- **Image 404 errors?**  
  Make sure any referenced images (like `Remote1.png`, `Remote2.png`) exist in `public/images/` or update the URLs to working images.
- **SVG warnings?**  
  All SVG attributes use camelCase (e.g., `fillRule`, `clipRule`).

## Customization

- Update social links in `Footer.jsx` to your own.
- Change colors and branding in Tailwind classes as needed.

## License

MIT

---

**Happy coding!**
