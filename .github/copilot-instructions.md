# ParkingLink - Instruções para Agentes de IA

## Visão Geral

ParkingLink é um site estático de apresentação para um **Gerenciador de Estacionamento**. A arquitetura é simples: uma página HTML única com seções navegáveis, estilos modularizados e interatividade mínima.

**Stack**: HTML5 + CSS3 + JavaScript vanilla  
**Idioma do site**: Português Brasileiro  
**Idioma do código**: Português com comentários em PT-BR

## Arquitetura e Estrutura de Componentes

### Estrutura de Arquivos

```
parkinglink-site/
├── index.html          # Página única com todas as seções
├── css/                # Estilos modularizados por componente
│   ├── reset.css       # Reset e normalizações globais
│   ├── header.css      # Cabeçalho fixo com navegação
│   ├── main.css        # Seções principais (carrossel, quem somos, manual)
│   ├── footer.css      # Rodapé com links sociais
│   ├── loading.css     # Animação de carregamento
│   └── details.css     # Detalhes de componentes interativos
├── js/
│   ├── contato.js      # Toggle dos menus GitHub/LinkedIn
│   └── link.js         # Vazio (reservado)
└── icon/               # Ícones PNG (favicon, navegação, sociais)
```

### Componentes Principais

1. **Header** (`css/header.css`, `index.html` linhas 21-29)
   - Navegação fixa no topo com scroll suave
   - Links internos para 3 seções: #secao1 (Gerenciador), #secao2 (Quem Somos), #secao3 (Manual)
   - Variáveis CSS: `--cor-principal` (#394C65), `--cor-secundaria` (#FFF1A6)

2. **Main Section** (`css/main.css`)
   - `.s_carrossel`: Seção inicial com descrição do produto
   - `.role_abaixo`: Caixa destaque com chamada para ação
   - Padrão de grid/flex para layout responsivo

3. **Footer** (`css/footer.css`, `index.html` linhas 177-198)
   - Menus expansíveis para GitHub e LinkedIn
   - Toggle controlado por `contato.js`

## Padrões e Convenções

### Padrão de Nomenclatura CSS

- **Classes**: snake_case (ex: `.s_carrossel`, `.role_abaixo`, `.add_icon`)
- **IDs**: snake_case (ex: `#titulo_2`, `#secao1`, `#secao2`, `#secao3`)
- **Variáveis CSS**: `--cor-*` para cores de tema (veja `header.css` e `main.css`)

### Padrão de Interatividade JavaScript

1. Aguarda `DOMContentLoaded` antes de interagir com DOM
2. Usa `classList.toggle()` para ativar/desativar classes CSS
3. Listeners simples com `addEventListener()`
4. Exemplo em `contato.js`: alterna classe `.show` em elementos `.add_icon` e `.add_icon_l`

### Fluxo de Estilo

1. `reset.css` normaliza globalmente (padding, margin, links, listas)
2. Cada módulo CSS importa seus próprios estilos
3. `index.html` carrega em ordem: reset → loading → header → main → footer → details
4. Usar CSS custom properties (`:root`) para temas reutilizáveis

## Workflows Críticos

### Adicionar Nova Seção

1. Criar bloco HTML em `index.html` com classe semanticamente descritiva
2. Adicionar entrada no `<nav>` com `href="#secaoN"`
3. Criar arquivo CSS dedicado (ex: `css/secao-nova.css`)
4. Referenciar novo CSS em `<head>` de `index.html`
5. Se houver interatividade, estender `contato.js` com novo listener

### Modificar Cores/Tema

- Atualizar variáveis em `:root` em `header.css` ou `main.css`
- Reutilizar através de `var(--cor-principal)`, etc.
- Exemplo: `background-color: var(--cor-principal);`

### Ajustar Responsividade

- Padrão atual: Flexbox/Grid + Media queries
- Verificar `header.css` para exemplo de gap/padding responsivo
- Manter `scroll-behavior: smooth` em navegação

## Dependências Externas

- **Google Fonts**: "Noto Sans" (carregada em `<head>`, usada globalmente)
- **Favicon**: `icon/icone_parking_link.png`
- **Sem frameworks**: Sem jQuery, Bootstrap, TypeScript, etc.

## Observações para Manutenção

- `link.js` está vazio e pode ser removido ou reutilizado
- Todas as seções usam scroll suave (`scroll-behavior: smooth`)
- Header é `position: fixed` com `z-index: 99` para ficar acima de outros elementos
- Overflow-x é oculto globalmente em `reset.css` (evita scroll horizontal)

## Como Melhorar Eficiência do Agente IA

Ao trabalhar neste projeto:
1. Leia `index.html` primeiro para entender a estrutura de seções
2. Consulte `header.css` e `main.css` para entender o tema de cores e layout
3. Se modificar interatividade, atualize apenas `contato.js` (padrão estabelecido)
4. Mantenha nomes CSS em snake_case português
5. Use variáveis CSS para cores, nunca valores hardcoded
