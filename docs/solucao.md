# Solucao

## Visao Geral

VozSegura e uma plataforma conversacional ancorada no WhatsApp que combina inteligencia artificial, curadoria humana e dinamicas sociais para proteger, educar e engajar pessoas com 60 anos ou mais. A solucao foi desenhada para funcionar em um ecossistema, onde cada componente reforca o outro: um bot de checagem em tempo real, um jornal personalizado com conteudo filtrado, comunidades de apoio e gamificacao.

## Modulo 1 – Bot de Checagem de Mensagens

**Objetivo:** Detectar rapidamente se uma mensagem e verdadeira ou falsa e orientar o usuario em audio simples.

- **Entrada:** O usuario encaminha para o contato da VozSegura um texto, um audio, uma imagem ou um video recebido no WhatsApp, ou grava um audio perguntando se aquilo e verdade.
- **Processamento:** Utiliza um pipeline de reconhecimento de fala (ASR) para transcrever audios, visao computacional para extrair texto de imagens (OCR), e modelos de linguagem para comparar a mensagem com bases de dados de fact-checkers (Aos Fatos, Agencia Lupa, Comprova). Para mensagens novas, o modelo classifica o conteudo em categorias de risco (beneficios, saude, politica, golpes bancarios) e avalia sinais de fraude (caps lock, links suspeitos, pedidos de dados).
- **Saida:** O bot retorna em audio (e texto opcional): o veredito (verdadeiro, falso ou incerto), uma justificativa curta (por que e golpe) e uma dica de autoprotecao. Exemplo: "Seu Joao, essa mensagem dizendo que o INSS vai cortar beneficios e falsa; o INSS nunca pede senha por telefone. Nao clique em links nem compartilhe dados."
- **Recursos de Acessibilidade:** Respostas sempre em audio humanizado; ritmo de fala lento; opcao de repetir; uso de linguagem carinhosa ("seu" e "dona" + nome); possibilidade de escalar para atendimento humano em temas sensiveis.

## Modulo 2 – Jornal/Newsletter Personalizado

**Objetivo:** Oferecer diariamente ou semanalmente um boletim em audio com noticias que o idoso realmente gosta, somadas a alertas de golpes, conteudos educativos e desafios interativos.

- **Configuracao de interesses:** No cadastro, o usuario (ou um familiar) seleciona temas preferidos: times de futebol, novelas, politicas publicas, saude, beneficios, religiao etc. Isso cria um perfil de interesses.
- **Coleta de conteudo confiavel:** A plataforma monitora portais de noticias, sites oficiais e redes sociais utilizando scraping e APIs. Cada noticia passa por um filtro de credibilidade (checa se a fonte e reconhecida, se foi objeto de verificacao, se nao contem sinais de boato) e por um filtro de relevancia (interesses do usuario). Conteudos suspeitos sao descartados ou marcados como "em verificacao".
- **Producao de boletim:** Um algoritmo monta um roteiro com blocos de 30 a 60 segundos: 1) saudacao e contextualizacao; 2) noticias dos interesses escolhidos, escritas em linguagem simples e convertidas em audio com voz do personagem; 3) "Golpe do Dia", trazendo exemplos de boatos que circularam na semana; 4) desafio rapido ou enquete ("voce ja recebeu algo assim? Responda sim ou nao"); 5) convite para a comunidade.
- **Entrega:** O boletim chega pelo WhatsApp no mesmo contato do bot, em audio (com texto transcrito opcional). O usuario pode ouvir na ordem que quiser, repetir ou pular blocos.
- **Aprendizado continuo:** Feedback dos idosos (respostas aos desafios, assuntos mais ou menos escutados) ajusta o algoritmo de curadoria. No futuro, relatos enviados pelas proprias comunidades alimentarão novas edicoes do jornal.

## Modulo 3 – Comunidades e Participacao Ativa

**Objetivo:** Transformar o idoso de receptor passivo em protagonista, fomentando apoio mutuo e troca de experiencias.

- **Clubes da Verdade:** Sao grupos de WhatsApp segmentados (por regiao ou tema) moderados pela VozSegura. La o bot publica o "Golpe do Dia", desafios e enquetes. Os membros podem encaminhar duvidas, reagir com emojis (verdade/mentira) e compartilhar relatos. Tudo em ambiente seguro e mediado.
- **Correspondentes:** Usuarios engajados podem gravar audios contando como quase cairam em golpes ou como alertaram alguem. Esses relatos, com permissao, sao transformados em quadros do jornal e ajudam outros idosos a se reconhecer nas historias.
- **Rede de apoio familiar:** Cada idoso pode cadastrar contatos de confianca (filho, neto, cuidador). Esses familiares recebem relatorios simples sobre o uso (quantas mensagens checadas, temas mais frequentes) e alertas automaticos em caso de conteudo perigoso. Isso cria um circulo de protecao.

## Modulo 4 – Gamificacao e Desafios Diarios

**Objetivo:** Transformar o ato de aprender e verificar em algo prazeroso e continuo.

- **Desafios do dia:** Pequenas missoes diarias enviadas via WhatsApp ("Identifique um golpe no grupo da familia", "Responda se esse audio e verdadeiro ou falso"). Ao completar, o usuario ganha pontos e selos.
- **Quizzes rapidos:** O bot apresenta tres mensagens e pede ao idoso para classifica-las em golpe ou verdade. A cada acerto, explica o porquê. Isso reforca o aprendizado ativo.
- **Niveis e selos:** Conforme acumula pontos, o idoso evolui de "Curioso" para "Cacador de Golpes" ate "Guardiao da Familia". Selos sao compartilhaveis nos grupos, gerando reconhecimento social.
- **Beneficios reais:** Grupos que coletivamente completarem mais desafios no mes podem ganhar conteudos exclusivos ou participar de lives com especialistas. Isso incentiva a colaboracao e a competencia saudavel.

## Tecnologias Utilizadas

- **WhatsApp Business API** para comunicacao automatizada e gestao de mensagens.
- **ASR (Automatic Speech Recognition)** e **TTS (Text-To-Speech)** para transcricao de audios e sintese de voz humanizada.
- **LLMs e NLP** para classificacao de mensagens, geracao de respostas simples e personalizacao de conteudo.
- **OCR** e **Computer Vision** para extrair texto de imagens e videos.
- **Banco de dados** para perfis de usuarios, historico de mensagens e pontuacao de gamificacao.
- **Integracao com bases de checagem** (Aos Fatos, Lupa, Comprova) e scrapers de sites confiaveis.

## Diferenciais

- **Audio como padrao:** Prioriza a fala tanto na entrada quanto na saida, adaptando-se a preferencia do publico idoso.
- **Personalizacao por interesses:** Permite que cada boletim seja unico e relevante, evitando que o usuario sinta o conteudo como spam generico.
- **Proatividade:** Vai alem da checagem reativa; envia alertas e educa continuamente atraves do jornal e dos desafios.
- **Participacao e afeto:** As comunidades e a persona carinhosa fomentam empatia e engajamento. O idoso sente que fala com um amigo e que pode ajudar os outros.
- **Escalabilidade:** A solucao e modular e pode ser replicada em diferentes regioes, linguas e canais (telefone, assistentes de voz) com adaptacoes minimas.
