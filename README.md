# FloodlessApp

FloodlessApp é uma aplicação móvel desenvolvida com React Native e Expo, focada em ajudar usuários a lidar com situações de alagamento. O aplicativo permite que usuários visualizem áreas de risco, recebam alertas sobre alagamentos em tempo real e compartilhem informações sobre pontos de alagamento em sua região.

## Equipe

 - Wesley Sena | RM: 558043
 - Vanessa Yukari | RM: 558092
 - Samara Victoria | RM: 558719

## 💡 Funcionalidades Principais

- Cadastro de voluntários
- Sistema de alertas
- Compartilhamento de informações sobre locais de abrigos
- Botão para pedir ajuda
- Histórico de ocorrências de alagamentos
- Sistema de notificações push
- Perfil do usuário com configurações personalizadas

## 🏗️ Arquitetura e Tecnologias

O projeto é construído seguindo as melhores práticas de desenvolvimento React Native:

### Core da Aplicação
- **React Native (0.79.3)**: Framework base para desenvolvimento mobile multiplataforma
  - Componentes nativos otimizados
  - Bridge nativa para melhor performance
  - Hot Reloading para desenvolvimento ágil

- **Expo (53.0.10)**: Facilita o desenvolvimento com ferramentas prontas para uso
  - OTA Updates para atualizações rápidas
  - Acesso simplificado a APIs nativas
  - Gerenciamento de assets e recursos

### Navegação e Roteamento
- **React Navigation**: Sistema completo de navegação
  - Bottom Tabs: Menu inferior para acesso rápido
  - Drawer: Menu lateral para opções adicionais
  - Stack: Navegação em pilha para fluxos específicos
  - Deep Linking para notificações

### Armazenamento e Dados
- **AsyncStorage**: Persistência de dados do usuário e configurações
  - Cache de dados offline
  - Armazenamento de preferências
  - Tokens de autenticação

- **Expo Blur**: Efeitos visuais para melhor experiência do usuário
  - Modais com efeito blur
  - Overlays informativos
  - Elementos de UI modernos

### Desenvolvimento e Qualidade
- **TypeScript**: Tipagem estática e melhor manutenibilidade
  - Interfaces bem definidas
  - Contratos de dados claros
  - Prevenção de erros em tempo de desenvolvimento

- **Styled Components**: Estilização componentizada e reutilizável
  - Temas dinâmicos
  - Estilos baseados em props
  - Reutilização de código CSS

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd FloodlessApp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🎮 Como Executar

O projeto pode ser executado de diferentes formas:

```bash
# Iniciar o projeto com Expo
npm start
# ou
yarn start

# Executar no Android
npm run android
# ou
yarn android

# Executar no iOS
npm run ios
# ou
yarn ios

# Executar na Web
npm run web
# ou
yarn web
```

## 📱 Executando com Expo Go

Após iniciar o projeto com `npm start` ou `yarn start`, você verá algumas opções no terminal:

- Pressione `a` - Abre o aplicativo no emulador Android (se estiver instalado e configurado)
- Pressione `i` - Abre o aplicativo no emulador iOS (apenas macOS)
- Pressione `w` - Abre o aplicativo no navegador web
- Escaneie o QR Code que aparece no terminal:
  - Usuários Android: Abra o aplicativo Expo Go e escaneie o QR Code
  - Usuários iOS: Use a câmera do iPhone para escanear o QR Code

Você também pode acessar o painel do Expo no navegador (que abre automaticamente) e:
1. Escolher "Run on Android device/emulator" para Android
2. Escolher "Run on iOS simulator" para iOS
3. Escolher "Run in web browser" para web
4. Escanear o QR Code diretamente da página

### Troubleshooting comum:

1. Certifique-se que seu celular e computador estão na mesma rede Wi-Fi
2. Se o QR Code não funcionar, tente:
   - Fechar e abrir novamente o Expo Go
   - Reiniciar o servidor Expo (`npm start`)
   - Usar a opção "Enter URL manually" no Expo Go e digitar o endereço mostrado no terminal
3. Se encontrar erro de conexão:
   - Verifique se seu firewall não está bloqueando a conexão
   - Tente usar uma rede de dados móveis
   - Verifique se a porta 19000 está disponível

## 📱 Tecnologias Utilizadas

- React Native (0.79.3)
- Expo (53.0.10)
- TypeScript
- React Navigation
- Expo Blur
- AsyncStorage

## 📦 Dependências Principais

### Produção
- `@expo/metro-runtime`: ~5.0.4
- `@react-native-async-storage/async-storage`: ^2.1.2
- `@react-navigation/bottom-tabs`: ^7.3.14
- `@react-navigation/drawer`: ^7.4.1
- `@react-navigation/native`: ^7.1.10
- `@react-navigation/native-stack`: ^7.3.14
- `@react-navigation/stack`: ^7.3.3
- `expo`: ~53.0.10
- `expo-blur`: ^14.1.5
- `react`: ^19.0.0
- `react-native`: 0.79.3

### Desenvolvimento
- `@babel/core`: ^7.25.2
- `@types/react`: ~19.0.10
- `typescript`: ~5.8.3
- `@types/styled-components`: ^5.1.34
- `@types/styled-components-react-native`: ^5.2.5

## 🔧 Configuração do Ambiente de Desenvolvimento

1. Instale o Expo CLI globalmente:
```bash
npm install -g expo-cli
```

2. Instale o aplicativo Expo Go no seu dispositivo móvel (disponível na App Store ou Google Play Store)

3. Certifique-se de que seu dispositivo móvel e computador estão na mesma rede Wi-Fi

## 📱 Testando no Dispositivo Físico

1. Inicie o projeto com `npm start` ou `yarn start`
2. Escaneie o QR Code gerado com o aplicativo Expo Go (Android) ou Câmera (iOS)
3. O aplicativo será carregado no seu dispositivo

## 💻 Testando no Emulador

### Android
1. Tenha o Android Studio instalado com um emulador configurado
2. Execute `npm run android` ou `yarn android`

### iOS (apenas macOS)
1. Tenha o Xcode instalado
2. Execute `npm run ios` ou `yarn ios`

## Links

 - Apresentação do projeto: https://youtu.be/npNqbdm2vBw?si=QfpS1qVlQ7KzNxvV