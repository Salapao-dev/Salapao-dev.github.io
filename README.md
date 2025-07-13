# 🚀 Salapao-Dev Portfolio

Portfolio เว็บไซต์ที่ทันสมัยและสวยงามสำหรับ Watcharapong Kongjan นักพัฒนา Full Stack

## ✨ คุณสมบัติหลัก

### 🎨 **การออกแบบที่ทันสมัย**
- ใช้ **Tailwind CSS** แทน Bootstrap
- การออกแบบที่ตอบสนอง (Responsive Design)
- เอฟเฟกต์แอนิเมชันที่ลื่นไหล
- ธีมสีที่สวยงามและเป็นมาตรฐาน

### 🛠️ **เทคโนโลยีที่ใช้**
- **HTML5** - โครงสร้างเว็บไซต์
- **Tailwind CSS** - Framework CSS ที่ทันสมัย
- **JavaScript (ES6+)** - ฟังก์ชันการทำงานแบบ Interactive
- **AOS (Animate On Scroll)** - เอฟเฟกต์แอนิเมชันเมื่อเลื่อน
- **Typed.js** - เอฟเฟกต์พิมพ์ข้อความ
- **Font Awesome** - ไอคอนที่สวยงาม

### 📱 **การตอบสนอง (Responsive)**
- รองรับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- Mobile-first approach
- Navigation ที่ปรับตัวได้
- Touch-friendly interface

### 🎯 **ส่วนประกอบหลัก**

#### 1. **Hero Section**
- แนะนำตัวด้วย Typed.js animation
- ปุ่ม CTA ที่ดึงดูด
- รูปโปรไฟล์ที่มีเอฟเฟกต์

#### 2. **About Section**
- ข้อมูลส่วนตัวและประสบการณ์
- Skill bars ที่มีแอนิเมชัน
- รูปภาพที่สวยงาม

#### 3. **Services Section**
- แสดงบริการที่เชี่ยวชาญ
- ไอคอนที่สื่อความหมาย
- Hover effects ที่น่าสนใจ

#### 4. **Experience Section**
- Timeline ที่สวยงาม
- ประสบการณ์การทำงาน
- การจัดวางที่อ่านง่าย

#### 5. **Portfolio Section**
- แสดงผลงานที่หลากหลาย
- Filter system สำหรับแยกประเภท
- Hover effects ที่ดึงดูด

#### 6. **Contact Section**
- ฟอร์มติดต่อที่ใช้งานง่าย
- ข้อมูลติดต่อที่ครบถ้วน
- Social media links

## 🚀 การติดตั้งและใช้งาน

### 1. **ดาวน์โหลดไฟล์**
```bash
git clone [repository-url]
cd Salapao-dev.github.io
```

### 2. **เปิดไฟล์**
เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์

### 3. **ปรับแต่งเนื้อหา**
แก้ไขเนื้อหาในไฟล์ `index.html` ตามต้องการ

### 4. **ปรับแต่งสไตล์**
แก้ไขไฟล์ `css/custom.css` สำหรับการปรับแต่งเพิ่มเติม

## 📁 โครงสร้างไฟล์

```
Salapao-dev.github.io/
├── index.html              # ไฟล์หลัก
├── css/
│   ├── style.css           # CSS เก่า (ไม่ใช้แล้ว)
│   └── custom.css          # CSS ใหม่สำหรับ Tailwind
├── js/
│   └── main.js             # JavaScript หลัก
├── img/                    # รูปภาพทั้งหมด
├── mail/                   # ระบบติดต่อ
└── lib/                    # ไลบรารีเก่า (ไม่ใช้แล้ว)
```

## 🎨 การปรับแต่ง

### **สีหลัก (Primary Colors)**
```css
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```

### **ฟอนต์**
- **Inter** - ฟอนต์หลักที่อ่านง่ายและทันสมัย

### **แอนิเมชัน**
- AOS (Animate On Scroll)
- Typed.js สำหรับข้อความ
- CSS transitions และ transforms
- Hover effects

## 📱 การทดสอบ

### **เบราว์เซอร์ที่รองรับ**
- Chrome (แนะนำ)
- Firefox
- Safari
- Edge

### **ขนาดหน้าจอที่ทดสอบ**
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024, 1024x768
- Mobile: 375x667, 414x896

## 🔧 การปรับแต่งเพิ่มเติม

### **เปลี่ยนสีหลัก**
แก้ไขใน `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    // เปลี่ยนสีตามต้องการ
                }
            }
        }
    }
}
```

### **เพิ่มส่วนใหม่**
1. เพิ่ม HTML ใน `index.html`
2. เพิ่ม CSS ใน `css/custom.css`
3. เพิ่ม JavaScript ใน `js/main.js`

### **ปรับแต่งแอนิเมชัน**
แก้ไขใน `js/main.js`:
```javascript
AOS.init({
    duration: 1000,        // ความเร็วแอนิเมชัน
    easing: 'ease-in-out', // ประเภทแอนิเมชัน
    once: true,            // แสดงครั้งเดียว
    mirror: false          // ไม่แสดงย้อนกลับ
});
```

## 📧 ระบบติดต่อ

### **การตั้งค่าอีเมล**
แก้ไขใน `mail/contact.php`:
```php
$to = "your-email@example.com"; // เปลี่ยนเป็นอีเมลของคุณ
```

### **การทดสอบฟอร์ม**
- ฟอร์มจะแสดง notification เมื่อส่งสำเร็จ
- มีการตรวจสอบข้อมูลเบื้องต้น
- รองรับการส่งข้อมูลผ่าน AJAX

## 🌟 คุณสมบัติพิเศษ

### **Performance**
- ใช้ CDN สำหรับไลบรารี
- Optimized images
- Lazy loading สำหรับรูปภาพ
- Minified CSS และ JS

### **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### **SEO**
- Meta tags ที่ครบถ้วน
- Structured data
- Open Graph tags
- Twitter Cards

## 📄 License

© 2024 Salapao-Dev. All rights reserved.

## 🤝 การสนับสนุน

หากมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อได้ที่:
- Email: Watcharapong.ballz@gmail.com
- Facebook: [Salapao-Dev](https://www.facebook.com/salapao0/)
- Instagram: [@salapao.ball](https://www.instagram.com/salapao.ball/)

---

**สร้างด้วย ❤️ โดย Watcharapong Kongjan** 