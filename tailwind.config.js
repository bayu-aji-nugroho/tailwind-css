// tailwind.config.js
module.exports = {
    content: ['./webKopi/*.{html,js}'], // Sesuaikan dengan struktur proyek
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(90deg, rgba(112,63,0,1) 0%, rgba(207,137,49,1) 55%, rgba(255,194,118,1) 100%)',
        },
      },
    },
    plugins: [],
  };
  