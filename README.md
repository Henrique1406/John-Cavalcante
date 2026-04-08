# John Cavalcante
Uma homenagem ao avião baleia da UFRJ, com um outro pseudonimo para os mais intimos...

A ideia do projeto é construir um site/fórum para espalhar o "Mito da Baleia" pelo Fundão, atualizações serão feitas com o passar do tempo. Novas páginas, novas funcionalidades, etc.

SISTEMA DE CADASTRO:
Implementação de um sistema de cadastro para o site, coletando as informações do usuario e colocando num banco de dados usando SQLite, Node.js e Express. Além disso, foi feita implementação de notificação via e-mail para o usuario recém cadastrado via Nodemailer(SMTP). Foi necessario um arquivo .env para segurança do email e senha do Culto.


Instruções para uso:

1)Execute esses comandos:

```bash
npm install
```
```bash
mkdir data
```
2)Crie um arquivo .env na raiz e adicione seu email e sua senha de app(Gmail ou outro provedor) para que o sistema de notificação funcione:
```bash
EMAIL_USER=seu-email@provedor.com
EMAIL_PASS=sua-senha-de-app
```
```bash
npm start
```
```bash
http://localhost:3000
```
<img width="1024" height="1536" alt="aviao" src="https://github.com/user-attachments/assets/2170a9e6-3826-4c3f-8819-c45cbf37c8db" />
