# Configuração do Repositório GitHub

## ✅ Passos já realizados:
- ✅ Repositório Git inicializado
- ✅ Arquivos adicionados ao staging
- ✅ Commit inicial criado

## 📋 Próximos passos para publicar no GitHub:

### Opção 1: Via Interface Web do GitHub (Recomendado)

1. Acesse https://github.com e faça login
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository"
4. Configure o repositório:
   - **Nome:** `cartilha-animais-peconhentos` (ou outro nome de sua preferência)
   - **Descrição:** "Cartilha de Animais Peçonhentos - Site acessível em LIBRAS"
   - **Visibilidade:** Público ou Privado (sua escolha)
   - **NÃO** marque "Initialize this repository with a README" (já temos um)
5. Clique em "Create repository"
6. Execute os comandos abaixo no terminal:

```bash
cd /Users/joaomarcos/Development/AnimaisPeconhentos
git remote add origin https://github.com/SEU_USUARIO/cartilha-animais-peconhentos.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.**

### Opção 2: Via GitHub CLI (se instalado)

```bash
gh repo create cartilha-animais-peconhentos --public --source=. --remote=origin --push
```

### Opção 3: Usando SSH (se configurado)

```bash
git remote add origin git@github.com:SEU_USUARIO/cartilha-animais-peconhentos.git
git branch -M main
git push -u origin main
```

## 🔐 Autenticação

Se solicitado, você precisará:
- **HTTPS:** Usar um Personal Access Token (não senha)
- **SSH:** Ter chave SSH configurada no GitHub

## 📝 Nota

O arquivo PDF e o vídeo MP4 são grandes. Se o push falhar por tamanho, considere usar Git LFS:
```bash
git lfs install
git lfs track "*.pdf"
git lfs track "*.mp4"
git add .gitattributes
git commit -m "Add Git LFS tracking for large files"
git push
```

