# 🗺️ Oncoto?
O mundo inteiro querendo ver paisagens novas, conhecer cidades e lugares; os planos para as próximas férias nunca estiveram tão próximos devido à pandemia.

Pensando nisso, desenvolvemos o ONCOTÔ, um jogo gratuito que exercita esse espírito desbravador, te colocando em uma parte do mundo e fazendo com que tudo ao seu redor sejam pistas para descobrir onde está, te dando a experiência de se perder e se encontrar. Jogue com seus amigos e descubram quais serão seus próximos destinos.

Mirando em uma demanda reprimida o ONCOTÔ gamifica o seu desejo em conhecer lugares novos, desafiar seus amigos e ajuda a programar suas próximas férias, sendo uma ótima oportunidade para anúncios com agências de viagem e todo o mercado turístico que estará aquecido para te receber.

Então clique no link e venha com ONCOTÔ e descubra ONCOVÔ.

## Qual foi o desafio?

ONCOTÔ é um aplicativo web gamificado grátis que entrega ao usuário a experiência de percorrer por diversos lugares do mundo e se sentir desafiado em acertar em qual localidade está em um curto prazo de tempo.

## Iniciando o projeto

O projeto foi dividido em dois diretórios [backend](./backend) e [frontend](./frontend), cada um com suas dependências, compartilhando apenas configurações de desenvolvimento.

### Executando o frontend

Realize a instalação das dependências:
```ls
yarn install
```

Configure as seguintes variáveis de ambiente:

```
## Next Auth
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_URL=http://localhost:3000
JWTSIGNIN_KEY=

## Maps Key
GOOGLE_MAPS_API_KEY=

## Backend
NEXT_PUBLIC_BASE_API=http://localhost:4321
NEXT_PUBLIC_FRONTEND_AUTH_KEY=

# CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

Execute o `yarn dev` para que o projeto será iniciado na url `http://localhost:3000`. Para testar a aplicação execute `yarn test`.

### Executando o backend

Realize a instalação das dependências:

```ls
yarn install
```

Crie a imagem no docker:
```ls
docker build -t oncoto .
docker-compose up -d
docker ps
```

Execute o typeorm:
```ts
yarn typeorm migration:run
```

Execute `yarn dev` para rodar o serviço e `yarn test` para testar a aplicação.
