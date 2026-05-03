# Step School Website

Professional English Learning Center website built with HTML, CSS, and JavaScript.

## Website Structure

```
step-school/
├── index.html      # Main HTML file
├── styles.css      # CSS styles with animations
├── script.js       # JavaScript interactivity
├── netlify.toml    # Deployment configuration
├── .gitignore      # Git ignore file
└── README.md       # This file
```

## Features

### Sections
- **Hero** - Asosiy banner, statistik ma'lumotlar
- **About** - Step School haqida afzalliklar
- **Courses** - 3 ta asosiy kurs (General English, IELTS, Business English)
- **Teachers** - 4 nafar tajribali ustozlar
- **Results** - IELTS natijalar diagrammasi va o'quvchi fikrlari
- **Contact** - Aloqa ma'lumotlari va ariza formasi
- **Footer** - Havolalar va ijtimoiy tarmoqlar

### Design Features
- Zamonaviy gradient ranglar
- Animatsiyalar va hover effektlar
- Responsive design (telefon, planshet, kompyuter)
- Scroll animatsiyalar
- Counter animatsiyalar
- Floating cards
- Mobile navigation menu

## Local Testing

1. Loyiha papkasiga kiring:
```bash
cd C:\Users\user\CascadeProjects\step-school
```

2. `index.html` faylini brauzerda oching

## Deploy (Netlify)

### Variant 1: Netlify Drop
1. [netlify.com](https://netlify.com) saytiga kiring
2. "Sites" bo'limiga o'ting
3. "Add new site" → "Deploy manually"
4. `step-school` papkasini yuklang

### Variant 2: Netlify CLI
```bash
# Netlify CLI o'rnatish
npm install -g netlify-cli

# Loyiha papkasiga kiring
cd C:\Users\user\CascadeProjects\step-school

# Deploy
netlify deploy --prod --dir .
```

## Tahrirlash

Saytni tahrirlash uchun quyidagi fayllarni oching:

- **Matnlar**: `index.html` (qidirish: `Ctrl+F`)
- **Ranglar**: `styles.css` (CSS variables qismi)
- **Telefon/Email**: `index.html` (Contact section)

## Aloqa ma'lumotlarini yangilash

`index.html` faylida quyidagi qismlarni o'zgartiring:

```html
<!-- Telefon -->
<p>+998 (90) 123-45-67</p>

<!-- Email -->
<p>info@stepschool.uz</p>

<!-- Manzil -->
<p>Toshkent sh., Yunusobod tumani...</p>

<!-- Telegram -->
<a href="https://t.me/stepschool" ...
```

## Rasm yangilash

Hozirgi rasm URL manzillarini o'zingizning rasmlaringizga almashtiring:

```html
<img src="https://images.unsplash.com/..." alt="...">
```

O'z rasmingizni ishlatish uchun:
1. Rasmni loyiha papkasiga yuklang (masalan: `images/`)
2. URL ni local path ga almashtiring: `src="images/teacher1.jpg"`

## Technical Details

- **Framework**: Vanilla HTML/CSS/JS (no frameworks)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)
- **Images**: Unsplash (placeholder)
- **CSS**: Custom with CSS Variables
- **JS**: Intersection Observer API, smooth scroll

## License

Free to use for Step School.
