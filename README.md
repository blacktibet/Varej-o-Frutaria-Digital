# Varejão Frutaria Digital

Crie um site moderno, simples, elegante e responsivo para o supermercado “Varejão das Frutas”.

O objetivo principal do site é permitir que os clientes conheçam o supermercado, visualizem os folhetos de ofertas vigentes, naveguem pelas páginas dos folhetos, encontrem informações sobre as lojas e tenham acesso aos canais de contato e redes sociais.

Nesta primeira versão, utilize dados fictícios para endereços, telefones, imagens, ofertas, redes sociais e demais informações que ainda não foram fornecidas.

1. Identidade visual

O site deve transmitir a sensação de um supermercado de frutas e alimentos, com uma identidade visual:

Moderna

Alegre

Limpa

Profissional

Familiar

Com destaque para produtos frescos e ofertas

Utilize uma paleta de cores inspirada em supermercado/feira, preferencialmente combinando tons de verde, amarelo, vermelho e branco, mas sem exagerar na quantidade de cores.

O design deve possuir boa hierarquia visual, bastante espaço entre os elementos, tipografia legível e cards com bordas levemente arredondadas.

O site deve funcionar perfeitamente em:

Desktop

Tablet

Smartphones

Em dispositivos móveis, os elementos devem se reorganizar de forma natural e os cards devem ocupar praticamente toda a largura disponível.

2. Cabeçalho

O cabeçalho deve ficar no topo do site.

Lado esquerdo

Exibir o símbolo/logo do Varejão das Frutas.

O logo deve ser clicável e levar o usuário para a página inicial.

Lado direito

Exibir os seguintes links:

Lojas

Sobre

Contato

Comportamento

Lojas

Ao clicar em “Lojas”, o usuário deve ser levado para a seção de lojas da página inicial, utilizando uma âncora/scroll suave.

Sobre

Ao clicar em “Sobre”, o usuário deve ser levado para uma página exclusiva sobre o supermercado.

Contato

Ao clicar em “Contato”, o usuário deve ser levado para uma página exclusiva de contato.

Em telas pequenas, transformar o menu em um menu mobile/hamburger.

O cabeçalho deve permanecer visualmente consistente em todas as páginas.

3. Página inicial

A página inicial deve possuir as seguintes seções, nesta ordem:

Cabeçalho

Carrossel/banner

Ofertas

Lojas

Rodapé

4. Carrossel principal

Logo abaixo do cabeçalho deve existir um carrossel de destaque.

O carrossel deve possuir pelo menos 2 slides.

Os slides podem apresentar conteúdos fictícios como:

Slide 1

“Ofertas especiais toda semana”

Texto complementar:

“Confira nossos folhetos e aproveite nossas melhores oportunidades.”

Slide 2

“Qualidade e variedade perto de você”

Texto complementar:

“Encontre frutas, verduras, carnes, bebidas, produtos de mercearia e muito mais.”

Utilize imagens ilustrativas relacionadas a supermercado, frutas, hortaliças e compras.

Comportamento

O carrossel deve trocar automaticamente de slide a cada 5 segundos.

Deve possuir botão para voltar ao slide anterior.

Deve possuir botão para avançar para o próximo slide.

Os botões devem ficar nas laterais do carrossel.

Deve possuir indicadores de posição, como pequenos pontos, na parte inferior.

O usuário também deve poder trocar manualmente os slides.

A transição deve ser suave.

No mobile, os controles devem continuar fáceis de utilizar.

5. Seção de ofertas

Logo abaixo do carrossel deve existir a seção:

“Ofertas”

Adicionar um pequeno texto introdutório, por exemplo:

“Confira nossos folhetos de ofertas e aproveite as melhores oportunidades do Varejão das Frutas.”

As ofertas devem ser exibidas através de cards de folhetos.

Layout

No desktop:

No máximo 2 cards lado a lado por linha.

No tablet/mobile:

Os cards devem se reorganizar para uma coluna quando necessário.

Card de oferta

Cada card deve conter:

Imagem/capa do folheto

Nome do folheto

Período da promoção

Um rótulo visual indicando quanto tempo falta para o folheto expirar

Exemplo:

Ofertas da Semana

“01/09/2026 até 07/09/2026”

“Termina em 2 dias”

O contador deve possuir aparência de um badge/etiqueta de destaque.

Utilize inicialmente alguns dados fictícios, por exemplo:

Ofertas da Semana

Festival das Frutas

Especial do Hortifruti

Ofertas de Fim de Semana

As imagens devem ser representações fictícias de folhetos de supermercado.

Caso seja implementado um contador regressivo, ele deve ser atualizado automaticamente.

6. Visualização completa dos folhetos

Esta é uma funcionalidade muito importante do site.

Ao clicar em qualquer card de folheto da seção de ofertas, o usuário deve conseguir abrir o encarte e visualizar todas as suas páginas.

A experiência deve ser semelhante a abrir um folheto físico ou uma revista digital.

Visualizador do folheto

Ao clicar no card, abrir um visualizador em tela cheia, preferencialmente através de uma página dedicada ou modal fullscreen.

O visualizador deve:

Ocupar praticamente toda a tela.

Possuir fundo escuro ou neutro para destacar o folheto.

Exibir a página atual do encarte em tamanho grande.

Permitir navegar para a página anterior.

Permitir navegar para a próxima página.

Exibir a quantidade/posição das páginas.

Exemplo:

Página 2 de 8

Controles

Adicionar controles claramente visíveis:

Botão ← Anterior

Botão Próxima →

Botão Fechar X

Os botões de navegação devem ficar nas laterais da área do folheto.

O botão de fechar deve ficar no canto superior da tela.

Navegação por teclado

No desktop, permitir também:

Tecla ← → página anterior

Tecla → → próxima página

Tecla Esc → fechar o visualizador

Navegação em dispositivos móveis

No celular, os controles devem ser grandes e fáceis de tocar.

Se possível, permitir também gestos de swipe/deslizar:

Deslizar para a esquerda → próxima página

Deslizar para a direita → página anterior

Indicador de páginas

Exibir claramente a página atual.

Exemplo:

2 / 8

Também pode ser utilizada uma pequena barra de progresso ou indicadores de páginas.

Zoom

O usuário deve conseguir visualizar os detalhes dos produtos do folheto.

Quando possível, implementar:

Zoom in

Zoom out

Ajustar à tela

No mobile, permitir o gesto de pinça para zoom, caso seja compatível com a implementação escolhida.

Imagens das páginas

Cada folheto deve possuir várias imagens, uma para cada página.

Estruture os dados de maneira que um folheto possa ser representado conceitualmente assim:

Folheto
├── id
├── nome
├── imagem da capa
├── data de início
├── data de término
└── páginas
    ├── página 1
    ├── página 2
    ├── página 3
    ├── página 4
    └── ...


Utilize dados fictícios e imagens fictícias nesta primeira versão.

Por exemplo:

Ofertas da Semana

Capa

Página 1

Página 2

Página 3

Página 4

Página 5

Ao clicar no card, o visualizador deve abrir diretamente na primeira página/capa.

Experiência de fechamento

Quando o usuário fechar o visualizador, ele deve retornar para a página inicial e continuar aproximadamente na posição em que estava antes de abrir o folheto.

7. Seção de lojas

Abaixo das ofertas deve existir a seção:

“Nossas Lojas”

Texto introdutório:

“Encontre a loja do Varejão das Frutas mais próxima de você.”

A seção deve possuir cards semelhantes aos cards de ofertas.

Layout

No desktop:

No máximo 2 cards lado a lado por linha.

No mobile:

Uma loja por linha.

Card da loja

Cada card deve ser dividido em duas áreas.

Parte superior — Galeria de imagens

A parte superior deve apresentar uma imagem da loja.

O card deve funcionar como uma pequena galeria/carrossel independente.

Deve possuir:

Botão lateral esquerdo para visualizar a imagem anterior.

Botão lateral direito para visualizar a próxima imagem.

Indicadores mostrando a quantidade de imagens.

Cada loja deve possuir pelo menos 2 ou 3 imagens fictícias.

Importante: o carrossel de cada loja deve funcionar de maneira independente, sem interferir nas outras lojas.

Parte inferior — Informações

A parte inferior do card deve apresentar:

Nome da loja

Endereço

Telefone

Opcionalmente, adicionar:

Horário de funcionamento

Botão “Como chegar”

Para “Como chegar”, utilize inicialmente um link fictício ou um link para o Google Maps baseado no endereço fictício.

Crie inicialmente pelo menos 3 lojas fictícias, por exemplo:

Loja Centro

Rua Exemplo, 100 — Centro
Janaúba - MG
Telefone: (38) 0000-0000

Loja São Gonçalo

Avenida Exemplo, 500 — São Gonçalo
Janaúba - MG
Telefone: (38) 0000-0001

Loja Nova Porteirinha

Rua das Frutas, 250 — Centro
Nova Porteirinha - MG
Telefone: (38) 0000-0002

Deixe esses dados estruturados de forma que possam ser facilmente substituídos posteriormente por dados reais.

8. Página “Sobre”

Criar uma página exclusiva para apresentar o Varejão das Frutas.

A página deve ter uma apresentação institucional simples e profissional.

Exemplo de conteúdo fictício:

“Sobre o Varejão das Frutas”

“O Varejão das Frutas nasceu com o propósito de oferecer variedade, qualidade e praticidade para as famílias da região.”

Criar seções como:

Quem somos

Uma breve apresentação fictícia da empresa.

Nossa missão

Texto fictício sobre oferecer produtos de qualidade e bom atendimento.

Nosso compromisso

Texto fictício destacando qualidade, variedade, atendimento e praticidade.

9. Delivery

A página “Sobre” também deve possuir uma seção de destaque explicando o serviço de delivery.

O Varejão das Frutas possui serviço de entregas para:

Janaúba - MG

Nova Porteirinha - MG

Criar uma área visualmente destacada com o título:

“Receba suas compras em casa”

Informar claramente as regras:

Compras abaixo de R$ 50,00

Taxa de entrega de R$ 5,00.

Compras a partir de R$ 50,00

Entrega gratuita.

Deixar essa informação muito clara e fácil de entender.

Utilizar cards ou uma tabela visual para representar as duas condições.

Importante: compras de R$ 50,00 ou mais possuem entrega gratuita.

10. Página “Contato”

Criar uma página exclusiva para contato.

A página deve apresentar os canais de comunicação da empresa de maneira organizada.

Criar cards ou blocos para:

Telefone

Utilizar telefone fictício.

WhatsApp

Utilizar número fictício.

E-mail

Utilizar e-mail fictício.

Redes sociais

Adicionar links fictícios para:

Instagram

Facebook

TikTok

Não criar formulário de contato nesta primeira versão.

A página deve ser exclusivamente informativa, apresentando os canais através dos quais o cliente pode entrar em contato com a empresa.

11. Rodapé

O rodapé deve aparecer na página inicial e também nas páginas internas.

Ele deve possuir três áreas principais.

Esquerda

Exibir o logo/símbolo do:

Varejão das Frutas

Centro

Exibir links para:

Início

Lojas

Sobre

Contato

O link “Lojas” deve levar diretamente para a seção de lojas da página inicial.

Direita

Exibir as redes sociais da empresa utilizando ícones:

Instagram

Facebook

TikTok

Os ícones devem ser clicáveis.

Utilizar links fictícios nesta primeira versão.

Na parte inferior do rodapé adicionar:

“© 2026 Varejão das Frutas. Todos os direitos reservados.”

12. Navegação

O site deve possuir navegação clara e consistente.

Rotas sugeridas:

/ → Página inicial

/sobre → Página Sobre

/contato → Página Contato

O link “Lojas” deve direcionar para:

/#lojas

Utilizar scroll suave ao navegar até a seção de lojas.

O visualizador de folhetos pode ser implementado como:

Modal fullscreen; ou

Rota dedicada, como /ofertas/:id

Escolha a abordagem que proporcionar a melhor experiência de usuário.

13. Responsividade

A responsividade é muito importante.

Desktop

Cabeçalho horizontal

Menu completo

Carrossel amplo

Cards de ofertas em no máximo 2 colunas

Cards de lojas em no máximo 2 colunas

Rodapé com três áreas

Visualizador de folhetos aproveitando praticamente toda a tela

Tablet

Adaptar o espaçamento e tamanho dos cards.

O visualizador deve se adaptar ao tamanho da tela.

Mobile

Menu hamburger

Carrossel adaptado para telas pequenas

Cards ocupando praticamente toda a largura

Ofertas em uma coluna

Lojas em uma coluna

Rodapé reorganizado verticalmente

Botões grandes o suficiente para serem facilmente utilizados com o dedo

Visualizador de folhetos otimizado para toque

Suporte a swipe entre páginas

Zoom por gesto quando possível

Não permitir que textos ou imagens ultrapassem a largura da tela.

14. Experiência visual

O site deve parecer um site profissional de supermercado, e não um template genérico.

Priorizar:

Design limpo

Boa utilização de espaços

Imagens grandes e atrativas

Cards modernos

Bordas arredondadas

Sombras sutis

Animações discretas

Transições suaves

Excelente legibilidade

Hierarquia visual clara

Evite:

Excesso de animações

Excesso de cores

Layout excessivamente complexo

Elementos desnecessários

Textos muito longos

Cards excessivamente pequenos

A seção de ofertas deve receber bastante destaque, pois é a principal finalidade do site.

15. Dados fictícios

Como esta é a primeira versão, todos os dados podem ser fictícios.

Porém, organize os dados de forma estruturada, preferencialmente através de objetos/arrays, para que posteriormente seja fácil substituir:

Nome das lojas

Endereços

Telefones

Imagens

Folhetos

Páginas dos folhetos

Datas das ofertas

Redes sociais

Informações de contato

Não deixe informações importantes espalhadas diretamente pelo código da interface quando elas puderem ser representadas como dados.

16. Imagens

Utilize imagens apropriadas para:

Supermercado

Frutas

Hortaliças

Produtos

Compras

Fachadas de supermercados

Folhetos de ofertas

As imagens devem ter boa qualidade e combinar com o design.

Para os folhetos, criar uma apresentação visual semelhante à capa de um encarte real de supermercado.

Cada folheto deve possuir múltiplas páginas fictícias, para que seja possível demonstrar o funcionamento do visualizador.

17. Estados e detalhes de UX

Adicionar tratamento visual para situações como:

Folheto ativo

Mostrar normalmente o card e o tempo restante.

Folheto próximo do vencimento

Destacar visualmente que a oferta está próxima do fim.

Exemplo:

“Termina hoje”

Folheto expirado

Caso exista um folheto expirado, ele deve apresentar uma indicação visual:

“Oferta encerrada”

Opcionalmente, impedir sua abertura ou permitir a visualização com indicação de que a promoção já terminou.

Carregamento

Adicionar estados de carregamento apropriados caso sejam necessários.

Imagens

Utilizar object-fit ou equivalente para evitar imagens distorcidas.

18. Estrutura geral esperada

O resultado final deve ser um site completo e funcional do Varejão das Frutas, com aparência profissional e pronto para servir como primeira versão de um site real.

A página inicial deve seguir esta estrutura:

HEADER
↓
CARROSSEL DE DESTAQUES
↓
OFERTAS
↓
NOSSAS LOJAS
↓
FOOTER

Ao clicar em um folheto:

CARD DO FOLHETO
↓
VISUALIZADOR EM TELA CHEIA
↓
PÁGINA 1 / N
↔
NAVEGAÇÃO ENTRE AS PÁGINAS
↔
ZOOM / SWIPE / CONTROLES
↓
FECHAR

Além disso, devem existir as páginas:

Sobre

Informações institucionais

Quem somos

Nossa missão

Nosso compromisso

Serviço de delivery

Cidades atendidas

Regras da taxa de entrega

Contato

Telefone

WhatsApp

E-mail

Redes sociais

Sem formulário de contato

O resultado deve ser visualmente agradável, moderno, intuitivo e especialmente bem adaptado para usuários que acessarem o site pelo celular.

A visualização dos folhetos deve ser tratada como uma das funcionalidades principais do site, proporcionando uma experiência simples e agradável para o cliente consultar todas as páginas das ofertas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f0877c1c-756f-4b3c-9c96-89ac44950b66).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
