# Workflow repo for the CA

Fork an existing project repository and configure development tools (ESLint, Prettier, pre-commit hooks) and testing frameworks (Vitest for unit tests, Playwright for end-to-end tests). My work will be submitted as a Pull Request demonstrating my ability to improve code quality and test coverage in a real-world workflow.

**Desktop:** ![Homepage Desktop](./docs/workflow-website.jpg)

## Features

- ESlint for code linting
- Prettier for code formatting and style consistency
- Husky and lint-staged for pre-commit hooks
- Vitest for unit testing
- Playwright for end-to-end testing

## Prerequisites

- Node.js (v20+)
- npm (v8+)

## Getting Started

### Installation

```bash
npm install
```

### Running the project

```bash
npm run dev
```

### Running tests

**Vitest:**

```bash
npm run test:unit
```

**Playwright:**

```bash
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root directory:

```bash
API_KEY=your-api-key-here
BASE_URL=https://example.com/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start the live server
- `npm run lint` - Run ESLint
- `npm run prepare` - Install Husky hooks
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e` - Run end-to-end tests with Playwright

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Husky
- lint-staged
- Vitest
- Playwright

## Author

Helene Syre - [Github](https://github.com/helenesyre) - [Linkedin](https://www.linkedin.com/in/helene-syre/) - [Instagram](https://www.instagram.com/syre_design/) - syrehelene@gmail.com - [Portfolio](https://helenesyre.github.io/portfolio/#/)
