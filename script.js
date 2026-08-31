// ============================================
// CARROSSEL DA SEÇÃO "LUGUS RH"
// 3 slides: Sobre a LUGUS RH / Principais Trabalhos / Nossos Pilares
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    const slides = [
        {
            label: 'Sobre a LUGUS RH',
            anchor: 'sobre',
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
            anchor: 'trabalhos',
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
            anchor: 'pilares',
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
    const labelPrevLinkEl = document.getElementById('labelPrevLink');
    const labelNextLinkEl = document.getElementById('labelNextLink');
    const centerLinkEl = document.getElementById('carouselCenterLink');
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

        if (centerLinkEl) centerLinkEl.href = `lugus-rh.html#${slide.anchor}`;
        if (labelPrevLinkEl) labelPrevLinkEl.href = `lugus-rh.html#${prevSlide.anchor}`;
        if (labelNextLinkEl) labelNextLinkEl.href = `lugus-rh.html#${nextSlide.anchor}`;

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
            dot.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                current = parseInt(this.dataset.index, 10);
                render();
            });
        });

        render();
    }

});