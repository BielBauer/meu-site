document.addEventListener("DOMContentLoaded", function () {
  const noticias = [
    {
      id: 1,
      titulo: "Brasil anuncia novo programa de infraestrutura urbana",
      categoria: "Política",
      imagem: "img/infraestrutura-urbana.jpg",
      resumo: "Governo lança investimento em transporte, saneamento e energia.",
      link: "noticia-1.html"
    },
    {
      id: 2,
      titulo: "Brasil e Argentina se enfrentam em amistoso histórico",
      categoria: "Esportes",
      imagem: "img/brasil-argentina.jpg",
      resumo: "Partida no Maracanã atrai atenção internacional.",
      link: "noticia-2.html"
    },
    {
      id: 3,
      titulo: "Feira internacional de tecnologia reúne empresas inovadoras",
      categoria: "Tecnologia",
      imagem: "img/feira-tecnologia.jpg",
      resumo: "Evento destaca IA, robótica e realidade aumentada.",
      link: "noticia-3.html"
    },
    {
      id: 4,
      titulo: "Exposição celebra a diversidade cultural brasileira",
      categoria: "Cultura",
      imagem: "img/exposicao-cultural.jpg",
      resumo: "Museu apresenta mostra interativa com foco regional.",
      link: "noticia-4.html"
    },
    {
      id: 5,
      titulo: "Economia global apresenta sinais de recuperação",
      categoria: "Economia",
      imagem: "img/economia-global.jpg",
      resumo: "Indicadores apontam leve crescimento em países emergentes.",
      link: "noticia-5.html"
    },
    {
      id: 6,
      titulo: "Campanha nacional de vacinação começa nesta semana",
      categoria: "Saúde",
      imagem: "img/vacinacao.jpg",
      resumo: "Ministério da Saúde visa vacinar 50 milhões de pessoas.",
      link: "noticia-6.html"
    }
  ];

  const container = document.getElementById("noticias-container");

  if (!container) {
    console.error("Elemento com ID 'noticias-container' não encontrado.");
    return;
  }

  noticias.forEach(noticia => {
    const article = document.createElement("article");
    article.className = "noticia";

    article.innerHTML = `
      <a href="${noticia.link}">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" />
        <h2>${noticia.titulo}</h2>
      </a>
      <p><strong>${noticia.categoria}</strong> - ${noticia.resumo}</p>
    `;

    container.appendChild(article);
  });
});
