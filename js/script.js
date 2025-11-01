document.addEventListener('DOMContentLoaded', function() {
  // متغيرات عامة
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuBtn = document.querySelector('.close-menu');
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  const languageBtn = document.querySelector('.language-btn');
  const languageDropdown = document.querySelector('.language-dropdown');
  const mobileLanguageSelector = document.querySelector('.mobile-menu .language-selector');
  const currentYear = document.getElementById('current-year');
  
  // تعيين سنة حقوق النشر
  currentYear.textContent = new Date().getFullYear();
  
  // قائمة الجوال
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // زر العودة للأعلى
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('active');
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      scrollToTopBtn.classList.remove('active');
      document.querySelector('.navbar').classList.remove('scrolled');
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // تبديل اللغة
  languageBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
  });
  
  document.addEventListener('click', function() {
    languageDropdown.classList.remove('show');
  });
  
  // منع إغلاق القائمة عند النقر عليها
  languageDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  // تأثيرات الحركة للعناصر
  const animateElements = document.querySelectorAll('.feature-card, .teacher-card, .stat-card, .contact-form, .contact-info, .info-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // عدادات الإحصائيات
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  
  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-count');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCount = () => {
      current += step;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target;
      }
    };
    
    const statObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        statObserver.unobserve(stat);
      }
    });
    
    statObserver.observe(stat);
  });
  
  // جدول الحصص (بيانات وهمية)
  const scheduleData = {
    saturday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '10:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'متوسط', type: 'Zoom' },
      { time: '12:30 م', teacher: 'الشيخ عبدالرحمن راضي', level: 'مبتدئ', type: 'Zoom' },
    ],

        sunday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
    ],

        monday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
    ],

        tuesday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
    ],

        wednesday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
    ],

        thursday: [
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
      { time: '08:00 ص', teacher: 'الشيخ عبدالرحمن راضي', level: 'محترف', type: 'Zoom' },
    ],

        friday: [
      { time: '',  teacher: 'NARQA', level: '', type: 'لا يوجد حصص متاحة لهذا اليوم' },
    ],
    // يمكن إضافة بيانات الأيام الأخرى بنفس الطريقة
  };
  
  function renderSchedule(day) {
    const tbody = document.getElementById('schedule-data');
    tbody.innerHTML = '';
    
    scheduleData[day].forEach(session => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${session.time}</td>
        <td>${session.teacher}</td>
        <td>${session.level}</td>
        <td>${session.type}</td>
        <td><button class="book-btn">حجز</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // تبديل أيام الجدول
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderSchedule(this.dataset.day);
    });
  });
  
  // تحميل الجدول الأول
  renderSchedule('saturday');
  
  // حجز الجلسة
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('book-btn')) {
      const row = e.target.closest('tr');
      const cells = row.cells;
      
      document.getElementById('teacher-name').value = cells[1].textContent;
      document.getElementById('session-date').valueAsDate = new Date();
      document.getElementById('session-time').value = cells[0].textContent.split(' ')[0];
      
      // يمكن فتح المودال هنا إذا كنت تستخدم واحدًا
      alert(`تم حجز جلسة مع ${cells[1].textContent} في الساعة ${cells[0].textContent}`);
    }
  });
});