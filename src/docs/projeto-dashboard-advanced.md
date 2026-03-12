# projeto-dashboard-advanced

## Objetivo do projeto

Construir um **Marketing Performance Dashboard** avançado em **Next.js**, com foco em experiência de produto, interface premium, arquitetura escalável e animações sutis voltadas para UX. O projeto deve priorizar clareza de informação, interatividade, organização modular e refinamento visual, evitando excessos estéticos que prejudiquem legibilidade ou performance.

---

## Stack

### Base

- **Next.js**
- **TypeScript**
- **Tailwind CSS**

### UI e componentes

- **shadcn/ui**
- **Radix UI**
- **Lucide React**

### Animação

- **Framer Motion**

### Dados e tabelas

- **TanStack Table**
- **TanStack Query**

### Gráficos

- **Recharts**

### Formulários e validação

- **React Hook Form**
- **Zod**

### Estado

- **Zustand** apenas se necessário para estado global compartilhado

### Backend / banco / autenticação

- **Supabase**

---

## Escopo

O dashboard será um painel de performance de marketing da Decyphra, simulando um produto SaaS real. O foco é representar dados de campanhas, leads, tráfego e relatórios de forma clara e profissional.

### O projeto deve incluir

- layout principal com sidebar, header e área de conteúdo
- página de visão geral com KPIs e gráficos principais
- módulo de campanhas com tabela, filtros e métricas
- módulo de leads com funil, origem e estágio
- módulo de tráfego com métricas por canal, dispositivo e páginas
- módulo de relatórios com comparação de períodos
- configurações básicas de interface e preferências
- estados de loading, empty state e error state
- dark mode bem resolvido
- responsividade funcional para desktop e tablet

### O projeto não deve priorizar

- efeitos visuais pesados sem função clara
- animações longas ou chamativas demais
- experiências 3D ou WebGL complexas
- excesso de cards decorativos
- estética genérica de template

---

## Estrutura de features

### 1. Overview

Responsável por fornecer uma visão executiva do dashboard.

#### Deve conter

- cards de KPIs principais
- gráfico de desempenho geral
- resumo de campanhas ativas
- comparação com período anterior
- bloco de atividade recente
- alertas ou insights rápidos

#### Métricas sugeridas

- leads totais
- taxa de conversão
- CTR médio
- CPC médio
- CPL médio
- ROAS médio
- receita estimada
- campanhas ativas

---

### 2. Campaigns

Responsável por listar e analisar campanhas de marketing.

#### Deve conter

- tabela avançada de campanhas
- filtros por canal, status e período
- ordenação por performance
- busca por nome
- drawer ou modal com detalhes da campanha
- métricas de orçamento, gasto e resultado

#### Campos sugeridos

- nome da campanha
- canal
- status
- orçamento
- gasto
- impressões
- cliques
- CTR
- CPC
- leads
- CPL
- ROAS

---

### 3. Leads

Responsável por acompanhar aquisição e andamento dos leads.

#### Deve conter

- tabela ou lista de leads
- filtros por origem e estágio
- visualização por funil
- pontuação do lead
- responsável pelo lead
- painel lateral com detalhes

#### Campos sugeridos

- nome
- empresa
- origem
- estágio
- score
- responsável
- data de entrada
- valor estimado

---

### 4. Traffic

Responsável por representar o comportamento de tráfego digital.

#### Deve conter

- gráfico de sessões por período
- divisão por canais
- divisão por dispositivos
- páginas mais acessadas
- taxa de rejeição
- tempo médio no site
- comparação entre períodos

#### Métricas sugeridas

- sessões
- usuários
- bounce rate
- tempo médio
- tráfego por canal
- tráfego por dispositivo
- páginas top

---

### 5. Reports

Responsável por consolidar leituras comparativas e sínteses visuais.

#### Deve conter

- comparação entre períodos
- cards de resumo executivo
- gráficos comparativos
- blocos de insight visual
- possibilidade futura de exportação

---

### 6. Settings

Responsável por preferências básicas e configurações do produto.

#### Deve conter

- alternância de tema
- preferências de interface
- notificações simuladas
- integrações fictícias ou placeholders

---

## Animações que valem a pena para UX

As animações devem existir para melhorar percepção de estado, continuidade visual e feedback de interação. Elas não devem competir com o conteúdo.

### Animações recomendadas

- entrada escalonada de cards no carregamento inicial
- fade e slide sutis na troca de páginas internas
- expansão e recolhimento suave da sidebar
- animação de contagem em números de KPI
- transição suave ao trocar filtros e períodos
- hover refinado em cards e linhas de tabela
- highlight temporário após ações do usuário
- transições suaves em tabs, drawers e modais
- skeleton loading com boa hierarquia visual
- animação de abertura para painéis laterais de detalhes
- reorganização suave de listas ou blocos filtrados

### Regras de uso

- usar durações curtas e naturais
- priorizar transições discretas
- manter consistência entre componentes
- evitar atrasos desnecessários na leitura dos dados
- respeitar performance e redução de movimento quando aplicável

### Evitar

- animações exageradas em cada elemento
- bounce excessivo
- parallax em áreas de leitura intensa
- transições demoradas
- efeitos que prejudiquem legibilidade

---

## Efeitos visuais recomendados

Os efeitos visuais devem reforçar sensação de produto premium sem transformar a interface em um experimento visual pesado.

### Efeitos recomendados

- gradientes muito sutis no background de áreas-chave
- bordas translúcidas leves em superfícies selecionadas
- sombras suaves e controladas
- brilho discreto em elementos ativos ou selecionados
- backdrop blur apenas em menus, drawers e modais
- texturas de ruído extremamente discretas em fundos específicos
- separações com gradiente suave em vez de divisórias pesadas
- contraste forte para hierarquia tipográfica e leitura dos dados
- realce visual moderado em estados ativos, foco e hover

### Direção estética desejada

- visual limpo e editorial
- aparência premium de produto SaaS
- foco em legibilidade e hierarquia
- densidade informacional equilibrada
- menos “template genérico”, mais “produto real”

### Evitar

- glassmorphism excessivo
- gradientes fortes em excesso
- sombras pesadas em todos os elementos
- excesso de transparência
- estética chamativa sem função de produto

---

## Arquitetura de pastas

```txt
src/
  app/
    dashboard/
      page.tsx
      campaigns/
        page.tsx
      leads/
        page.tsx
      traffic/
        page.tsx
      reports/
        page.tsx
      settings/
        page.tsx
    layout.tsx
    globals.css

  components/
    ui/
    layout/
      sidebar.tsx
      header.tsx
      page-shell.tsx
      page-title.tsx
    shared/
      theme-toggle.tsx
      empty-state.tsx
      error-state.tsx
      loading-skeleton.tsx

  features/
    overview/
      components/
        stats-card.tsx
        kpi-grid.tsx
        performance-chart.tsx
        activity-feed.tsx
        insight-card.tsx
      hooks/
      services/
      types/
      utils/

    campaigns/
      components/
        campaigns-table.tsx
        campaigns-filters.tsx
        campaign-status-badge.tsx
        campaign-details-drawer.tsx
      hooks/
      services/
      types/
      utils/

    leads/
      components/
        leads-table.tsx
        leads-filters.tsx
        leads-funnel.tsx
        lead-details-drawer.tsx
      hooks/
      services/
      types/
      utils/

    traffic/
      components/
        traffic-chart.tsx
        channel-distribution.tsx
        device-distribution.tsx
        top-pages-table.tsx
      hooks/
      services/
      types/
      utils/

    reports/
      components/
        comparison-chart.tsx
        summary-cards.tsx
        report-insights.tsx
      hooks/
      services/
      types/
      utils/

    settings/
      components/
        settings-form.tsx
        preferences-panel.tsx
      hooks/
      services/
      types/
      utils/

  lib/
    utils.ts
    formatters.ts
    constants.ts
    mock-data.ts
    chart-config.ts
    validations.ts

  hooks/

  stores/

  styles/

  types/
```

### Princípios da arquitetura

- separar componentes genéricos de componentes de domínio
- organizar o projeto por feature para escalar melhor
- manter lógica de cada módulo próxima de seus componentes
- evitar concentrar tudo em `components/`
- centralizar utilitários e formatadores reutilizáveis em `lib/`
- criar base preparada para crescimento sem complexidade desnecessária

---

## Fases e passos

## Fase 1 — Fundação do produto

### Passo 1. Definir identidade do dashboard

- estabelecer o dashboard como um produto de analytics de marketing
- definir o tom visual: premium, clean, técnico e profissional
- alinhar o objetivo da interface com leitura rápida e ação clara

### Passo 2. Consolidar stack e bibliotecas

- estruturar o uso de Next.js, TypeScript e Tailwind
- definir shadcn/ui como base de componentes reutilizáveis
- usar Framer Motion para microinterações
- usar Recharts para visualização de dados
- usar TanStack Table para tabelas avançadas
- usar Supabase como backend e fonte de dados

### Passo 3. Definir módulos principais

- overview
- campaigns
- leads
- traffic
- reports
- settings

### Passo 4. Definir escopo funcional mínimo

- layout principal
- navegação entre módulos
- mock data realista
- estados visuais coerentes
- base pronta para refinamento posterior

---

## Fase 2 — Estrutura funcional do produto

### Passo 1. Construir o layout global

- sidebar
- header
- área principal de conteúdo
- shell reutilizável para páginas internas

### Passo 2. Estruturar a navegação do dashboard

- rotas do App Router organizadas por módulo
- consistência entre títulos, breadcrumbs e contexto da página

### Passo 3. Implementar a feature Overview

- cards de KPI
- gráfico de performance geral
- atividade recente
- resumo visual de campanhas e resultados

### Passo 4. Implementar a feature Campaigns

- tabela de campanhas
- filtros e busca
- ordenação por métricas
- painel lateral de detalhes

### Passo 5. Implementar a feature Leads

- tabela ou lista de leads
- funil visual
- filtros por origem e estágio
- detalhes expandidos do lead

### Passo 6. Implementar a feature Traffic

- gráficos por período
- distribuição por canais
- distribuição por dispositivos
- páginas de maior acesso

### Passo 7. Implementar a feature Reports

- comparações entre períodos
- blocos de resumo executivo
- gráficos comparativos

### Passo 8. Implementar a feature Settings

- preferências básicas
- tema
- notificações simuladas
- placeholders de integrações

---

## Fase 3 — Refinamento de UX

### Passo 1. Aplicar animações úteis

- entrada de cards
- transições entre views
- abertura de drawers e modais
- feedback visual em filtros e seleções

### Passo 2. Implementar estados importantes

- skeleton loading
- empty state
- error state
- feedback após ações do usuário

### Passo 3. Melhorar fluxo de leitura

- reforçar hierarquia visual
- ajustar espaçamento
- controlar densidade de informação
- revisar contraste e escaneabilidade

---

## Fase 4 — Refinamento visual

### Passo 1. Aplicar efeitos visuais com moderação

- gradientes sutis
- sombras leves
- blur controlado
- brilho discreto em estados ativos

### Passo 2. Revisar consistência estética

- tipografia
- bordas
- ícones
- ritmo visual entre componentes

### Passo 3. Eliminar aparência genérica

- remover excessos de estilos padrão sem intenção
- reforçar identidade visual de produto real
- alinhar o visual com marketing analytics e software premium

---

## Fase 5 — Organização e escalabilidade

### Passo 1. Consolidar arquitetura por features

- revisar separação entre módulos
- manter componentes de domínio próximos da lógica associada

### Passo 2. Centralizar utilidades compartilhadas

- formatadores
- validações
- constantes
- configurações de gráficos

### Passo 3. Preparar o projeto para evolução futura

- facilitar integração com dados reais
- facilitar expansão de novas telas
- manter base escalável para autenticação, permissões e relatórios mais complexos
