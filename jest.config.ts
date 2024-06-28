export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }],
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss|styl)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
