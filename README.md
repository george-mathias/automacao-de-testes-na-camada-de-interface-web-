## Como Disparar a Esteira Manualmente via Terminal

Se precisar forçar a execução do fluxo de CI (GitHub Actions) sem alterar nenhum arquivo do projeto, você pode enviar um commit vazio para a branch principal:

```bash
git commit --allow-empty -m "Chore: gatilho manual para o github actions"
git push origin main
```

> **Nota:** O parâmetro `--allow-empty` permite que o Git registre o commit mesmo sem modificações no código, o que ativa o gatilho de `push` configurado no workflow.
