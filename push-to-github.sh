#!/bin/bash

# Script para fazer push do projeto para o GitHub
# Uso: ./push-to-github.sh SEU_USUARIO

if [ -z "$1" ]; then
    echo "❌ Erro: Você precisa fornecer seu nome de usuário do GitHub"
    echo "Uso: ./push-to-github.sh SEU_USUARIO"
    echo "Exemplo: ./push-to-github.sh joaomarcos"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME="cartilha-animais-peconhentos"

echo "🚀 Configurando repositório remoto..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

echo "📤 Fazendo push para o GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Push realizado com sucesso!"
    echo "🌐 Acesse: https://github.com/${GITHUB_USER}/${REPO_NAME}"
else
    echo "❌ Erro ao fazer push. Verifique:"
    echo "   1. Se o repositório foi criado no GitHub"
    echo "   2. Se você tem permissões de escrita"
    echo "   3. Se suas credenciais estão configuradas"
fi

