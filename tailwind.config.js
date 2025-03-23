module.exports = {
    purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      options: {
        safelist: [], // Add any classes you want to keep
      },
    },
    // other configurations...
  };