![](./biblioteca/logo1.png)




Bem-vindo à documentação técnica do projeto MVC! Aqui você encontrará informações detalhadas sobre o projeto, tecnologias utilizadas, arquitetura, instruções para clonagem do repositório e um resumo sobre a arquitetura MVC.


## Tecnologias Utilizadas

| Tecnologia | Função na aplicação                                                                                           |
|------------|--------------------------------------------------------------------------------------------------------------|
| JavaScript | Linguagem de programação utilizada para escrever o código do back-end da aplicação.                          |
| Node.js    | Ambiente de execução JavaScript assíncrono orientado a eventos, utilizado como base para a aplicação fornecendo bibliotecas. |
| Nodemon    | Ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor durante o desenvolvimento. |
| Mongoose   | Biblioteca do Node.js que simplifica a interação com o MongoDB, um banco de dados NoSQL orientado a documentos. |
| Express    | Framework web para Node.js que simplifica o desenvolvimento de aplicativos e APIs RESTful.                     |
| Chalk      | Pacote npm para formatação de texto no console, utilizado para melhorar a legibilidade dos logs e mensagens de saída no ambiente de desenvolvimento. |
| MongoDB    | Banco de dados NoSQL orientado a documentos, usado para armazenar os dados do projeto.                        |
| Postman    | Plataforma de testes de API, utilizada para testar e documentar as requisições e respostas do projeto.        |

## 📁 Arquitetura do Projeto 

```
 📁mvc
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 apiController.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 api.json
   |  |    |- 📄 apis.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 api.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js


```


## Clonando o Repositório

Para clonar o repositório do projeto, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório em que deseja armazenar o projeto.
2. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/DelisG/mvc.git
```

Certifique-se de substituir `DelisG` pelo seu nome de usuário do GitHub.

## Executando o Projeto

Após clonar o repositório, siga as etapas abaixo para executar o projeto localmente:

1. Navegue até o diretório do projeto:

```bash
cd mvc
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor local:

```bash
npm start
```

O servidor será iniciado e estará pronto para receber requisições.

## Testando as APIs

Para testar as APIs do projeto, você pode utilizar o Postman. Siga as etapas abaixo:

1. Abra o Postman.
2. Importe a coleção de requisições do projeto, localizada no diretório `postman` do repositório.
3. Após importar a coleção, você poderá enviar as requisições para testar as funcionalidades disponíveis.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório para o seu próp

usuário do GitHub. 2. Clone o repositório forkado para o seu ambiente de desenvolvimento local. 3. Crie uma branch para realizar suas alterações:

```bash
git checkout -b nome-da-sua-branch
```

4. Faça as alterações desejadas no código.
5. Commit suas alterações:

```bash
git commit -m "Descrição das alterações"
```

6. Envie suas alterações para o repositório remoto:

```bash
git push origin nome-da-sua-branch
```

7. Abra um pull request no repositório original, descrevendo suas alterações em detalhes.

Agradecemos antecipadamente por suas contribuições!


## Conclusão

Esta documentação técnica fornece uma visão geral do projeto MVC, suas tecnologias, arquitetura, instruções para clonagem do repositório e informações sobre como testar as APIs. Fique à vontade para explorar o código-fonte e contribuir com o desenvolvimento do projeto. Se você tiver alguma dúvida adicional, consulte a documentação do código ou entre em contato com o autor do projeto.

# Arquitetura MVC

### O que significa cada sigla do MVC (MODEL-VIEW-CONTROLLER)
O **model** seria o coração da aplicação, onde se tem a regra de negócio, entidades, aplicação do banco de dados, e tudo que pertença a aplicação em termo de regra de negócio e validação.

A **view** onde temos a interface de comunicação com o usuário é responsável por renderizar a resposta da requisição seja ela em desktop ou web.

A camada **controller** faz o controle do fluxo da aplicação, fazendo o intermédio de todo o fluxo a definir o que o usuário verá na tela. É a primeira camada que recebe requisição dentro do padrão MVC.

Quando é necessário acessar o banco de dados para obter resposta.
Fluxo com dados:


### Como funciona?
![ Padrão MVC ](https://res.cloudinary.com/practicaldev/image/fetch/s--WRqP1wRZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s6lry3h9nlfwjftsjz73.png)

O usuário em seu browser realiza uma requisição HTPP, que ao chegar ao controller que verifica e comunica ao model. O model realiza uma consulta ao banco de dados, retornando os dados requisitados para o mode, vale lembrar que essa parte do model é invisível ao usuário. O model retorna ao controller que tem o trabalho de renderizar a informação na view. A view retornará um evento para o controller que devolverá a resposta HTPP para o browser onde o usuário poderá visualizar o que foi requerido.

Caso não seja necessário acessar dados, a requisição não precisa passar pela camada model, pois a camada model que se liga ao banco de dados.

### Fluxo sem dados:
![ Padrão MVC ](https://res.cloudinary.com/practicaldev/image/fetch/s--CGsBK2z7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7py33y398bt1zbahbp9b.png)


Sem o banco de dados, as camadas da arquitetura MVC ainda desempenham seus papéis fundamentais. A camada do modelo gerencia os dados e a lógica de negócio, a camada da view faz a apresentação dos dados ao usuário e a camada do controlador coordena as interações do usuário e as atualizações no modelo. Embora a persistência de dados não seja abordada diretamente, a arquitetura MVC continua a oferecer benefícios na separação de preocupações, modularidade e reutilização de código.

Sem considerar o fluxo de dados específico,promovendo a separação clara entre o modelo, a view e o controlador permitindo que cada componente seja desenvolvido, testado e mantido de forma independente. Melhorando a modularidade e a escalabilidade do sistema, facilitando a adição ou modificação de recursos.

### Implementação
Isso depende da linguagem de programação que será utilizada e do contexto da aplicação. Normalmente haverá uma classe abstrata para cada um dos 3 elementos principais: Model, View e Controller. O programador desenvolve aplicações criando subclasses dessas classes abstratas onde cada aspecto do sistema vai ter seu model. Cada modelo terá 1 ou mais controladores e visões.


![](https://www.usandopy.com/media/uploads/2023/03/22/pt-cover-website-22.png)           

### Separação clara das responsabilidades
O MVC divide as responsabilidades do aplicativo em camadas distintas, o que facilita o desenvolvimento, teste e manutenção do software. Cada camada tem responsabilidades bem definidas, tornando o código mais organizado e legível.

### Reutilização de código
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
