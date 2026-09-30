
const notice = document.querySelector('#notice');

document.querySelectorAll('[data-place]').forEach(button => {
  button.addEventListener('click', () => {
    const place = button.dataset.place;

    const descriptions = {
      'Lúmen': 'A cidade de Lúmen recebe viajantes. Em uma versão futura: taverna, loja, ferreiro e quadro de missões.',
      'Floresta de Nhalor': 'Trilhas perigosas, criaturas selvagens e recursos para coleta. Em breve: encontros e missões.',
      'Ruínas de Vharak': 'Uma antiga estrutura tomada por monstros. Em breve: masmorras, chefes e recompensas.',
      'Fortaleza de Drakmor': 'Uma fortaleza cercada por mistérios. Em breve: desafios avançados e conflitos de guildas.'
    };

    notice.innerHTML = `<strong>${place}</strong><p>${descriptions[place]}</p>`;
  });
});

document.querySelectorAll('[data-action]').forEach(button => {
  button.addEventListener('click', () => {
    notice.innerHTML = `<strong>${button.dataset.action}</strong><p>Esta área faz parte do planejamento e será implementada nas próximas etapas.</p>`;

    notice.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  });
});

document.querySelector('#profileBtn').addEventListener('click', () => {
  notice.innerHTML = '<strong>Perfil de aventureiro</strong><p>Cadastro e criação de personagem serão conectados ao servidor após definirmos a hospedagem.</p>';
});
