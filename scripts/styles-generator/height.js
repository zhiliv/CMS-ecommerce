/*
 * Модуль для создания стилей размеров
 * Создаются классы для height(высоты) и width(ширины)
 */

const fs = require('fs') // модяль для работы с файловой системой
let data = ''
for (let i = 1; i <= 100; i++)
  data += `
  .h-${i}{
    height: ${i}% !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .mh-${i} {
    max-height: ${i}% !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .vh-${i} {
    height: ${i}vh !important;
  }
  `
for (let i = 1; i <= 100; i++)
  data += `
  .min-vh-${i} {
    min-height: ${i}vh !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .max-vh-${i} {
    max-height: ${i}vh !important;
  }
  `

for (let i = 1; i <= 100; i++)
  data += `
  .min-h-${i}{
    min-height: ${i}% !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .h-p-${i}{
    height: ${i}px !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .mh-p-${i} {
    max-height: ${i}px !important;
  }
  `

for (let i = 0; i <= 100; i++)
  data += `
  .min-h-p-${i} {
    min-height: ${i}px !important;
  }
  `

fs.writeFileSync('height.css', data)
