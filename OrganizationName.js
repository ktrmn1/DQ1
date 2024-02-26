// Функция для случайного названия организации1
export function RandomOrganizationName() {
    const organizations = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const randomIndex = Math.floor(Math.random() * organizations.length);
    return organizations[randomIndex];
  }
