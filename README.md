# Plataforma de Receitas Culinárias

Este projeto é uma plataforma web onde os usuários podem visualizar uma lista de receitas culinárias. Ele foi desenvolvido como parte do curso de React.

## Instruções do Projeto:

1. **Página Inicial (/):**

   - Exibe uma lista de receitas culinárias em cards.
   - Cada card exibe a imagem da receita, título e breve descrição.
   - Os dados das receitas são estáticos vindo do JSON fornecido.

2. **Detalhes da Receita (/recipe/:id):**

   - Ao clicar em um card de receita, o usuário é redirecionado para esta página.
   - Exibe detalhes completos da receita selecionada, incluindo ingredientes, instruções de preparo, tempo de preparo, etc.
   - Utiliza o parâmetro de rota (:id) para identificar a receita selecionada.

   **Exibição Condicional de Informações:**

   - Além dos detalhes obrigatórios da receita, como ingredientes e instruções de preparo, os alunos devem considerar exibir informações adicionais com base nos campos opcionais fornecidos no JSON de exemplo.
   - Por exemplo, se o campo `vegetarian` for verdadeiro, exibir um indicador de que a receita é vegetariana.
   - Da mesma forma, se o campo `glutenFree` for verdadeiro, indicar que a receita é sem glúten.
   - Se o campo `videoUrl` estiver presente, incluir um link para um vídeo relacionado à receita.
   - Os alunos devem usar lógica condicional para determinar se e como exibir essas informações adicionais, com base na presença ou ausência desses campos opcionais.
   - Esta tarefa permite que os alunos pratiquem a exibição de informações de forma dinâmica e adaptativa, melhorando a experiência do usuário com base nas características específicas de cada receita.

3. **Página de Busca (/search):**

   - Permite que os usuários pesquisem receitas por nome ou categoria.
   - Implementar um formulário de busca e exibe os resultados abaixo, baseado se a as palavras buscadas aparece no titulo ou ingredientes da receita.
   - Utilizar recurso de gerenciamento de estado para controlar o campo de busca e resultados.

4. Use o seguinte JSON como dados para a aplicação:
