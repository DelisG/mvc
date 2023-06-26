

![](https://arquivo.devmedia.com.br/marketing/img/artigo-introducao-ao-padrao-mvc-29308.png)
# Arquitetura MVC

## O que significa cada sigla do MVC (MODEL-VIEW-CONTROLLER)
O **model** seria o coração da aplicação, onde se tem a regra de negócio, entidades, aplicação do banco de dados, e tudo que pertença a aplicação em termo de regra de negócio e validação.

A **view** onde temos a interface de comunicação com o usuário é responsável por renderizar a resposta da requisição seja ela em desktop ou web.

A camada **controller** faz o controle do fluxo da aplicação, fazendo o intermédio de todo o fluxo a definir o que o usuário verá na tela. É a primeira camada que recebe requisição dentro do padrão MVC.

Quando é necessário acessar o banco de dados para obter resposta.
Fluxo com dados:


## Como funciona?
![ Padrão MVC ](https://res.cloudinary.com/practicaldev/image/fetch/s--WRqP1wRZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s6lry3h9nlfwjftsjz73.png)

O usuário em seu browser realiza uma requisição HTPP, que ao chegar ao controller que verifica e comunica ao model. O model realiza uma consulta ao banco de dados, retornando os dados requisitados para o mode, vale lembrar que essa parte do model é invisível ao usuário. O model retorna ao controller que tem o trabalho de renderizar a informação na view. A view retornará um evento para o controller que devolverá a resposta HTPP para o browser onde o usuário poderá visualizar o que foi requerido.

Caso não seja necessário acessar dados, a requisição não precisa passar pela camada model, pois a camada model que se liga ao banco de dados.

## Fluxo sem dados:
![ Padrão MVC ](https://res.cloudinary.com/practicaldev/image/fetch/s--CGsBK2z7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7py33y398bt1zbahbp9b.png)


Sem o banco de dados, as camadas da arquitetura MVC ainda desempenham seus papéis fundamentais. A camada do modelo gerencia os dados e a lógica de negócio, a camada da view faz a apresentação dos dados ao usuário e a camada do controlador coordena as interações do usuário e as atualizações no modelo. Embora a persistência de dados não seja abordada diretamente, a arquitetura MVC continua a oferecer benefícios na separação de preocupações, modularidade e reutilização de código.

Sem considerar o fluxo de dados específico,promovendo a separação clara entre o modelo, a view e o controlador permitindo que cada componente seja desenvolvido, testado e mantido de forma independente. Melhorando a modularidade e a escalabilidade do sistema, facilitando a adição ou modificação de recursos.

## Implementação
Isso depende da linguagem de programação que será utilizada e do contexto da aplicação. Normalmente haverá uma classe abstrata para cada um dos 3 elementos principais: Model, View e Controller. O programador desenvolve aplicações criando subclasses dessas classes abstratas onde cada aspecto do sistema vai ter seu model. Cada modelo terá 1 ou mais controladores e visões.


![](https://www.usandopy.com/media/uploads/2023/03/22/pt-cover-website-22.png)           

## Separação clara das responsabilidades
O MVC divide as responsabilidades do aplicativo em camadas distintas, o que facilita o desenvolvimento, teste e manutenção do software. Cada camada tem responsabilidades bem definidas, tornando o código mais organizado e legível.

## Reutilização de código
A separação de responsabilidades também facilita a reutilização de código. O modelo e a camada de controle podem ser usados em diferentes projetos, enquanto a camada de apresentação pode ser facilmente personalizada para diferentes dispositivos.

## Maior escalabilidade
O MVC permite que os desenvolvedores gerenciem o crescimento do aplicativo de forma mais eficaz. A separação das responsabilidades ajuda a minimizar a complexidade do código e facilita a adição de novos recursos.



# Frameworks
Framework nos auxilia no desenvolvimento de aplicações web. Com ele, nós conseguimos ter facilidade e flexibilidade para trabalhar com requisições web.

## Frameworks que usam MVC

### [Ruby on Rails](https://www.ruby-lang.org/pt/documentation/)
É um framework web escrito em Ruby que usa o padrão MVC para organizar o código.

### [Laravel](https://laravel.com/)
É um framework web escrito em PHP que segue o padrão MVC.

### [Django](https://docs.djangoproject.com/pt-br/4.2/)
É um framework web escrito em Python que usa o padrão MVC.

### [Spring](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
É um framework de aplicação Java que usa o padrão MVC para separar a lógica de negócios da interface do usuário.

### [AngularJS](https://docs.angularjs.org/guide)
É um framework JavaScript que usa o padrão MVVM (Model-View-ViewModel), que é uma variação do padrão MVC.

# Biblioteca 

Uma biblioteca é uma solução de estruturas e algoritmos, um conjunto de features relacionadas. Sem dúvida ela pode conter helpers. Eventualmente uma biblioteca pode ser composta só de helpers. No contexto do MVC o helper é algo que deve ser usado para organizar a aplicação.

### Biblioteca que usa MVC EM JavaScript 
**React**
É uma biblioteca *JavaScript* para construção de interfaces de usuário que segue uma arquitetura fluxo unidirecional, mas também é comum a sua utilização com o padrão MVC.

### [FONTE](https://dev.to/elisangelamsilva/principais-conceitos-do-padrao-mvc-model-view-controller-1o5a)

# Links úteis
https://www.youtube.com/watch?v=jyTNhT67ZyY

https://raullesteves.medium.com/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8

https://irias.com.br/blog/mvc-conceito-e-exemplo-em-node-js/

https://acervolima.com/arquitetura-model-view-controller-mvc-para-aplicativos-node/

https://blog.cod3r.com.br/entenda-o-padrao-de-arquitetura-mvc/
