# WebSite-Fluxar 🌐

Interface web do **Fluxar**, desenvolvida em **React**, voltada para **analistas** que monitoram movimentações de estoque e geram relatórios de desempenho com apoio de **dashboards interativos** e um **chatbot inteligente**.

---

## Objetivo 🔍

O **WebSite-Fluxar** foi criado para oferecer uma visão clara e dinâmica das movimentações de estoque dos diferentes setores da empresa.  
A aplicação web fornece:

- Um **dashboard interativo**, integrado com relatórios do **Power BI**,  
- Um **chatbot analítico**, que auxilia na interpretação de variações de estoque (altas e baixas), e  
- Um ambiente intuitivo, moderno e responsivo para uso em desktop.

---

## Principais Funcionalidades 🚀

- **Dashboard de movimentações** de estoque do setor do analista  
- **Chatbot integrado** com insights e explicações sobre variações de dados  
- **Relatórios Power BI embutidos**, com filtros e visualizações interativas  
- **Integração com APIs Fluxar**, conectando-se ao backend para exibir dados atualizados

---

## Tecnologias Utilizadas 🛠️
<img src="./.github/images/DevWeb_Icons.png" alt="HTML" height="27"/>
<img src="./.github/images/React-Icon.png" alt="React" width="29"/>

---

## Estrutura do Projeto 📐

```

WebSite-Fluxar/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ assets/
│   ├─ components/
│   ├─ pages/
│   ├─ routes/
│   ├─ services/
│   ├─ styles/
│   └─ main.jsx
│
├─ .gitignore
├─ package.json
└─ README.md

````

---

## Instalação e Execução 👨‍💻

### 1️ - Clonar o repositório
```bash
git clone https://github.com/Fluxar-NeoTech/WebSite-Fluxar.git
cd WebSite-Fluxar
````

### 2️ - Instalar dependências

```bash
npm install
```

### 3️ - Executar o projeto

```bash
npm run dev
```

Acesse em:
Locamente -> **[http://localhost:5173](http://localhost:5173)** (ou a porta indicada no terminal)  
versão deployada: **[https://web-site-fluxar.vercel.app/](https://web-site-fluxar.vercel.app/)**

---

## Integrações 🧠

### APIs Fluxar 🔗

O site se conecta às APIs do ecossistema Fluxar para buscar dados de movimentação, históricos e relatórios analíticos.
As URLs podem ser configuradas em um arquivo `.env`:

```
VITE_API_BASE_URL=https://api-fluxar.onrender.com
VITE_API_LOGS_URL=https://api-logs-fluxar-1.onrender.com
```

### Power BI 📊

O módulo de relatórios utiliza o pacote `powerbi-client` para **inserir dashboards do Power BI diretamente na interface web**.
Isso permite ao analista interagir com filtros, gráficos e visualizações em tempo real.

### Chatbot Analítico 🤖

O chatbot embutido auxilia o analista na **interpretação de dados de estoque**, oferecendo:

* Explicações automáticas sobre picos de entrada/saída,
* Geração de relatórios por período, e
* Recomendações baseadas em padrões de movimentação.

---

## Rotas Principais 🧭

| Rota         | Descrição                                                |
| ------------ | -------------------------------------------------------- |
| `/`          | Página inicial / login                                   |
| `/dashboard` | Painel principal com visualizações e relatórios          |
| `/chatbot`   | Chat analítico para insights e relatórios personalizados |

---

## 🖼️ Interface (exemplo ilustrativo)

```
+----------------------------------------------------------+
| LOGO               Dashboard | Chatbot | Perfil          |
+----------------------------------------------------------+
| 📊 Dashboard Power BI (embed)                             |
|                                                          |
| 🤖 Chatbot lateral com insights sobre movimentações       |
+----------------------------------------------------------+
```

---

## 🔗 Swagger das APIs Relacionadas

Caso deseje testar ou visualizar os endpoints usados pelo site:

* **API Fluxar:** [https://api-fluxar.onrender.com/swagger-ui.html](https://api-fluxar.onrender.com/swagger-ui.html)
* **API Logs Fluxar:** [https://api-logs-fluxar-1.onrender.com/swagger-ui.html](https://api-logs-fluxar-1.onrender.com/swagger-ui.html)

---

## 🧾 Licença

Este projeto é distribuído sob a **Licença MIT**.
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.