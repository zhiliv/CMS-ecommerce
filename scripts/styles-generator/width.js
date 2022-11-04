/*
 * Модуль для создания стилей размеров
 * Создаются классы для height(высоты) и width(ширины)
 */

const fs = require('fs') // модяль для работы с файловой системой
let data = ''
for (let i = 1; i <= 100; i++)
  data += `
  .w-${i}{
    width: ${i}% !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .mw-${i} {
    max-width: ${i}% !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .vw-${i} {
    width: ${i}vh !important;
  }
  `
for (let i = 1; i <= 100; i++)
  data += `
  .min-vw-${i} {
    min-width: ${i}vh !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .max-vw-${i} {
    max-width: ${i}vh !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .min-w-${i}{
    min-width: ${i}% !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .w-p-${i}{
    width: ${i}px !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .mw-p-${i} {
    max-width: ${i}px !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .min-w-p-${i} {
    min-width: ${i}px !important;
  }
  `

fs.writeFileSync('width.css', data)
