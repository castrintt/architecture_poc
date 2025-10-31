// jest-setup.ts
import '@testing-library/jest-native/extend-expect';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeOnTheScreen(): R;

            toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R;

            toHaveProp(attr: string, value?: any): R;

            toHaveStyle(style: object | object[]): R;

            toBeDisabled(): R;

            toBeEnabled(): R;

            toBeEmpty(): R;

            toBeVisible(): R;

            toContainElement(element: any): R;
        }
    }
    var __ExpoImportMetaRegistry: {
        register: jest.Mock;
        get: jest.Mock;
    };
}

globalThis.__ExpoImportMetaRegistry = {
    register: jest.fn(),
    get: jest.fn(),
};

if (typeof globalThis.structuredClone === 'undefined') {
    globalThis.structuredClone = (val) => JSON.parse(JSON.stringify(val));
}

jest.mock('expo-asset', () => ({
    Asset: {
        fromModule: jest.fn(() => ({uri: 'mock-uri'})),
        loadAsync: jest.fn(),
    },
}));

jest.mock('@libs/axios/axios.instances', () => ({
    ...jest.requireActual('@libs/axios/axios.instances'),
    PRIVATE: {
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
    },
    PUBLIC: {
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
    }
}))

jest.mock('@utils/STORE_KEYS')
jest.mock('@store/store')

jest.mock('expo-constants', () => ({
    default: {
        expoConfig: {
            extra: {
                TOKEN: {
                    EXPIRATION: 'mock-expiration',
                    ACCESS_TOKEN: 'mock-access-token',
                    REFRESH_TOKEN: 'mock-refresh-token',
                    AUTHENTICATED: 'mock-authenticated',
                },
                URL: {
                    LOCAL: 'http://localhost',
                    HML: 'http://hml',
                    PROD: 'http://prod',
                    ZIPCODE: 'http://zipcode',
                },
                USER: {
                    ID: 'mock-volunteer-id',
                },
                SYSTEM_ORIGIN: 'mock-system-origin',
            }
        }
    }
}));

jest.mock('expo-font', () => ({
    loadAsync: jest.fn(),
    isLoaded: jest.fn(() => true),
}));

jest.mock('expo-secure-store', () => ({
    getItemAsync: jest.fn(),
    setItemAsync: jest.fn(),
    deleteItemAsync: jest.fn(),
}));

jest.mock('@expo/vector-icons', () => {
    const {View} = require('react-native');
    return {
        Ionicons: View,
        MaterialIcons: View,
        FontAwesome: View,
        Feather: View,
        AntDesign: View,
    };
});

jest.mock('react-native-toast-message', () => ({
    show: jest.fn(),
    hide: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
        navigate: jest.fn(),
        goBack: jest.fn(),
        reset: jest.fn(),
        setOptions: jest.fn(),
    }),
    useRoute: () => ({
        params: {},
    }),
    useFocusEffect: jest.fn((callback: () => void) => {
        callback();
    })
}));

jest.mock('@react-navigation/core', () => ({
    ...jest.requireActual('@react-navigation/core'),
    useNavigation: () => ({
        navigate: jest.fn(),
        goBack: jest.fn(),
        reset: jest.fn(),
        setOptions: jest.fn(),
    }),
    useRoute: () => ({
        params: {},
    }),
    useFocusEffect: jest.fn((callback: () => void) => {
        callback();
    }),
}));

const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
    console.warn = (...args: any[]) => {
        const warning = args[0];
        if (
            typeof warning === 'string' &&
            (warning.includes('Animated:') ||
             warning.includes('NativeAnimated:') ||
             warning.includes('componentWillReceiveProps') ||
             warning.includes('componentWillMount'))
        ) {
            return;
        }
        originalWarn(...args);
    };

    console.error = (...args: any[]) => {
        const error = args[0];
        if (
            typeof error === 'string' &&
            (error.includes('Warning: ReactDOM.render') ||
             error.includes('Not implemented: HTMLFormElement'))
        ) {
            return;
        }
        originalError(...args);
    };
});

afterAll(() => {
    console.warn = originalWarn;
    console.error = originalError;
});