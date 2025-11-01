   // إنشاء عناصر أنيميشن الخلفية
        const backgroundAnimation = document.querySelector('.background-animation');
        const colors = ['#6a11cb', '#2575fc', '#ff4e50', '#28a745'];
        
        for (let i = 0; i < 15; i++) {
            const span = document.createElement('span');
            const size = Math.random() * 30 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            span.style.width = `${size}px`;
            span.style.height = `${size}px`;
            span.style.background = color;
            span.style.top = `${Math.random() * 100}%`;
            span.style.left = `${Math.random() * 100}%`;
            span.style.animationDuration = `${Math.random() * 10 + 10}s`;
            span.style.animationDelay = `${Math.random() * 5}s`;
            
            backgroundAnimation.appendChild(span);
        }
        
        // تأثير الكتابة للنص الرئيسي
        const heroText = document.querySelector('.hero-content h2');
        const originalText = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // بدء تأثير الكتابة عند تحميل الصفحة
        window.addEventListener('load', typeWriter);
        
        // تأثير التمرير السلس للروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });