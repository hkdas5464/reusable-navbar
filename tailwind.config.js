/** @type {import('tailwindcss').Config} */
     module.exports = {
       content: ["./src/**/*.{ts,tsx}"],
       theme: {
         extend: {
           colors: {
             'navbar-bg': '#EF4444', // Red background for Navbar
             'navbar-text': '#FFFFFF',
             'navbar-hover': '#9CA3AF',
           },
         },
       },
       plugins: [],
     };