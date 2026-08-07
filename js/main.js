document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const scrollLine = document.getElementById('scrollLine');
    const cursorGlow = document.getElementById('cursorGlow');
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const translations = {
        th: {
            'nav.about': 'เกี่ยวกับ', 'nav.experience': 'ประสบการณ์', 'nav.work': 'ผลงาน', 'nav.contact': 'ติดต่อ',
            'nav.resume': 'ดาวน์โหลด CV', 'nav.available': 'พร้อมรับงาน',
            'hero.location': 'อยู่ที่จังหวัดตรัง ประเทศไทย', 'hero.name': 'วัชรพงศ์ คงจันทร์',
            'hero.role': 'นักพัฒนาที่เปลี่ยน Workflow ซับซ้อนให้เป็น <em>ระบบที่เรียบง่ายและเชื่อถือได้</em>',
            'hero.resume': 'ดาวน์โหลด Resume', 'hero.portfolio': 'ดูผลงาน',
            'about.lead': 'ผมเป็นนักพัฒนาที่ทำงานอยู่ระหว่าง',
            'about.p1': 'มีประสบการณ์พัฒนาระบบองค์กรตั้งแต่เก็บ Requirement, สร้าง Workflow, เชื่อมต่อ API, ทดสอบ ไปจนถึงนำขึ้น Production',
            'about.p2': 'ถนัด K2 SmartForms, Laravel, PHP, SQL และ SAP ABAP พร้อมเรียนรู้เครื่องมือใหม่เพื่อแก้ปัญหาให้เหมาะกับแต่ละธุรกิจ',
            'about.cta': 'ร่วมงานกัน',
            'metrics.experience': 'ปีของ<br>ประสบการณ์', 'metrics.projects': 'โปรเจกต์<br>ที่เลือกไว้', 'metrics.gpa': 'GPA — เกียรตินิยม<br>อันดับ 1',
            'services.title': 'บริการที่ช่วยเปลี่ยน<br>แนวคิดให้เป็นระบบ',
            'services.subtitle': 'รับพัฒนางานตามขอบเขตที่ชัดเจน ตั้งแต่การวิเคราะห์ไปจนถึงส่งมอบและดูแลหลังใช้งาน',
            'services.web.title': 'พัฒนา Web Application', 'services.web.desc': 'ระบบหลังบ้าน Dashboard แบบฟอร์ม และระบบจัดการข้อมูลที่ออกแบบตามกระบวนการของธุรกิจ',
            'services.workflow.title': 'Workflow Automation', 'services.workflow.desc': 'เปลี่ยนขั้นตอนอนุมัติและงานเอกสารให้เป็น Workflow ที่ติดตามสถานะและตรวจสอบย้อนหลังได้',
            'services.integration.title': 'เชื่อมต่อระบบ', 'services.integration.desc': 'เชื่อมต่อข้อมูลระหว่างระบบ ลดการกรอกข้อมูลซ้ำ และทำให้กระบวนการทำงานต่อเนื่องกัน',
            'services.support.title': 'ดูแลระบบและ IT Support', 'services.support.desc': 'ตรวจสอบ แก้ไขปัญหา ปรับปรุงระบบ และจัดทำเอกสารเพื่อให้ผู้ใช้ทำงานได้อย่างต่อเนื่อง',
            'journey.title': 'จากพื้นฐาน IT<br>สู่ระบบองค์กร',
            'journey.subtitle': 'ทุกช่วงการทำงานช่วยต่อยอดทักษะจากการดูแลระบบ สู่ Web Development, ERP และ Workflow Automation',
            'journey.it': 'ฐานข้อมูล เครือข่าย ซ่อมคอมพิวเตอร์ และพัฒนาแอปพลิเคชัน',
            'journey.web': 'พัฒนาเว็บไซต์จริงด้วย PHP, MySQL, Bootstrap และ WordPress',
            'journey.erp': 'ระบบการผลิต คลังสินค้า และ SAP ABAP Integration',
            'journey.k2': 'Workflow, SmartForms, SmartObjects และการเชื่อมต่อระบบองค์กร',
            'career.subtitle': 'ประสบการณ์จากงานเอกสาร สู่การพัฒนา Web Application และระบบ Workflow ระดับองค์กร',
            'career.k2': 'พัฒนา SmartForms, Workflows และ SmartObjects เชื่อมต่อระบบภายนอก ทดสอบ แก้ไข UAT และดูแลระบบ Production',
            'career.fullstack': 'สร้าง Web Application ตาม Figma ด้วย Laravel และ MySQL ใช้ Docker และ GitLab ในกระบวนการพัฒนา',
            'career.php': 'พัฒนาเว็บไซต์ PHP และ WordPress รวมถึง SAP ABAP Report, Interface, Smart Form และ API',
            'career.officer': 'จัดทำโครงการ บันทึกข้อความ คำสั่ง และเอกสารราชการสำหรับงานกิจกรรมนักเรียน',
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
            'case.challenge': 'โจทย์', 'case.role': 'บทบาท', 'case.solution': 'แนวทางแก้ปัญหา', 'case.outcome': 'ผลลัพธ์'
        },
        en: {
            'nav.about': 'About', 'nav.experience': 'Experience', 'nav.work': 'Work', 'nav.contact': 'Contact',
            'nav.resume': 'Download CV', 'nav.available': 'Available for work',
            'hero.location': 'Based in Trang, Thailand', 'hero.name': 'Watcharapong Khongchan',
            'hero.role': 'Developer who turns complex workflows into <em>simple, reliable systems.</em>',
            'hero.resume': 'Download Resume', 'hero.portfolio': 'View Work',
            'about.lead': 'I am a developer working between',
            'about.p1': 'Experienced in enterprise development from requirements and workflow design to API integration, testing, and production deployment.',
            'about.p2': 'Skilled in K2 SmartForms, Laravel, PHP, SQL, and SAP ABAP, with a continuous drive to learn the right tools for each business problem.',
            'about.cta': "Let's work together",
            'metrics.experience': 'Years of<br>experience', 'metrics.projects': 'Selected<br>projects', 'metrics.gpa': 'GPA — First<br>class honors',
            'services.title': 'Services that turn<br>ideas into systems',
            'services.subtitle': 'Clear-scope development from analysis and implementation through delivery and post-launch support.',
            'services.web.title': 'Web Application Development', 'services.web.desc': 'Back-office systems, dashboards, forms, and data management tailored to business processes.',
            'services.workflow.title': 'Workflow Automation', 'services.workflow.desc': 'Turn approvals and document processes into traceable, auditable digital workflows.',
            'services.integration.title': 'System Integration', 'services.integration.desc': 'Connect systems, reduce duplicate data entry, and create continuous business processes.',
            'services.support.title': 'Maintenance & IT Support', 'services.support.desc': 'Troubleshoot, improve systems, and prepare documentation to keep users productive.',
            'journey.title': 'From IT foundations<br>to enterprise systems',
            'journey.subtitle': 'Each role expanded my skills from IT support to web development, ERP, and workflow automation.',
            'journey.it': 'Databases, networks, computer maintenance, and application development.',
            'journey.web': 'Production websites built with PHP, MySQL, Bootstrap, and WordPress.',
            'journey.erp': 'Production, inventory, and SAP ABAP integration solutions.',
            'journey.k2': 'Enterprise workflows, SmartForms, SmartObjects, and system integration.',
            'career.subtitle': 'A journey from documentation to web applications and enterprise workflow systems.',
            'career.k2': 'Develop SmartForms, Workflows, and SmartObjects; integrate external systems; test, resolve UAT issues, and support production.',
            'career.fullstack': 'Built Figma-based web applications with Laravel and MySQL, using Docker and GitLab throughout development.',
            'career.php': 'Developed PHP and WordPress websites alongside SAP ABAP reports, interfaces, Smart Forms, and APIs.',
            'career.officer': 'Prepared projects, internal memos, official orders, and documents for student activities.',
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
            'case.challenge': 'Challenge', 'case.role': 'Role', 'case.solution': 'Solution', 'case.outcome': 'Outcome'
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
            button.classList.toggle('active', button.dataset.lang === currentLanguage);
        });
        try { localStorage.setItem('portfolio-language', currentLanguage); } catch (_) { /* Storage may be unavailable. */ }
    }

    let savedLanguage = 'th';
    try { savedLanguage = localStorage.getItem('portfolio-language') || 'th'; } catch (_) { /* Use Thai by default. */ }
    applyLanguage(savedLanguage);
    document.querySelectorAll('[data-lang]').forEach((button) => {
        button.addEventListener('click', () => applyLanguage(button.dataset.lang));
    });

    function updatePageProgress() {
        const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = availableScroll > 0 ? window.scrollY / availableScroll * 100 : 0;
        scrollLine.style.width = `${progress}%`;
        nav.classList.toggle('scrolled', window.scrollY > 30);
    }

    window.addEventListener('scroll', updatePageProgress, { passive: true });
    updatePageProgress();

    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (event) => {
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
            cursorGlow.style.opacity = '1';
        });
        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }

    function setMenu(open) {
        menuButton.classList.toggle('active', open);
        menuButton.setAttribute('aria-expanded', String(open));
        mobileMenu.classList.toggle('open', open);
        document.body.classList.toggle('locked', open);
    }

    menuButton.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            });
        });

    const animatedElements = document.querySelectorAll('.fade-up');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        animatedElements.forEach((element) => element.classList.add('visible'));
    } else {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -45px' });

        animatedElements.forEach((element, index) => {
            element.style.transitionDelay = `${(index % 3) * 65}ms`;
            observer.observe(element);
        });
    }

    const viewer = document.getElementById('viewer');
    const viewerImage = document.getElementById('viewerImage');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerCount = document.getElementById('viewerCount');
    const viewerClose = document.getElementById('viewerClose');
    const viewerPrev = document.getElementById('viewerPrev');
    const viewerNext = document.getElementById('viewerNext');
    const caseChallenge = document.getElementById('caseChallenge');
    const caseRole = document.getElementById('caseRole');
    const caseSolution = document.getElementById('caseSolution');
    const caseOutcome = document.getElementById('caseOutcome');
    const caseTech = document.getElementById('caseTech');
    let images = [];
    let imageIndex = 0;
    let lastFocusedProject = null;

    function renderViewer() {
        viewerImage.src = images[imageIndex];
        viewerImage.alt = `${viewerTitle.textContent} — ภาพที่ ${imageIndex + 1}`;
        viewerCount.textContent = `${String(imageIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
        const showNavigation = images.length > 1;
        viewerPrev.hidden = !showNavigation;
        viewerNext.hidden = !showNavigation;
    }

    function openViewer(project) {
        images = project.dataset.gallery.split(',').map((path) => path.trim()).filter(Boolean);
        if (!images.length) return;
        const study = caseStudies[currentLanguage][project.dataset.case];
        imageIndex = 0;
        lastFocusedProject = project;
        viewerTitle.textContent = project.dataset.title;
        caseChallenge.textContent = study.challenge;
        caseRole.textContent = study.role;
        caseSolution.textContent = study.solution;
        caseOutcome.textContent = study.outcome;
        caseTech.textContent = study.tech;
        renderViewer();
        viewer.classList.add('open');
        viewer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('locked');
        viewerClose.focus();
    }

    function closeViewer() {
        viewer.classList.remove('open');
        viewer.setAttribute('aria-hidden', 'true');
        viewerImage.src = '';
        document.body.classList.remove('locked');
        if (lastFocusedProject) lastFocusedProject.focus();
    }

    function moveViewer(direction) {
        imageIndex = (imageIndex + direction + images.length) % images.length;
        renderViewer();
    }

    document.querySelectorAll('.project[data-gallery]').forEach((project) => {
        project.setAttribute('role', 'button');
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

    document.addEventListener('keydown', (event) => {
        if (!viewer.classList.contains('open')) return;
        if (event.key === 'Escape') closeViewer();
        if (event.key === 'ArrowLeft' && images.length > 1) moveViewer(-1);
        if (event.key === 'ArrowRight' && images.length > 1) moveViewer(1);
    });
});
