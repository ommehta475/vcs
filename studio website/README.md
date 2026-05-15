# Visual Capture Studio - Professional Photography & Videography Website

A modern, responsive, and luxurious website template for a photography and videography studio. Built with HTML5, CSS3, and JavaScript with a dark cinematic theme featuring gold accents.

## 📁 File Structure

```
Visual Capture Studio/
├── index.html       # Main website file
├── styles.css       # Styling (Black, Gold, White theme)
├── script.js        # Interactive features and animations
└── README.md        # This file
```

## 🎨 Design Features

- **Color Scheme**: Black, Gold, White (luxury cinematic theme)
- **Typography**: Poppins, Montserrat, Cinzel, Playfair Display
- **Responsive Design**: Mobile-friendly and optimized for all devices
- **Animations**: Smooth scrolling, fade-in effects, hover interactions
- **Modern Layout**: Grid-based responsive sections

## 📱 Sections Included

1. **Navigation Bar** - Sticky header with smooth scrolling
2. **Hero Section** - Eye-catching intro with call-to-action buttons
3. **About Section** - Studio description and key features
4. **Pricing Section** - All 6 service packages with details
5. **Gallery Section** - Placeholder for your photography and videography
6. **Contact Section** - Contact form and business information
7. **Footer** - Copyright and services summary

## 🚀 Quick Start

### Option 1: Local File
1. Download all three files (index.html, styles.css, script.js) to the same folder
2. Double-click `index.html` to open in your browser
3. No server required!

### Option 2: Web Server
1. Upload all files to your web hosting provider
2. Access via your domain name
3. Files will work on any standard web server

## 🛠️ Customization Guide

### Update Studio Information

Edit these sections in `index.html`:

```html
<!-- Update phone number -->
<a href="tel:+977-9701924192">+977-9701924192</a>

<!-- Update email -->
<a href="mailto:ommehta192@gmail.com">ommehta192@gmail.com</a>

<!-- Update address -->
<p><strong>Address:</strong> Shreepur, Sunsari, Nepal</p>
```

### Add Social Media Links

In the Contact section, replace the `#` placeholders:

```html
<li><a href="https://facebook.com/yourpage" target="_blank">Facebook</a></li>
<li><a href="https://instagram.com/yourprofile" target="_blank">Instagram</a></li>
<li><a href="https://youtube.com/yourchannel" target="_blank">YouTube</a></li>
<li><a href="https://tiktok.com/@yourprofile" target="_blank">TikTok</a></li>
```

### Add Gallery Images

Replace placeholder gallery items with actual images:

```html
<!-- Change from -->
<div class="gallery-placeholder">
    <span>Wedding Photos</span>
</div>

<!-- To -->
<img src="path/to/your/image.jpg" alt="Wedding Photos">
```

### Modify Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #000000;      /* Black */
    --secondary-color: #D4AF37;    /* Gold */
    --accent-color: #FFFFFF;       /* White */
    --text-color: #F0F0F0;         /* Light Gray */
    --border-color: #333333;       /* Dark Gray */
}
```

### Update Pricing

Edit the pricing section in `index.html` to match your current rates:

```html
<h3>Wedding Photography</h3>
<p class="price">NPR 25,000</p>
```

### Change Fonts

Fonts are imported from Google Fonts in `index.html`. To use different fonts:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your desired fonts
3. Replace the font link in the `<head>` section
4. Update font names in `styles.css`

## 📧 Contact Form Setup

The contact form currently shows a success message. To actually send emails:

### Option 1: Using Formspree (Recommended - Free)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and add your form
3. Update the form in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Using Your Backend
Replace the form submission handler in `script.js` with your API endpoint.

## 🔍 SEO Optimization

To improve search engine visibility, update:

1. **Page Title** (in `index.html`):
```html
<title>Visual Capture Studio - Premium Photography & Videography Services</title>
```

2. **Meta Description** (add to `<head>` in `index.html`):
```html
<meta name="description" content="Premium photography and videography services in Nepal. Weddings, events, portraits, drone coverage.">
```

## 📈 Performance Tips

- Optimize images using tools like [TinyPNG](https://tinypng.com) before uploading
- Images should be under 100KB each for fast loading
- Use WebP format for better compression
- Keep images at 1200x800px or similar for gallery items

## 🌐 Hosting Options

### Free Hosting:
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free with git
- **Vercel**: Free for static sites
- **Firebase Hosting**: Google's free tier

### Paid Hosting:
- Most standard web hosts support HTML/CSS/JavaScript
- Shared hosting from $2-5/month typically works fine

## 🔧 Browser Compatibility

Works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This template is provided as-is for commercial use.

## 📞 Support

For issues or questions:
1. Check browser console for errors (F12 → Console)
2. Verify all files are in the same directory
3. Ensure proper MIME types if on a server
4. Test on different browsers

## 🎬 Pro Tips

1. **High-Quality Images**: Your portfolio images are crucial - use high-resolution photos
2. **Pricing Strategy**: Keep pricing competitive but profitable
3. **Regular Updates**: Update gallery and testimonials regularly
4. **Mobile Testing**: Always test on mobile devices
5. **Analytics**: Add Google Analytics to track visitor behavior

## 🚀 Next Steps

1. ✅ Add your logo (replace "Visual Capture Studio" text in navbar)
2. ✅ Add your portfolio images to gallery
3. ✅ Set up contact form with Formspree or similar
4. ✅ Update all contact information
5. ✅ Add social media links
6. ✅ Deploy to web hosting
7. ✅ Set up analytics
8. ✅ Promote on social media

---

**Created**: May 2026
**Template**: Visual Capture Studio - Premium Photography & Videography
**Built With**: HTML5, CSS3, JavaScript, Google Fonts
