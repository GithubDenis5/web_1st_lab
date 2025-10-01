// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Элементы для взаимодействия
    const colorButton = document.getElementById('colorButton');
    const infoButton = document.getElementById('infoButton');
    const extraInfo = document.getElementById('extraInfo');
    const profilePhoto = document.getElementById('profilePhoto');
    
    // Массив цветов для смены фона
    const colors = [
        '#f4f4f4', // исходный цвет
        '#e8f4f8', // светло-голубой
        '#f8f4e8', // светло-бежевый
        '#f0e8f8', // светло-фиолетовый
        '#e8f8f0'  // светло-зеленый
    ];
    let currentColorIndex = 0;
    
    // Функция смены цвета фона
    function changeBackgroundColor() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
        
        // Добавляем анимацию
        document.body.style.transition = 'background-color 0.5s ease';
    }
    
    // Функция показа/скрытия дополнительной информации
    function toggleExtraInfo() {
        extraInfo.classList.toggle('show');
        
        // Меняем текст кнопки
        if (extraInfo.classList.contains('show')) {
            infoButton.textContent = 'скрыть дополнительную информацию';
        } else {
            infoButton.textContent = 'показать дополнительную информацию';
        }
    }
    
    // Функция для имитации загрузки фото (можно заменить на реальную)
    function simulatePhotoLoad() {
        profilePhoto.style.backgroundColor = '#3498db';
        profilePhoto.style.display = 'flex';
        profilePhoto.style.alignItems = 'center';
        profilePhoto.style.justifyContent = 'center';
        profilePhoto.style.color = 'white';
        profilePhoto.style.fontSize = '1.2rem';
        profilePhoto.textContent = 'Фото загружено!';
        
        // Добавляем анимацию
        profilePhoto.style.animation = 'fadeIn 1s ease';
    }
    
    // Обработчики событий
    colorButton.addEventListener('click', changeBackgroundColor);
    infoButton.addEventListener('click', toggleExtraInfo);
    
    // Имитируем загрузку фото через 2 секунды после загрузки страницы
    setTimeout(simulatePhotoLoad, 2000);
    
    // Дополнительная интерактивность для навигации
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Добавляем анимацию при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за секциями
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});