// jest.config.cjs
module.exports = {
    preset: 'ts-jest',
    tsconfig: '<rootDir>/tsconfig.test.json',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/unit-tests/**/*.(test|spec).(ts|tsx)'],
    setupFiles: ["jest-localstorage-mock"]
};