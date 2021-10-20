window.onload = function() {
    window.scroll(0, 0, 'smooth', behavior = 'smooth');
};

window.setTimeout(function() {
    // Menu scroll
    const menu = document.querySelector('header');
    // Pegando a posicao.y do aside (Sobre)...
    const sobre = document.querySelector('.curriculo');
    const posicaoSobre = sobre.getBoundingClientRect();
    // Pegando a posicao.y do step3 (Contato)...
    const contato = document.querySelector('.contato');
    const posicaoContato = contato.getBoundingClientRect();

    // Voltar ao topo clicando no #logo...
    const logo = document.querySelector('#logo').addEventListener("click", function(event) {
        event.preventDefault;
        window.scroll(0, 0, 'smooth', behavior = 'smooth');
    });

    const iconeHX = document.querySelector('.icone').addEventListener("click", function(event) {
        event.preventDefault;
    });

    // Voltar a página para o topo...
    const moveTopo = document.querySelector('.moveTopo');
    moveTopo.addEventListener("click", function(event) {
        event.preventDefault;
        window.scroll(0, 0, 'smooth', behavior = 'smooth');
    });

    // Scroll da página até o aside (Sobre)...
    const moveSobre = document.querySelector('.moveSobre');
    moveSobre.addEventListener("click", function(event) {
        event.preventDefault;
        window.scroll(0, posicaoSobre.y, behavior = 'smooth');
    });

    // Scroll da página até o .contato (Contato)...
    const moveContato = document.querySelector('.moveContato');
    moveContato.addEventListener("click", function(event) {
        event.preventDefault;
        window.scroll(0, posicaoContato.y, behavior = 'smooth');
    });

    function animeScroll() {

        const header = document.querySelector('header');
        const inicio = header.children[2].children[0];

        const hamburguer = document.querySelector('.hamburguer');
        const icone = hamburguer.children[0];

        /* Muda as cores do menu, background branco e fonte verde (class .header) */
        const aside = document.querySelector('.curriculo');
        const posicao = aside.getBoundingClientRect();

        if (posicao.y < 55) {
            menu.classList.add("header")
            menu.style.transition = '.5s';

            icone.style.color = '#2c8560';
            icone.style.transition = '.5s';

            inicio.style.opacity = '1';
            inicio.style.display = 'block';
            inicio.style.transition = '.9s';
        } else {
            menu.classList.remove("header")
            menu.style.transition = '.5s';

            icone.style.color = '#fff';
            icone.style.transition = '.5s';

            inicio.style.opacity = '0';
            inicio.style.display = 'none';
            inicio.style.transition = '.5s';
        }

        const contato = document.querySelector('.contato');
        const posicaoContato = contato.getBoundingClientRect();

        if (posicaoContato.y < 25) {
            menu.classList.remove("header")
            menu.style.transition = '.5s';

            icone.style.color = '#fff';
            icone.style.transition = '.5s';
        }

        const container = document.querySelector('.container');
        const p = container.children[0];

        /* Oculta linha por linha da descrição */
        const span1 = p.children[0];
        const span2 = p.children[1];
        const span3 = p.children[2];
        const span4 = p.children[3];

        const posicao1 = span1.getBoundingClientRect();
        const posicao2 = span2.getBoundingClientRect();
        const posicao3 = span3.getBoundingClientRect();
        const posicao4 = span4.getBoundingClientRect();

        if (posicao1.y < 60) {
            span1.style.opacity = '0';
            span1.style.transition = '.3s';
        } else {
            span1.style.opacity = '1';
            span1.style.transition = '.3s';
        }

        if (posicao2.y < 60) {
            span2.style.opacity = '0';
            span2.style.transition = '.3s';
        } else {
            span2.style.opacity = '1';
            span2.style.transition = '.3s';
        }

        if (posicao3.y < 60) {
            span3.style.opacity = '0';
            span3.style.transition = '.5s';
        } else {
            span3.style.opacity = '1';
            span3.style.transition = '.5s';
        }

        if (posicao4.y < 60) {
            span4.style.opacity = '0';
            span4.style.transition = '.5s';
        } else {
            span4.style.opacity = '1';
            span4.style.transition = '.5s';
        }

        const step3 = document.querySelector('.contato');
        const h1 = step3.children[0].children[0].children[0];
        const p1 = step3.children[0].children[0].children[1];
        const p2 = step3.children[0].children[0].children[2];
        const posicaoh1 = h1.getBoundingClientRect();

        if (posicaoh1.y < 45) {
            h1.style.opacity = '0';
            h1.style.transition = '.3s';
        } else {
            h1.style.opacity = '1';
            h1.style.transition = '.3s';
        }
        if (posicaoh1.y < 15) {
            p1.style.opacity = '0';
            p1.style.transition = '.3s';
        } else {
            p1.style.opacity = '1';
            p1.style.transition = '.3s';
        }
        if (posicaoh1.y < -15) {
            p2.style.opacity = '0';
            p2.style.transition = '.3s';
        } else {
            p2.style.opacity = '1';
            p2.style.transition = '.3s';
        }
    }
    window.addEventListener('scroll', function() {
        animeScroll();
    })

    // focus no nome
    const form = document.querySelector('form');
    form.addEventListener("click", (formName));

    const nomeid = document.querySelector('#nomeid');

    function formName() {
        if (nomeid.value.length == 0) {
            nomeid.focus();
        }
    }

    const email = document.querySelector('#emailid');
    email.addEventListener("change", (validarEmail));

    function validarEmail() {
        if (email.value.indexOf("@") == -1) {
            email.valid = false;
        }
        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
            email.valid = false;
            // email.disabled = true;
        }
    }

    // Menu Hamburguer
    // Quando a página é recarregada com menu aberto li[0] não fica oculta

    const hamburguer = document.querySelector('.hamburguer');
    const iconeH = hamburguer.children[0];
    const iconeX = hamburguer.children[1];
    const ul = document.querySelector('.ul');

    iconeH.addEventListener("click", (menuHamburguer));

    function menuHamburguer() {
        // Ativa a ul com as li...
        ul.style.display = 'flex';
        ul.style.transition = '.5s';
        ul.children[0].style.display = 'none';
        // Muda os icones...
        iconeH.style.display = 'none';
        iconeX.style.display = 'flex';
        hamburguer.style.transition = '.5s';

        window.addEventListener('scroll', function() {
            closeMenu();
        })

        iconeX.addEventListener("click", (closeMenu));

        function closeMenu() {
            ul.style.display = 'none';
            iconeH.style.display = 'flex';
            iconeX.style.display = 'none';

            ul.style.transition = '.5s';
            hamburguer.style.transition = '.5s';
        }
    }
}, 1000);