
### Semana 08: 
- **[M2S08] Exercício 1:** Projeto Zé Delivery
Construir um projeto para replicar o Ze Delivery.
Neste exercício, deverá ser feita a estruturação de pastas, arquivos e páginas/componentes base.

Como:
Home;
Login;
Componente Hero (área amarela com a busca);
Header.

Para as páginas, não será necessário produzir neste exercício. Cada uma será trabalhada nos próximos.

- **[M2S08] Exercício 2:** Página de Login
Construa uma página de login similar ao que está na imagem abaixo, podendo ignorar os botões relacionados a Facebook e apple.
Para simplificar o processo, adicione dois inputs, sendo um de e-mail e outro de senha., além da logo ze delivery do botão de entrar.
O estado do formulário de login será feito por meio de useState. Portanto, adicionar um evento de onSubmit no formulário para que capture e-mail e senha digitados a partir de uma função handleSubmit

- **[M2S08] Exercício 3:** Componente `hero`
Construa o componente Hero que aparece na imagem abaixo, é representado na cor amarela.
O componente deverá conter o texto e o input no mesmo modo que é apresentado no site.
Conectá-lo à home, após a conclusão.

- **[M2S08] Exercício 4:** Componente 'categoria-produtos'
Construir um componente que é relacionado a categoria de produtos que aparece na Home.
O componente é basicamente um card, formado por uma imagem que representa o grupo e um texto identificador.
Adicionar um array de objetos na Home, para que seja feito um laço de repetição e chame o componente para montar como está na imagem abaixo.

- **[M2S08] Exercício 5:** Sistema de Rotas
Instalar e configurar o sistema de rotas para aplicação.
Deverá ser definido as seguintes rotas:
/signin → para abrir page Login;
/ → para abrir a página de home;
/home → para abrir a página de home;
/produtos → para abrir a página de produtos (construir também essa página mas, inicialmente, sem conteúdo de exibição, apenas um H1 com o texto ‘Produtos’.)

- **[M2S08] Exercício 6:** Componente Header
Desenvolver componente Header da aplicação e exibir apenas na home da aplicação.
O botão entrar deverá levar o usuário até a página de login, não utilizar propriedade ‘href’.

- **[M2S08] Exercício 7:** Modificar página de login para conter instrução de que deve ser aceito usuário e senha com redirecionamento
Modificar a página de login para que em ‘handleSubmit’ contenha uma lógica simples para verificar e-mail e senha digitados pelo usuário.
Deverá verificar sempre se e-mail é admin@admin.come senha admin123. Sendo isso, o usuário será redirecionado para a página de home.

- **[M2S08] Exercício 8:** Construir um modal para perguntar o usuário se é maior que 18 anos na abertura da página de home
Desenvolver um modal / popup nos moldes do ze delivery para perguntar se o usuário é ou não maior que 18 anos.
A única ação que o modal irá conter é de fechamento dele ao clicar em alguns dos itens. Será passado um material adicional explicando mais detalhes do popup / modal e como ele pode ser integrado ao fluxo da aplicação.
Exibir o componente sempre que abrir a página Home e apenas uma vez, ou seja, utilizando useEffect com array de dependências vazio.