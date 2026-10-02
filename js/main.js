document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const scrollLine = document.getElementById('scrollLine');
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const toTop = document.getElementById('toTop');
    const toTopProgress = document.getElementById('toTopProgress');
    const toast = document.getElementById('toast');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const translations = {
        th: {
            'hero.greeting': 'สวัสดีครับ ผมชื่อ', 'hero.honors': 'เกียรตินิยมอันดับ 1', 'hero.available': 'พร้อมรับโอกาสใหม่',
            'about.title': 'ทำงานอยู่ระหว่าง <span class="gradient-text">คน กระบวนการ และ AI</span>',
            'career.title': 'เส้นทางการทำงาน', 'career.current': 'ปัจจุบัน',
            'work.title': 'ผลงานที่คัดสรร', 'work.view': 'ดู Case Study',
            'edu.title': 'การศึกษาและรางวัล',
            'contact.title': 'มาสร้างระบบที่<br>ใช้งานได้จริงด้วยกัน',
            'aria.theme': 'สลับโหมดสว่าง/มืด',
            'nav.skip': 'ข้ามไปยังเนื้อหา',
            'nav.about': 'เกี่ยวกับ', 'nav.experience': 'ประสบการณ์', 'nav.work': 'ผลงาน', 'nav.services': 'บริการ', 'nav.contact': 'ติดต่อ',
            'nav.resume': 'ดาวน์โหลด CV',
            'hero.location': 'อยู่ที่จังหวัดตรัง ประเทศไทย', 'hero.name': 'วัชรพงศ์ คงจันทร์',
            'hero.badge': 'ปัจจุบัน: <strong>AI Full Stack Engineer</strong> @ Khoomkha Center',
            'hero.role': 'นักพัฒนา Full Stack ที่ผสาน AI เข้ากับซอฟต์แวร์ เพื่อเปลี่ยน Workflow ซับซ้อนให้เป็น <em>ระบบอัจฉริยะที่เรียบง่ายและเชื่อถือได้</em>',
            'hero.resume': 'ดาวน์โหลด Resume', 'hero.portfolio': 'ดูผลงาน',
            'about.lead': 'ผมเป็นนักพัฒนาที่ทำงานอยู่ระหว่าง',
            'about.p1': 'ปัจจุบันเป็น AI Full Stack Engineer ดูแลระบบตั้งแต่ Frontend ถึง Backend API และพัฒนาฟีเจอร์ AI อย่าง RAG, AI Agent และ Vector Search ให้ใช้งานได้จริงในธุรกิจ',
            'about.p2': 'มีพื้นฐานระบบองค์กรจาก K2 Workflow, Laravel, PHP, SQL และ SAP ABAP ทำให้เข้าใจทั้งกระบวนการทำงานและการนำ AI ไปเชื่อมกับระบบเดิมอย่างเสถียร',
            'about.cta': 'ร่วมงานกัน',
            'metrics.experience': 'ปีของ<br>ประสบการณ์', 'metrics.roles': 'ตำแหน่งงาน<br>ที่ผ่านมา', 'metrics.gpa': 'GPA — เกียรตินิยม<br>อันดับ 1',
            'services.title': 'บริการที่ช่วยเปลี่ยน<br>แนวคิดให้เป็นระบบ',
            'services.subtitle': 'รับพัฒนางานตามขอบเขตที่ชัดเจน ตั้งแต่การวิเคราะห์ไปจนถึงส่งมอบและดูแลหลังใช้งาน',
            'services.ai.title': 'AI Features & Chatbot', 'services.ai.desc': 'ผู้ช่วย AI ที่ตอบจากข้อมูลของธุรกิจด้วย RAG, AI Agent ที่ช่วยทำงานซ้ำ ๆ และระบบค้นหาเชิงความหมาย',
            'services.web.title': 'พัฒนา Web Application', 'services.web.desc': 'ระบบหลังบ้าน Dashboard แบบฟอร์ม และระบบจัดการข้อมูลที่ออกแบบตามกระบวนการของธุรกิจ',
            'services.workflow.title': 'Workflow Automation', 'services.workflow.desc': 'เปลี่ยนขั้นตอนอนุมัติและงานเอกสารให้เป็น Workflow ที่ติดตามสถานะและตรวจสอบย้อนหลังได้',
            'services.integration.title': 'เชื่อมต่อระบบ', 'services.integration.desc': 'เชื่อมต่อข้อมูลระหว่างระบบ ลดการกรอกข้อมูลซ้ำ และทำให้กระบวนการทำงานต่อเนื่องกัน',
            'services.support.title': 'ดูแลระบบและ IT Support', 'services.support.desc': 'ตรวจสอบ แก้ไขปัญหา ปรับปรุงระบบ และจัดทำเอกสารเพื่อให้ผู้ใช้ทำงานได้อย่างต่อเนื่อง',
            'journey.title': 'จากพื้นฐาน IT<br>สู่ AI Engineering',
            'journey.subtitle': 'ทุกช่วงการทำงานช่วยต่อยอดทักษะ จากการดูแลระบบ สู่ Web Development, ERP, Workflow Automation และ AI',
            'journey.it': 'ฐานข้อมูล เครือข่าย ซ่อมคอมพิวเตอร์ และพัฒนาแอปพลิเคชัน',
            'journey.web': 'เว็บไซต์ PHP / WordPress ระบบ ERP และ SAP ABAP Report, Interface, API',
            'journey.erp': 'Web Application ตามแบบ Figma ด้วย Laravel, MySQL, Docker และ GitLab',
            'journey.k2': 'Workflow, SmartForms, SmartObjects และการเชื่อมต่อระบบองค์กร',
            'journey.ai': 'RAG, AI Agent และ Vector Search บนระบบ Full-Stack ที่พร้อมขยาย',
            'career.subtitle': 'จากงานเอกสาร สู่ Web Application, Workflow ระดับองค์กร และระบบ AI ที่ใช้งานได้จริง',
            'career.ai': 'ผสานการพัฒนาซอฟต์แวร์ Full-Stack เข้ากับเทคโนโลยี AI/LLM โดยออกแบบให้ตอบโจทย์ทั้งผู้ใช้และธุรกิจ',
            'career.ai.one': 'ดูแลการพัฒนาระบบตั้งแต่ Frontend ถึง Backend APIs ให้ทำงานราบรื่นและมีคุณภาพ',
            'career.ai.two': 'พัฒนาฟีเจอร์ RAG (Retrieval-Augmented Generation) และ AI Agent เพื่อจัดการข้อมูลและตอบสนองผู้ใช้ได้ดีขึ้น',
            'career.ai.three': 'Implement Vector Search เพื่อสร้างโซลูชันอัจฉริยะที่แม่นยำและขยายได้ตามธุรกิจ',
            'career.ai.four': 'ออกแบบระบบให้เสถียรและรองรับการขยายตัวในอนาคต',
            'career.more': 'ดูรายละเอียด', 'career.less': 'ซ่อนรายละเอียด',
            'career.k2': 'พัฒนา SmartForms, Views และ Workflows บน K2 Five / Blackpearl พร้อมเชื่อมต่อระบบภายนอกและดูแลระบบ Production',
            'career.k2.one': 'Form & Workflow: ออกแบบและพัฒนา SmartForms, Views และ Workflows ตาม Requirement จาก Business Analyst หรือ Senior Developer',
            'career.k2.two': 'Integration: สร้าง SmartObjects เชื่อมข้อมูล K2 กับ SQL Server, REST API, Web Services และ SharePoint',
            'career.k2.three': 'Business Rules: กำหนด Logic, Rule, Expression และ Validation ให้ข้อมูลถูกต้องตามโปรเซสธุรกิจ',
            'career.k2.four': 'Testing & Deployment: Unit Testing แก้ Bug จาก UAT และจัดทำเอกสาร Deployment / User Manual',
            'career.k2.five': 'Support: Troubleshoot Workflow Instances และ SmartForms ให้ระบบทำงานต่อเนื่อง',
            'career.fullstack': 'ออกแบบและพัฒนา Web Application ตามความต้องการของลูกค้า จากแบบ Figma ด้วย Laravel และ MySQL',
            'career.fullstack.one': 'พัฒนาหน้าจอตามแบบ Figma ให้ตรงตามความคาดหวังและตอบโจทย์การใช้งาน',
            'career.fullstack.two': 'สร้างระบบด้วย Laravel ที่มีเสถียรภาพ และออกแบบฐานข้อมูล MySQL ให้เข้าถึงข้อมูลได้รวดเร็ว',
            'career.fullstack.three': 'ใช้ Docker สร้างสภาพแวดล้อมการพัฒนาที่ยืดหยุ่นและจัดการง่าย',
            'career.fullstack.four': 'ใช้ GitLab ควบคุมเวอร์ชันและทำงานร่วมกับทีม',
            'career.php': 'พัฒนาเว็บไซต์และโปรแกรมด้วย PHP, SQL และ WordPress ควบคู่กับงาน SAP ABAP',
            'career.php.one': 'เขียนโปรแกรมและเว็บไซต์ด้วย SQL, PHP, HTML5, Bootstrap 5 และ WordPress',
            'career.php.two': 'พัฒนา SAP ABAP: Report, Interface, Smart Form และ API',
            'career.php.three': 'เรียนรู้ Framework เพิ่มเติม: Spring Boot และ Next.js (เบื้องต้น)',
            'career.officer.title': 'เจ้าหน้าที่งานกิจกรรมนักเรียน นักศึกษา', 'career.officer.org': 'วิทยาลัยเทคนิคตรัง',
            'career.officer': 'งานด้านเอกสาร เช่น บันทึกข้อความ คำสั่ง โครงการ และเอกสารราชการต่าง ๆ',
            'process.title': 'ชัดเจนทุกขั้นตอน<br>ตั้งแต่โจทย์ถึงใช้งานจริง',
            'process.subtitle': 'กระบวนการทำงานที่เน้นการสื่อสาร ตรวจสอบได้ และลดความเสี่ยงก่อนนำระบบขึ้นใช้งาน',
            'process.discover.title': 'ทำความเข้าใจโจทย์', 'process.discover.desc': 'รวบรวม Requirement ผู้เกี่ยวข้อง ข้อมูล และข้อจำกัดของกระบวนการปัจจุบัน',
            'process.design.title': 'ออกแบบแนวทาง', 'process.design.desc': 'วาง Flow โครงสร้างข้อมูล หน้าจอ และจุดเชื่อมต่อให้ทุกฝ่ายเห็นภาพตรงกัน',
            'process.build.title': 'พัฒนาเป็นรอบ', 'process.build.desc': 'แบ่งงานเป็นส่วนย่อย พัฒนาและสาธิตความคืบหน้าเพื่อรับ Feedback ระหว่างทาง',
            'process.verify.title': 'ทดสอบและปรับปรุง', 'process.verify.desc': 'ทำ Unit Testing รองรับ UAT แก้ไขข้อผิดพลาด และตรวจสอบกรณีใช้งานสำคัญ',
            'process.deliver.title': 'ส่งมอบและดูแล', 'process.deliver.desc': 'Deploy พร้อมเอกสาร User Manual และติดตามปัญหาหลังนำระบบขึ้นใช้งาน',
            'k2.note': 'กรณีศึกษาแบบไม่เปิดเผยชื่อลูกค้าและข้อมูลภายใน',
            'k2.summary': 'เปลี่ยนกระบวนการอนุมัติที่มีหลายขั้นตอนและข้อมูลกระจาย ให้เป็น Workflow กลางที่ผู้ใช้ติดตามสถานะได้',
            'k2.challenge.label': 'โจทย์', 'k2.challenge.title': 'ขั้นตอนอนุมัติซับซ้อน', 'k2.challenge.desc': 'ข้อมูลจากแบบฟอร์ม ผู้อนุมัติ และสถานะงานอยู่คนละจุด ทำให้ติดตามงานและตรวจสอบย้อนหลังได้ยาก',
            'k2.role.label': 'หน้าที่รับผิดชอบ', 'k2.role.desc': 'พัฒนา SmartForms, Views, Rules, Validation, Workflow และ SmartObjects ตาม Requirement ที่ได้รับ',
            'k2.integration.label': 'การเชื่อมต่อ', 'k2.integration.desc': 'เชื่อมข้อมูลกับ SQL Server, REST API, Web Services หรือ SharePoint ตามบริบทของระบบ',
            'k2.quality.label': 'คุณภาพและส่งมอบ', 'k2.quality.desc': 'ทำ Unit Testing แก้ไขปัญหาจาก UAT จัดทำ Deployment Document และ User Manual',
            'k2.outcome.label': 'ผลลัพธ์เชิงคุณภาพ', 'k2.outcome.one': 'ขั้นตอนอนุมัติมีมาตรฐานและมองเห็นสถานะได้จากจุดเดียว',
            'k2.outcome.two': 'ลดการกรอกข้อมูลซ้ำด้วยการเชื่อมต่อระบบที่เกี่ยวข้อง', 'k2.outcome.three': 'ตรวจสอบประวัติและแก้ไขปัญหา Workflow ได้สะดวกขึ้น',
            'work.subtitle': 'คลิกที่ผลงานเพื่ออ่าน Case Study และดูภาพเพิ่มเติม',
            'project.bus': 'ระบบจัดการรถบัส บุคลากร การตลาด ตารางเดินรถ และรายงาน',
            'project.security': 'ระบบจัดการเจ้าหน้าที่ ตารางเวร จุดตรวจ และรายงานเหตุการณ์',
            'project.erp': 'ระบบบริหารการผลิต บัญชีส่วนประกอบ และคลังสินค้า',
            'project.jobs': 'แพลตฟอร์มหางาน สมัครงาน อัปโหลดเอกสาร และจัดการโปรไฟล์',
            'outcome.bus': 'รวมข้อมูลการดำเนินงานไว้ในระบบเดียว ช่วยให้ติดตามภาพรวมและจัดทำรายงานได้ง่ายขึ้น',
            'outcome.security': 'ข้อมูลเวรและเหตุการณ์ค้นหาได้เป็นระบบ เพิ่มความสะดวกในการติดตามและตรวจสอบย้อนหลัง',
            'outcome.erp': 'เชื่อมโยง BOM การผลิต และคลังสินค้า ทำให้ข้อมูลในแต่ละขั้นตอนต่อเนื่องกันมากขึ้น',
            'outcome.jobs': 'ผู้สมัครและผู้ประกอบการจัดการประกาศ โปรไฟล์ และใบสมัครผ่านช่องทางเดียว',
            'award.sciitech': 'ชนะเลิศอันดับ 1 กลุ่มวิทยาศาสตร์คอมพิวเตอร์และเทคโนโลยี',
            'award.ncst': 'นำเสนอผลงานด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ',
            'award.network': 'รองชนะเลิศอันดับ 4 ระดับชาติ',
            'award.icdl': 'Workforce Basics ระดับ 2 · คะแนนรับรอง 775',
            'availability.title': 'พร้อมสำหรับ<br>โอกาสใหม่',
            'availability.subtitle': 'เปิดรับงานที่ได้ใช้ทักษะด้านการพัฒนาระบบและแก้ปัญหาให้ธุรกิจ',
            'availability.positionLabel': 'ตำแหน่งที่สนใจ', 'availability.typeLabel': 'รูปแบบการทำงาน',
            'availability.type': 'งานประจำ · Part-time · Freelance<br>Work from Home',
            'availability.startLabel': 'เริ่มงานได้', 'availability.start': '30 วันหลังจากเซ็นสัญญา',
            'availability.salaryLabel': 'เงินเดือนที่คาดหวัง', 'availability.salary': '20,000 — 25,000 บาท',
            'availability.download': 'ดาวน์โหลด Resume PDF',
            'contact.copy': 'คัดลอกอีเมล', 'contact.copied': 'คัดลอกอีเมลแล้ว ✓', 'contact.copyFailed': 'คัดลอกไม่สำเร็จ ลองเลือกข้อความแทน',
            'contact.location': 'ตรัง, ประเทศไทย',
            'case.challenge': 'โจทย์', 'case.role': 'บทบาท', 'case.solution': 'แนวทางแก้ปัญหา', 'case.outcome': 'ผลลัพธ์',
            'aria.menuOpen': 'เปิดเมนู', 'aria.menuClose': 'ปิดเมนู', 'aria.toTop': 'กลับขึ้นด้านบน',
            'aria.close': 'ปิด', 'aria.prev': 'รูปก่อนหน้า', 'aria.next': 'รูปถัดไป', 'aria.image': 'ภาพที่'
        },
        en: {
            'hero.greeting': "Hi, I'm", 'hero.honors': 'First class honors', 'hero.available': 'Open to new opportunities',
            'about.title': 'Working between <span class="gradient-text">people, process & AI</span>',
            'career.title': 'Career journey', 'career.current': 'Current',
            'work.title': 'Selected projects', 'work.view': 'View case study',
            'edu.title': 'Education & awards',
            'contact.title': "Let's build something<br>that really works.",
            'aria.theme': 'Toggle light/dark mode',
            'nav.skip': 'Skip to content',
            'nav.about': 'About', 'nav.experience': 'Experience', 'nav.work': 'Work', 'nav.services': 'Services', 'nav.contact': 'Contact',
            'nav.resume': 'Download CV',
            'hero.location': 'Based in Trang, Thailand', 'hero.name': 'Watcharapong Kongjan',
            'hero.badge': 'Now: <strong>AI Full Stack Engineer</strong> @ Khoomkha Center',
            'hero.role': 'Full stack engineer blending AI into software to turn complex workflows into <em>simple, intelligent, reliable systems.</em>',
            'hero.resume': 'Download Resume', 'hero.portfolio': 'View Work',
            'about.lead': 'I am a developer working between',
            'about.p1': 'Currently an AI Full Stack Engineer, owning systems from frontend to backend APIs and shipping AI features such as RAG, AI agents, and vector search for real business use.',
            'about.p2': 'A background in enterprise systems — K2 workflow, Laravel, PHP, SQL, and SAP ABAP — helps me connect AI to existing processes in a stable way.',
            'about.cta': "Let's work together",
            'metrics.experience': 'Years of<br>experience', 'metrics.roles': 'Roles<br>held', 'metrics.gpa': 'GPA — First<br>class honors',
            'services.title': 'Services that turn<br>ideas into systems',
            'services.subtitle': 'Clear-scope development from analysis and implementation through delivery and post-launch support.',
            'services.ai.title': 'AI Features & Chatbots', 'services.ai.desc': 'AI assistants grounded in your business data with RAG, agents that take over repetitive tasks, and semantic search.',
            'services.web.title': 'Web Application Development', 'services.web.desc': 'Back-office systems, dashboards, forms, and data management tailored to business processes.',
            'services.workflow.title': 'Workflow Automation', 'services.workflow.desc': 'Turn approvals and document processes into traceable, auditable digital workflows.',
            'services.integration.title': 'System Integration', 'services.integration.desc': 'Connect systems, reduce duplicate data entry, and create continuous business processes.',
            'services.support.title': 'Maintenance & IT Support', 'services.support.desc': 'Troubleshoot, improve systems, and prepare documentation to keep users productive.',
            'journey.title': 'From IT foundations<br>to AI engineering',
            'journey.subtitle': 'Each role expanded my skills from IT support to web development, ERP, workflow automation, and AI.',
            'journey.it': 'Databases, networks, computer maintenance, and application development.',
            'journey.web': 'PHP / WordPress websites, ERP modules, and SAP ABAP reports, interfaces, and APIs.',
            'journey.erp': 'Figma-based web applications with Laravel, MySQL, Docker, and GitLab.',
            'journey.k2': 'Enterprise workflows, SmartForms, SmartObjects, and system integration.',
            'journey.ai': 'RAG, AI agents, and vector search on scalable full-stack systems.',
            'career.subtitle': 'From documentation to web applications, enterprise workflows, and production AI systems.',
            'career.ai': 'Combine full-stack software development with AI/LLM technology, designing for both user and business needs.',
            'career.ai.one': 'Own development from frontend to backend APIs so the whole system runs smoothly and reliably.',
            'career.ai.two': 'Build RAG (Retrieval-Augmented Generation) and AI agent features to improve data handling and user responses.',
            'career.ai.three': 'Implement vector search to deliver accurate, intelligent solutions that scale with the business.',
            'career.ai.four': 'Design stable systems ready to support future growth and varied use cases.',
            'career.more': 'Show details', 'career.less': 'Hide details',
            'career.k2': 'Built SmartForms, Views, and Workflows on K2 Five / Blackpearl, integrated external systems, and supported production.',
            'career.k2.one': 'Form & Workflow: designed and developed SmartForms, Views, and Workflows from Business Analyst or Senior Developer requirements.',
            'career.k2.two': 'Integration: created SmartObjects connecting K2 to SQL Server, REST APIs, Web Services, and SharePoint.',
            'career.k2.three': 'Business rules: defined logic, rules, expressions, and validation so data follows the business process.',
            'career.k2.four': 'Testing & deployment: unit testing, fixing UAT bugs, and writing deployment documents and user manuals.',
            'career.k2.five': 'Support: troubleshot workflow instances and SmartForms to keep the system running.',
            'career.fullstack': 'Designed and built client web applications from Figma designs with Laravel and MySQL.',
            'career.fullstack.one': 'Implemented screens from Figma to match expectations and real usage needs.',
            'career.fullstack.two': 'Built stable systems with Laravel and designed MySQL databases for fast data access.',
            'career.fullstack.three': 'Used Docker for flexible, easy-to-manage development environments.',
            'career.fullstack.four': 'Used GitLab for version control and smooth team collaboration.',
            'career.php': 'Developed websites and programs with PHP, SQL, and WordPress alongside SAP ABAP work.',
            'career.php.one': 'Built programs and websites with SQL, PHP, HTML5, Bootstrap 5, and WordPress.',
            'career.php.two': 'Developed SAP ABAP reports, interfaces, Smart Forms, and APIs.',
            'career.php.three': 'Learned additional frameworks: Spring Boot and Next.js (basics).',
            'career.officer.title': 'Student Activity Officer', 'career.officer.org': 'Trang Technical College',
            'career.officer': 'Handled official documentation: memos, orders, project proposals, and government documents.',
            'process.title': 'A clear process<br>from brief to launch',
            'process.subtitle': 'A communication-first, verifiable process that reduces risk before production deployment.',
            'process.discover.title': 'Understand the problem', 'process.discover.desc': 'Gather requirements, stakeholders, data, and constraints in the current process.',
            'process.design.title': 'Design the approach', 'process.design.desc': 'Map flows, data structures, screens, and integrations so everyone shares the same view.',
            'process.build.title': 'Build iteratively', 'process.build.desc': 'Split work into focused increments and demonstrate progress for feedback along the way.',
            'process.verify.title': 'Test and refine', 'process.verify.desc': 'Run unit tests, support UAT, resolve defects, and verify important usage scenarios.',
            'process.deliver.title': 'Deliver and support', 'process.deliver.desc': 'Deploy with user documentation and follow up on issues after launch.',
            'k2.note': 'An anonymized case study with no client or internal information disclosed.',
            'k2.summary': 'Transformed a multi-step, fragmented approval process into a central workflow with visible status tracking.',
            'k2.challenge.label': 'Challenge', 'k2.challenge.title': 'Complex approvals', 'k2.challenge.desc': 'Form data, approvers, and work status lived in separate places, making tracking and audits difficult.',
            'k2.role.label': 'Responsibilities', 'k2.role.desc': 'Developed SmartForms, Views, Rules, Validation, Workflows, and SmartObjects from approved requirements.',
            'k2.integration.label': 'Integration', 'k2.integration.desc': 'Connected SQL Server, REST APIs, Web Services, or SharePoint according to the system context.',
            'k2.quality.label': 'Quality & delivery', 'k2.quality.desc': 'Performed unit testing, resolved UAT findings, and prepared deployment and user documentation.',
            'k2.outcome.label': 'Qualitative outcomes', 'k2.outcome.one': 'A standardized approval process with status visible in one place.',
            'k2.outcome.two': 'Less duplicate entry through integration with related systems.', 'k2.outcome.three': 'Easier history review and workflow troubleshooting.',
            'work.subtitle': 'Select a project to read its case study and browse more screens.',
            'project.bus': 'Bus operations, personnel, marketing, scheduling, and reporting in one application.',
            'project.security': 'Staff, shift, checkpoint, and incident reporting management.',
            'project.erp': 'Production, bill of materials, and inventory management.',
            'project.jobs': 'Job search, applications, document uploads, and profile management.',
            'outcome.bus': 'Centralized operational data, making overview monitoring and reporting easier.',
            'outcome.security': 'Structured shift and incident records for easier tracking and historical review.',
            'outcome.erp': 'Connected BOM, production, and inventory data into a more continuous process.',
            'outcome.jobs': 'Candidates and employers manage vacancies, profiles, and applications through one channel.',
            'award.sciitech': 'First-place award in the Computer Science and Technology category.',
            'award.ncst': 'Presented research in computer science and information technology.',
            'award.network': 'Fourth runner-up in the national network technology competition.',
            'award.icdl': 'Workforce Basics Level 2 · Certification score 775.',
            'availability.title': 'Ready for<br>new opportunities',
            'availability.subtitle': 'Open to roles where development skills can solve meaningful business problems.',
            'availability.positionLabel': 'Interested roles', 'availability.typeLabel': 'Work type',
            'availability.type': 'Full-time · Part-time · Freelance<br>Work from Home',
            'availability.startLabel': 'Available from', 'availability.start': '30 days after contract signing',
            'availability.salaryLabel': 'Expected salary', 'availability.salary': 'THB 20,000 — 25,000',
            'availability.download': 'Download Resume PDF',
            'contact.copy': 'Copy email', 'contact.copied': 'Email copied ✓', 'contact.copyFailed': 'Copy failed — please select the text instead',
            'contact.location': 'Trang, Thailand',
            'case.challenge': 'Challenge', 'case.role': 'Role', 'case.solution': 'Solution', 'case.outcome': 'Outcome',
            'aria.menuOpen': 'Open menu', 'aria.menuClose': 'Close menu', 'aria.toTop': 'Back to top',
            'aria.close': 'Close', 'aria.prev': 'Previous image', 'aria.next': 'Next image', 'aria.image': 'image'
        }
    };
    const caseStudies = {
        th: {
            bus: {
                challenge: 'ข้อมูลรถ บุคลากร ตารางเดินรถ และงานการตลาดกระจายอยู่หลายส่วน ทำให้ติดตามภาพรวมได้ยาก',
                role: 'Fullstack Developer — พัฒนาโมดูลและหน้าใช้งานตาม Figma พร้อมจัดการฐานข้อมูล',
                solution: 'รวมกระบวนการสำคัญไว้ใน Web Application เดียว พร้อม Dashboard และรายงานสำหรับติดตามการดำเนินงาน',
                outcome: 'ข้อมูลการดำเนินงานอยู่ในระบบเดียว ทำให้ติดตามภาพรวมและจัดทำรายงานได้สะดวกขึ้น',
                tech: 'Laravel · PHP · MySQL · Docker · GitLab'
            },
            security: {
                challenge: 'การจัดเวร จุดตรวจ และรายงานเหตุการณ์ต้องรองรับข้อมูลเจ้าหน้าที่จำนวนมากและตรวจสอบย้อนหลังได้',
                role: 'Fullstack Developer — พัฒนาหน้าใช้งาน Logic และโครงสร้างข้อมูล',
                solution: 'สร้างระบบรวมข้อมูลเจ้าหน้าที่ ตารางเวร จุดตรวจ และรายงานเหตุการณ์ให้ค้นหาและติดตามได้ง่าย',
                outcome: 'ข้อมูลเวรและเหตุการณ์เป็นระบบมากขึ้น ช่วยให้ค้นหาและตรวจสอบประวัติได้ง่าย',
                tech: 'Laravel · PHP · MySQL · Bootstrap'
            },
            erp: {
                challenge: 'กระบวนการผลิตต้องเชื่อมโยงวัตถุดิบ BOM คลังสินค้า และข้อมูลการผลิตอย่างถูกต้อง',
                role: 'PHP Web Programmer — พัฒนาโมดูล Production และ Inventory',
                solution: 'ออกแบบหน้าจอและกระบวนการจัดการ BOM การผลิต และคลังสินค้าให้ข้อมูลสัมพันธ์กันในระบบ ERP',
                outcome: 'ข้อมูล BOM การผลิต และคลังสินค้าเชื่อมโยงกัน ช่วยลดความซ้ำซ้อนระหว่างขั้นตอน',
                tech: 'PHP · MySQL · Bootstrap · JavaScript'
            },
            jobs: {
                challenge: 'ผู้สมัครและผู้ประกอบการต้องจัดการประกาศงาน โปรไฟล์ และเอกสารผ่านช่องทางเดียว',
                role: 'Web Developer — พัฒนาฟังก์ชันหลักและส่วนติดต่อผู้ใช้',
                solution: 'สร้างแพลตฟอร์มหางานที่รองรับการค้นหา สมัครงาน อัปโหลดเอกสาร และจัดการโปรไฟล์',
                outcome: 'ผู้ใช้งานจัดการกระบวนการหางานและรับสมัครผ่านแพลตฟอร์มเดียวได้',
                tech: 'PHP · MySQL · Bootstrap 5 · JavaScript'
            }
        },
        en: {
            bus: {
                challenge: 'Vehicle, personnel, scheduling, and marketing data were fragmented, making operations difficult to monitor.',
                role: 'Fullstack Developer — implemented modules and interfaces from Figma and managed the database layer.',
                solution: 'Consolidated core operations into one web application with dashboards and operational reports.',
                outcome: 'Operational data became centralized, making overview monitoring and reporting more convenient.',
                tech: 'Laravel · PHP · MySQL · Docker · GitLab'
            },
            security: {
                challenge: 'Shift, checkpoint, and incident records needed to support many officers and remain auditable.',
                role: 'Fullstack Developer — developed interfaces, application logic, and data structures.',
                solution: 'Centralized officer data, shifts, checkpoints, and incidents into a searchable management system.',
                outcome: 'Shift and incident records became easier to search, track, and review historically.',
                tech: 'Laravel · PHP · MySQL · Bootstrap'
            },
            erp: {
                challenge: 'Production required accurate links between materials, BOMs, inventory, and manufacturing records.',
                role: 'PHP Web Programmer — developed Production and Inventory modules.',
                solution: 'Designed connected BOM, production, and inventory workflows inside the ERP system.',
                outcome: 'BOM, production, and inventory data became connected, reducing duplication between process steps.',
                tech: 'PHP · MySQL · Bootstrap · JavaScript'
            },
            jobs: {
                challenge: 'Candidates and employers needed one channel for vacancies, profiles, applications, and documents.',
                role: 'Web Developer — developed core functionality and user-facing interfaces.',
                solution: 'Built a job platform supporting search, applications, document uploads, and profile management.',
                outcome: 'Candidates and employers could manage recruitment activities through a single platform.',
                tech: 'PHP · MySQL · Bootstrap 5 · JavaScript'
            }
        }
    };
    let currentLanguage = 'th';
    const t = (key) => translations[currentLanguage][key] || key;

    // Elements filled by JS that must follow the active language.
    const viewer = document.getElementById('viewer');
    const viewerImage = document.getElementById('viewerImage');
    const viewerMedia = document.getElementById('viewerMedia');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerCount = document.getElementById('viewerCount');
    const viewerThumbs = document.getElementById('viewerThumbs');
    const viewerClose = document.getElementById('viewerClose');
    const viewerPrev = document.getElementById('viewerPrev');
    const viewerNext = document.getElementById('viewerNext');
    const caseFields = {
        challenge: document.getElementById('caseChallenge'),
        role: document.getElementById('caseRole'),
        solution: document.getElementById('caseSolution'),
        outcome: document.getElementById('caseOutcome'),
        tech: document.getElementById('caseTech')
    };
    let images = [];
    let imageIndex = 0;
    let activeProject = null;

    function applyLanguage(language) {
        currentLanguage = translations[language] ? language : 'th';
        document.documentElement.lang = currentLanguage;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const value = translations[currentLanguage][element.dataset.i18n];
            if (value) element.textContent = value;
        });
        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            const value = translations[currentLanguage][element.dataset.i18nHtml];
            if (value) element.innerHTML = value;
        });
        document.querySelectorAll('[data-lang]').forEach((button) => {
            const active = button.dataset.lang === currentLanguage;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        menuButton.setAttribute('aria-label', t(mobileMenu.classList.contains('open') ? 'aria.menuClose' : 'aria.menuOpen'));
        toTop.setAttribute('aria-label', t('aria.toTop'));
        document.querySelectorAll('[data-theme-toggle]').forEach((button) => button.setAttribute('aria-label', t('aria.theme')));
        viewerClose.setAttribute('aria-label', t('aria.close'));
        viewerPrev.setAttribute('aria-label', t('aria.prev'));
        viewerNext.setAttribute('aria-label', t('aria.next'));
        document.querySelectorAll('.career-more').forEach(syncDetailsLabel);
        if (activeProject) fillCaseStudy(activeProject);
        try { localStorage.setItem('portfolio-language', currentLanguage); } catch (_) { /* Storage may be unavailable. */ }
    }

    function syncDetailsLabel(details) {
        details.querySelector('summary span').textContent = t(details.open ? 'career.less' : 'career.more');
    }
    document.querySelectorAll('.career-more').forEach((details) => {
        details.addEventListener('toggle', () => syncDetailsLabel(details));
    });

    let savedLanguage = 'th';
    try { savedLanguage = localStorage.getItem('portfolio-language') || 'th'; } catch (_) { /* Use Thai by default. */ }
    applyLanguage(savedLanguage);
    document.querySelectorAll('[data-lang]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.lang));
    });


    // Light / dark theme toggle (initial theme is set inline in <head>).
    const root = document.documentElement;
    const themeMeta = document.querySelectorAll('meta[name="theme-color"]');
    function setTheme(theme, persist) {
        root.setAttribute('data-theme', theme);
        themeMeta.forEach((meta) => meta.setAttribute('content', theme === 'dark' ? '#0a0b12' : '#f6f7fb'));
        if (persist) { try { localStorage.setItem('portfolio-theme', theme); } catch (_) { /* Storage may be unavailable. */ } }
    }
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
        button.addEventListener('click', () => setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true));
    });
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = (event) => {
        let saved = null;
        try { saved = localStorage.getItem('portfolio-theme'); } catch (_) { /* ignore */ }
        if (!saved) setTheme(event.matches ? 'dark' : 'light', false);
    };
    if (systemDark.addEventListener) systemDark.addEventListener('change', followSystem);

    // Duplicate the marquee content so the loop is seamless without hand-copied markup.
    const marqueeTrack = document.getElementById('marqueeTrack');
    Array.from(marqueeTrack.children).forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        marqueeTrack.appendChild(clone);
    });

    // Scroll progress, sticky nav state, and back-to-top ring.
    const ringLength = 2 * Math.PI * 20;
    let scrollTicking = false;
    function updatePageProgress() {
        const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = availableScroll > 0 ? Math.min(window.scrollY / availableScroll, 1) : 0;
        scrollLine.style.width = `${ratio * 100}%`;
        nav.classList.toggle('scrolled', window.scrollY > 30);
        toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
        toTopProgress.style.strokeDashoffset = String(ringLength * (1 - ratio));
        scrollTicking = false;
    }
    window.addEventListener('scroll', () => {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(updatePageProgress);
    }, { passive: true });
    updatePageProgress();

    function setMenu(open) {
        menuButton.classList.toggle('active', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
        mobileMenu.classList.toggle('open', open);
        mobileMenu.setAttribute('aria-hidden', String(!open));
        document.body.classList.toggle('locked', open);
        if (open) mobileMenu.querySelector('a').focus();
    }

    menuButton.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) setMenu(false);
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            if (link.classList.contains('skip-link')) {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });

    // Highlight the nav link of the section currently in view.
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const spySections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    const active = link.getAttribute('href') === `#${entry.target.id}`;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        spySections.forEach((section) => spy.observe(section));
    }

    // Count metrics up from zero the first time they appear.
    function countUp(element) {
        const target = parseFloat(element.dataset.count);
        const decimals = parseInt(element.dataset.decimals || '0', 10);
        const suffix = element.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();
        function frame(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = (target * eased).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    const animatedElements = document.querySelectorAll('.fade-up');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        animatedElements.forEach((element) => element.classList.add('visible'));
    } else {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                entry.target.querySelectorAll('[data-count]').forEach(countUp);
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -45px' });

        animatedElements.forEach((element, index) => {
            element.style.transitionDelay = `${(index % 3) * 65}ms`;
            observer.observe(element);
        });
    }

    // Copy email with feedback toast.
    let toastTimer = null;
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
    }

    const copyEmail = document.getElementById('copyEmail');
    copyEmail.addEventListener('click', async () => {
        const value = copyEmail.dataset.copy;
        try {
            await navigator.clipboard.writeText(value);
            showToast(t('contact.copied'));
        } catch (_) {
            const field = document.createElement('textarea');
            field.value = value;
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.appendChild(field);
            field.select();
            const copied = document.execCommand('copy');
            field.remove();
            showToast(t(copied ? 'contact.copied' : 'contact.copyFailed'));
        }
    });

    // Project viewer with thumbnails, swipe, and focus trap.
    function fillCaseStudy(project) {
        const study = caseStudies[currentLanguage][project.dataset.case];
        Object.keys(caseFields).forEach((key) => { caseFields[key].textContent = study[key]; });
        renderViewer();
    }

    function renderViewer() {
        if (!images.length) return;
        viewerImage.classList.add('loading');
        viewerImage.onload = () => viewerImage.classList.remove('loading');
        viewerImage.src = images[imageIndex];
        viewerImage.alt = `${viewerTitle.textContent} — ${t('aria.image')} ${imageIndex + 1}`;
        viewerCount.textContent = `${String(imageIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
        const showNavigation = images.length > 1;
        viewerPrev.hidden = !showNavigation;
        viewerNext.hidden = !showNavigation;
        viewerThumbs.querySelectorAll('button').forEach((thumb, index) => {
            const active = index === imageIndex;
            thumb.classList.toggle('active', active);
            thumb.setAttribute('aria-current', String(active));
            if (active) thumb.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        });
        // Warm the cache for the next screen so paging feels instant.
        if (showNavigation) new Image().src = images[(imageIndex + 1) % images.length];
    }

    function buildThumbs() {
        viewerThumbs.innerHTML = '';
        images.forEach((path, index) => {
            const thumb = document.createElement('button');
            thumb.type = 'button';
            thumb.setAttribute('aria-label', `${t('aria.image')} ${index + 1}`);
            thumb.innerHTML = `<img src="${path}" alt="" loading="lazy">`;
            thumb.addEventListener('click', () => { imageIndex = index; renderViewer(); });
            viewerThumbs.appendChild(thumb);
        });
        viewerThumbs.parentElement.hidden = images.length < 2;
    }

    function openViewer(project) {
        images = project.dataset.gallery.split(',').map((path) => path.trim()).filter(Boolean);
        if (!images.length) return;
        imageIndex = 0;
        activeProject = project;
        viewerTitle.textContent = project.dataset.title;
        buildThumbs();
        fillCaseStudy(project);
        viewer.classList.add('open');
        viewer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('locked');
        viewerClose.focus();
    }

    function closeViewer() {
        viewer.classList.remove('open');
        viewer.setAttribute('aria-hidden', 'true');
        viewerImage.removeAttribute('src');
        document.body.classList.remove('locked');
        if (activeProject) activeProject.focus();
        activeProject = null;
    }

    function moveViewer(direction) {
        imageIndex = (imageIndex + direction + images.length) % images.length;
        renderViewer();
    }

    document.querySelectorAll('.project[data-gallery]').forEach((project) => {
        project.setAttribute('role', 'button');
        project.setAttribute('aria-haspopup', 'dialog');
        project.addEventListener('click', () => openViewer(project));
        project.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            openViewer(project);
        });
    });

    viewerClose.addEventListener('click', closeViewer);
    viewerPrev.addEventListener('click', () => moveViewer(-1));
    viewerNext.addEventListener('click', () => moveViewer(1));
    viewer.addEventListener('click', (event) => {
        if (event.target === viewer) closeViewer();
    });

    let touchStartX = null;
    viewerMedia.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
    viewerMedia.addEventListener('touchend', (event) => {
        if (touchStartX === null || images.length < 2) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(deltaX) > 45) moveViewer(deltaX < 0 ? 1 : -1);
        touchStartX = null;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
            setMenu(false);
            menuButton.focus();
            return;
        }
        if (!viewer.classList.contains('open')) return;
        if (event.key === 'Escape') closeViewer();
        if (event.key === 'ArrowLeft' && images.length > 1) moveViewer(-1);
        if (event.key === 'ArrowRight' && images.length > 1) moveViewer(1);
        if (event.key === 'Tab') {
            const focusable = Array.from(viewer.querySelectorAll('button:not([hidden])')).filter((element) => element.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
    });
});
