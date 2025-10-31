# Architecture POC - React Native

Prova de conceito (POC) de arquitetura em camadas para aplicações React Native, implementando padrões como Inversion of Control (IoC), Repository Pattern, Gateway Pattern e separação clara de responsabilidades.

## 📋 Sobre o Projeto

Este é um **projeto base construído do zero** para demonstrar uma arquitetura escalável e testável para aplicações React Native. O objetivo é estabelecer uma fundação sólida com boas práticas de desenvolvimento, facilitando a manutenção e evolução do código.

### Estado Atual

O projeto implementa uma estrutura completa com:
- ✅ Arquitetura em camadas implementada
- ✅ IoC Container configurado
- ✅ Sistema de autenticação básico
- ✅ Tela de Login com validação (React Hook Form + Zod)
- ✅ Tela Home (área privada)
- ✅ Navegação Stack + Drawer configurada
- ✅ Axios com interceptors customizados
- ✅ Componentes reutilizáveis (Button, Input, Select, Toast, Tooltip)
- ✅ Redux configurado
- ✅ Testes unitários configurados
- ✅ Testes E2E configurados (WebDriverIO + Appium)

## 🛠 Tecnologias e Dependências

### Core
- **React Native** (0.81.5) - Framework mobile
- **Expo** (SDK 54) - Plataforma de desenvolvimento
- **TypeScript** (5.9.2) - Tipagem estática

### Estado e Navegação
- **Redux Toolkit** (2.9.0) - Gerenciamento de estado
- **React Navigation** (7.x) - Navegação (Stack + Drawer)
- **React Redux** (9.2.0) - Bindings React-Redux

### UI e Estilos
- **NativeWind** (4.2.1) - Tailwind CSS para React Native
- **Expo Linear Gradient** - Gradientes
- **React Native SVG** - Suporte a SVG
- **React Native Reanimated** (4.1.0) - Animações

### Formulários e Validação
- **React Hook Form** (7.63.0) - Gerenciamento de formulários
- **Zod** (3.25.76) - Schema validation
- **@hookform/resolvers** (5.2.2) - Resolvers para validação

### HTTP e Comunicação
- **Axios** (1.12.2) - Cliente HTTP

### Storage e Segurança
- **Expo SecureStore** - Armazenamento seguro de dados sensíveis
- **JWT Decode** (4.0.0) - Decodificação de tokens

### Testes
- **Jest** (29.7.0) - Framework de testes unitários
- **@testing-library/react-native** (13.3.3) - Testing utilities
- **WebDriverIO** (9.20.0) - Testes E2E
- **Appium** (3.1.0) - Automação mobile

## 🏗 Arquitetura do Projeto

O projeto implementa uma arquitetura em camadas inspirada em **Clean Architecture** e **DDD**:

```
┌──────────────────────────────────────────────┐
│         UI Layer (src/)                       │
│  Pages, Components, Hooks, Navigation         │
└─────────────────┬────────────────────────────┘
                  │ (usa IoC Container)
┌─────────────────▼────────────────────────────┐
│         Service Layer (@service)              │
│     Lógica de negócio e orquestração          │
└─────────────────┬────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
┌───────▼──────┐   ┌────────▼────────┐
│   @gateway   │   │  @repository    │
│ APIs externas│   │  Storage local  │
└──────────────┘   └─────────────────┘

    ┌──────────────────┐
    │    @facade       │
    │ Abstrações libs  │
    └──────────────────┘

    ┌──────────────────┐
    │  @IoC Container  │
    │  Injeção Deps    │
    └──────────────────┘
```

### Camadas da Arquitetura

#### 1. **@IoC** - Inversion of Control Container
Gerencia a criação e ciclo de vida de todas as dependências usando o padrão Singleton.

```typescript
// Uso no componente
const container = useIoCContainer();
const authService = container.getAuthService();
```

**Implementado:**
- `IoCContainer` - Container principal com lazy loading

#### 2. **@service** - Service Layer
Camada de lógica de negócio que orquestra chamadas aos gateways e repositories.

**Implementado:**
- `AuthService` - Autenticação de usuários
- `LogoutService` - Processo de logout

#### 3. **@gateway** - Gateway Layer
Responsável pela comunicação com APIs externas usando Axios.

**Implementado:**
- `AuthGateway` - Endpoint de autenticação

**Estrutura planejada:**
- `CalendarGateway`
- `CharacteristicGateway`
- `ImageGateway`
- `ScoreGateway`
- `TestGateway`
- `TestLocationGateway`
- `VolunteerGateway`
- `ZipcodeGateway`

#### 4. **@repository** - Repository Layer
Gerencia dados locais (storage, cache, persistência).

**Implementado:**
- `TokenRepository` - Armazenamento de tokens (SecureStore)
- `UrlRepository` - URLs da aplicação
- `EasRepository` - Configurações EAS

#### 5. **@facade** - Facade Layer
Abstrai bibliotecas externas para facilitar manutenção.

**Implementado:**
- `DateFacade` - Abstração para manipulação de datas

#### 6. **@domain** - Domain Layer
Modelos, enums e tipos do domínio.

**Implementado:**
- `GenerateAccessTokenResponse` - DTO de autenticação
- `EHttpStatusCode` - Enum de status HTTP
- `EButtonCommonStyle` - Enum de estilos de botões

#### 7. **@libs** - Libraries Configuration
Configurações customizadas de bibliotecas.

**Implementado:**
- `AxiosBuilder` - Builder pattern para instâncias Axios
- `axios_instances` - Instâncias PUBLIC e PRIVATE
- Interceptors:
  - `connection` - Verifica conectividade
  - `serverSide` - Trata erros do servidor
  - `serviceUnavailable` - Trata erros 503
  - `networkState` - Monitora estado da rede
  - `timeOut` - Gerencia timeouts
  - `notification` - Exibe notificações de erro

## 📁 Estrutura de Pastas

```
architecture_poc/
│
├── @IoC/                          # Inversion of Control
│   ├── IoC.container.ts          # Container singleton
│   └── IoC.interface.ts          # Interface do container
│
├── @domain/                       # Domain models
│   ├── models/                   # DTOs e entidades
│   │   └── auth/
│   └── enum/                     # Enumerações
│
├── @facade/                       # Abstrações de bibliotecas
│   └── date/
│       ├── date.facade.ts
│       └── date.interface.ts
│
├── @gateway/                      # Comunicação HTTP
│   └── auth/
│       ├── auth.gateway.ts
│       └── auth.interface.ts
│
├── @service/                      # Lógica de negócio
│   ├── auth/
│   │   ├── auth.service.ts
│   │   └── auth.interface.ts
│   └── logout/
│       ├── logout.service.ts
│       └── logout.interface.ts
│
├── @repository/                   # Persistência local
│   ├── token/
│   ├── url/
│   └── eas/
│
├── @libs/                         # Configurações de libs
│   ├── axios/
│   │   ├── axios.builder.ts     # Builder pattern
│   │   ├── axios.instances.tsx  # Instâncias PUBLIC/PRIVATE
│   │   └── interceptors/        # Interceptors HTTP
│   ├── notification/
│   └── storage/
│
├── @tests/                        # Testes
│   ├── unitary/                  # Testes unitários
│   └── integration/              # Testes de integração
│
├── src/
│   ├── assets/                   # Recursos estáticos
│   │   ├── png/
│   │   └── svg/
│   │
│   ├── components/               # Componentes reutilizáveis
│   │   ├── button/              # Button component
│   │   ├── input/               # CommonInput component
│   │   ├── select/              # Select component
│   │   ├── toast/               # Toast notifications
│   │   └── tooltip/             # Tooltip component
│   │
│   ├── hooks/                    # Custom hooks
│   │   └── ioCContainer.context.tsx
│   │
│   ├── pages/                    # Telas da aplicação
│   │   ├── public/              # Telas públicas
│   │   │   └── login/
│   │   │       ├── login.tsx              # Page wrapper
│   │   │       ├── login.component.tsx    # UI Component
│   │   │       ├── login.controller.tsx   # Controller (lógica)
│   │   │       ├── login.resolver.ts      # Zod schema
│   │   │       ├── login.styles.ts        # Estilos
│   │   │       └── login.types.ts         # Tipos
│   │   │
│   │   └── private/             # Telas autenticadas
│   │       └── home/
│   │           ├── home.tsx
│   │           ├── home.component.tsx
│   │           ├── home.controller.tsx
│   │           └── home.types.ts
│   │
│   ├── routes/                   # Navegação
│   │   ├── appNavigator.tsx
│   │   ├── appNavigation.config.tsx
│   │   ├── appNavigator.type.ts
│   │   └── navigators/
│   │       ├── stack.tsx
│   │       └── drawer.tsx
│   │
│   ├── stores/                   # Redux
│   │   ├── store.ts
│   │   ├── combineReducers.ts
│   │   └── slices/
│   │       └── authSlice/
│   │
│   ├── globals/                  # Constantes globais
│   │   └── dimensions.tsx
│   │
│   └── utils/                    # Utilitários
│       └── STORE_KEYS.ts
│
├── App.tsx                        # Componente raiz
├── index.ts                       # Entry point
├── global.css                     # Tailwind base
│
├── babel.config.js               # Configuração Babel
├── metro.config.js               # Configuração Metro
├── tailwind.config.js            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
├── jest.config.js                # Configuração Jest
└── wdio.conf.ts                  # Configuração WebDriverIO
```

## 🎯 Padrão de Componentes Page

Cada página segue o padrão **Container/Component/Controller**:

```
login/
├── login.tsx              # Container - Lazy loading e injeção de deps
├── login.component.tsx    # Component - UI pura (React.memo)
├── login.controller.tsx   # Controller - Lógica e hooks
├── login.resolver.ts      # Zod schema para validação
├── login.styles.ts        # Estilos específicos
└── login.types.ts         # Tipos e interfaces
```

### Exemplo de Uso

**login.tsx** (Container):
```typescript
import UseLoginController from "./login.controller";
import {lazy, Suspense} from "react";
import {useIoCContainer} from "@hooks/ioCContainer.context";

const LoginComponent = lazy(() => import("./login.component"));

function Login() {
    const container = useIoCContainer()
    const authService = container.getAuthService()
    const controller = UseLoginController({authService});

    return (
        <Suspense fallback={<View>Carregando..</View>}>
            <LoginComponent controller={controller}/>
        </Suspense>
    );
}
```

**login.controller.tsx** (Controller):
```typescript
function UseLoginController({authService}: LoginControllerInjectTypes) {
    const {control, handleSubmit, formState} = useForm<LoginFormData>({
        resolver: zodResolver(loginResolver),
    });

    const onSubmit = handleSubmit(async (data) => {
        await authService.generateTokenAsync(data.email, data.password)
    });

    return {
        actions: { onSubmit },
        states: { control, isValid: formState.isValid },
    };
}
```

**login.component.tsx** (UI):
```typescript
function LoginComponent({controller}: LoginControllerType) {
    return (
        <LinearGradient colors={["white", "black"]}>
            <View>
                <CommonInput
                    control={controller.states.control}
                    name="email"
                    label="E-mail"
                />
                <Button
                    description="Entrar"
                    onPress={controller.actions.onSubmit}
                />
            </View>
        </LinearGradient>
    );
}
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js >= 18.x
- npm ou yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd architecture_poc

# Instale as dependências
npm install

# Se houver problemas, use:
npm run fix:instalations
```

### Scripts Disponíveis

#### Desenvolvimento

```bash
# Iniciar servidor Expo (limpa cache)
npm start

# Modos específicos
npm run start:lan          # Modo LAN
npm run start:tunnel       # Modo Tunnel
npm run start:localhost    # Modo Localhost

# Executar em plataformas
npm run android           # Rodar no Android
npm run ios              # Rodar no iOS
npm run web              # Rodar na Web
```

#### Testes

```bash
# Testes unitários
npm run jest              # Rodar todos os testes
npm run jest:watch        # Modo watch
npm run jest:coverage     # Com coverage
npm run jest:unit         # Apenas unitários
npm run jest:integration  # Apenas integração

# Testes E2E
npm run wdio             # Rodar todos E2E
npm run wdio:spec        # Rodar spec específico
```

#### Qualidade

```bash
npm run lint             # Executar ESLint
npm run lint:fix         # Corrigir automaticamente
npm run clean            # Limpar build (prebuild)
```

## 🎨 Componentes Implementados

### Button
Botão com múltiplos estilos (PRIMARY, SECONDARY, etc.)

```typescript
<Button
  description="Entrar"
  onPress={handlePress}
  style={EButtonCommonStyle.PRIMARY}
/>
```

### CommonInput
Input com validação, ícones e máscaras

```typescript
<CommonInput
  control={control}
  name="email"
  label="E-mail"
  type="email"
  iconLeft={<Ionicons name="person-outline" size={20} />}
/>
```

### Select
Dropdown customizado

### Toast
Notificações toast usando react-native-toast-message

### Tooltip
Tooltips informativos

## 🔒 Axios Instances

O projeto utiliza duas instâncias Axios configuradas:

```typescript
const HTTP_INSTANCES = {
    PRIVATE: AxiosBuilder.create()
        .withBaseURL(BASE_URL)
        .haveCredentials()  // Inclui token automaticamente
        .toDomain()
        .initInstance(),

    PUBLIC: AxiosBuilder.create()
        .withBaseURL(BASE_URL)
        .toDomain()
        .initInstance(),
};
```

### Interceptors Configurados

1. **Connection** - Verifica se há conexão antes da requisição
2. **Server Side** - Trata erros 500, 401, 403, etc.
3. **Service Unavailable** - Trata erro 503
4. **Network State** - Monitora estado da rede
5. **Timeout** - Gerencia timeouts de requisição
6. **Notification** - Exibe toast de erros automaticamente

## 🧪 Testes

### Estrutura de Testes

```
@tests/
├── unitary/              # Testes unitários
│   └── services/
│       └── auth/
│           └── auth.service.test.ts
│
└── integration/          # Testes de integração
```

### Exemplo de Teste

```typescript
describe('AuthService', () => {
    it('should return true when authentication succeeds', async () => {
        // Arrange
        const mockGateway = { generateTokenAsync: jest.fn() };
        const authService = new AuthService(mockGateway);

        // Act
        const result = await authService.generateTokenAsync('user', 'pass');

        // Assert
        expect(result).toBe(true);
    });
});
```

## 🎯 Padrões de Projeto Utilizados

1. **Inversion of Control (IoC)** - Gerenciamento centralizado de dependências
2. **Dependency Injection** - Injeção via construtor
3. **Repository Pattern** - Abstração de acesso a dados
4. **Gateway Pattern** - Centralização de APIs externas
5. **Facade Pattern** - Simplificação de bibliotecas
6. **Builder Pattern** - Construção de instâncias Axios
7. **Singleton Pattern** - IoC Container com instância única
8. **Container/Component/Controller** - Separação de responsabilidades em páginas

## 📝 Convenções de Código

### Nomenclatura
- **Interfaces**: Prefixo `I` (ex: `IAuthService`)
- **Types**: Sufixo descritivo (ex: `LoginFormData`)
- **Enums**: Prefixo `E` (ex: `EHttpStatusCode`)
- **Private fields**: Prefixo `_` (ex: `_authService`)

### Estrutura de Arquivos
- Cada camada tem seu arquivo `.interface.ts` e `.ts`/`.tsx`
- Componentes seguem padrão PascalCase
- Utilitários e configs seguem camelCase

### Path Aliases
O projeto usa path aliases configurados no `tsconfig.json`:

```json
{
  "@pages/*": "./src/pages/*",
  "@components/*": "./src/components/*",
  "@hooks/*": "./src/hooks/*",
  "@IoC/*": "./@IoC/*",
  "@service/*": "./@service/*",
  "@gateway/*": "./@gateway/*",
  "@repository/*": "./@repository/*",
  "@facade/*": "./@facade/*",
  "@libs/*": "./@libs/*",
  "@domain/*": "./@domain/*",
  // ... outros
}
```

## 🔄 Próximos Passos

### Implementações Planejadas
- [ ] Implementar gateways restantes (Calendar, Image, Volunteer, etc.)
- [ ] Adicionar mais testes unitários e de integração
- [ ] Implementar refresh token
- [ ] Adicionar mais páginas (perfil, configurações, etc.)
- [ ] Implementar tema dark mode
- [ ] Adicionar internacionalização (i18n)
- [ ] Configurar CI/CD
- [ ] Documentação de API com Swagger

## 📄 Licença

Este projeto é privado e proprietário.

## 👥 Contribuindo

Este é um projeto de POC. Para contribuir:

1. Faça fork do projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

**Desenvolvido como POC de arquitetura escalável para React Native**