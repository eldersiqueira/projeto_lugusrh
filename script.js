// ============================================
// CARROSSEL DA SEÇÃO "LUGUS RH"
// 3 slides: Sobre a LUGUS RH / Principais Trabalhos / Nossos Pilares
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    const slides = [
        {
            label: 'Sobre a LUGUS RH',
            icon: 'bi-building',
            title: 'Sobre a LUGUS RH',
            content: [
                'Mais de 12 anos de atuação em Recursos Humanos',
                'Fundada por Gustavo, unindo visão estratégica e domínio técnico',
                'Atuação em estruturação de RH, recrutamento, compliance e qualidade'
            ]
        },
        {
            label: 'Principais Trabalhos',
            icon: 'bi-people',
            title: 'Principais Trabalhos',
            content: [
                'Estruturação de áreas de RH do zero',
                'Processos de recrutamento e seleção',
                'Compliance trabalhista e qualidade integrada'
            ]
        },
        {
            label: 'Nossos Pilares',
            icon: 'bi-diagram-3',
            title: 'Nossos Pilares',
            content: [
                'Pessoas — no centro de cada decisão',
                'Estratégia — processos pensados para crescer',
                'Resultados — impacto real para o negócio'
            ]
        }
    ];

    let current = 1; // começa em "Principais Trabalhos", como no modelo

    const iconEl = document.getElementById('slideIcon');
    const titleEl = document.getElementById('slideTitle');
    const contentEl = document.getElementById('slideContent');
    const labelPrevEl = document.getElementById('labelPrev');
    const labelNextEl = document.getElementById('labelNext');
    const dotsEls = document.querySelectorAll('#slideDots .dot');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    function render() {
        const slide = slides[current];
        const prevSlide = slides[(current - 1 + slides.length) % slides.length];
        const nextSlide = slides[(current + 1) % slides.length];

        iconEl.innerHTML = `<i class="bi ${slide.icon}"></i>`;
        titleEl.textContent = slide.title;
        contentEl.innerHTML = slide.content.map(linha => `<p>${linha}</p>`).join('');
        labelPrevEl.textContent = prevSlide.label;
        labelNextEl.textContent = nextSlide.label;

        dotsEls.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    }

    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', function () {
            current = (current - 1 + slides.length) % slides.length;
            render();
        });

        btnNext.addEventListener('click', function () {
            current = (current + 1) % slides.length;
            render();
        });

        dotsEls.forEach((dot) => {
            dot.addEventListener('click', function () {
                current = parseInt(this.dataset.index, 10);
                render();
            });
        });

        render();
    }

});