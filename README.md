# Eitan Pucon - אתר תיירות בפוקון, צ'ילה

אתר מידע לתיירים ישראלים בפוקון, צ'ילה.

## התקנה והרצה

```bash
# התקנת dependencies
npm install

# הרצה בסביבת פיתוח
npm run dev

# בנייה לייצור
npm run build

# הרצה בסביבת ייצור
npm start
```

## מבנה האתר

- **דף הבית** (`/`) - סקירה כללית וקישורים מהירים
- **טיולים** (`/tours`) - רשימת כל הטיולים
  - **הר געש וויאריקה** (`/tours/volcano`) - מידע מלא על טיפוס ההר
  - **צניחה חופשית** (`/tours/skydiving`) - מידע על צניחה חופשית
- **משיכת כסף** (`/bank`) - מידע על כספומטים ועמלות
- **מכבסות** (`/laundry`) - מיקומי מכבסות

## טכנולוגיות

- Next.js 14
- TypeScript
- TailwindCSS
- Lucide Icons

## Deployment

האתר מוכן להעלאה ל-Vercel:

```bash
npm run build
```

או פשוט לחבר את הrepository לVercel והוא יבנה אוטומטית.

## רישיון

כל הזכויות שמורות © Eitan Pucon
