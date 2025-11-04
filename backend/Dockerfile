# --- Estágio 1: O "Builder" ---
# Usamos a imagem Node.js LTS completa (baseada em Debian).
# Ela contém Python, make, g++ e outras ferramentas de build.
FROM node:lts AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package.json package-lock.json ./

# Instala todas as dependências (incluindo devDependencies)
# Este é o passo que compila o 'sharp' usando as ferramentas de build
RUN npm ci

# Copia o restante do código-fonte do seu backend
COPY . .

# --- Estágio 2: A Imagem de Produção "Enxuta" (Slim) ---
# Usamos a imagem 'slim', que é baseada em Debian, mas não tem
# as ferramentas de build (que não são mais necessárias).
FROM node:lts-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os node_modules (já compilados) do estágio 'builder'
COPY --from=builder /app/node_modules ./node_modules

# Copia o código-fonte da aplicação e os arquivos package.json do 'builder'
COPY --from=builder /app ./

# Define o usuário 'node' (menos privilegiado) para rodar a aplicação
# (Boa prática de segurança, evita rodar como 'root')
USER node

# Expõe a porta que sua aplicação vai usar.
# IMPORTANTE: O Render.com espera que sua app ouça na porta 10000
# ou na porta definida pela variável de ambiente $PORT.
EXPOSE 10000

# Comando para iniciar a aplicação
# (Requer um script "start" no seu package.json)
CMD [ "npm", "start" ]