# John Cavalcante
Uma homenagem ao avião baleia da UFRJ, com um outro pseudonimo para os mais intimos.

SISTEMA DE CADASTRO:
Implementação de um sistema de cadastro para o site, coletando as informações do usuario e colocando num banco de dados usando SQLite, Node.js e Express. Além disso, foi feita implementação de notificação via e-mail para o usuario recém cadastrado via Nodemailer(SMTP). Foi necessario um arquivo .env para segurança da senha do email oficial do Culto da Baleia "hangardabaleia@gmail.com".


Instruções para uso: 
1 - npm install
2 - mkdir data (crie uma pasta chamada "data" na raiz do projeto)
3 - Crie um arquivo .env na raiz e adicione seu email e sua senha de app(Gmail ou outro provedor) para que o sistema de notificação funcione 

4-EMAIL_USER=seu-email@provedor.com
  EMAIL_PASS=sua-senha-de-app

5 - npm start
6 - http://localhost:3000
