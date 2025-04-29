# Saucedemo Autotests (Playwright + TypeScript)

Тестовое задание: E2E для интернет-магазина [Saucedemo](https://www.saucedemo.com/) с использованием **Playwright** и **TypeScript**.

---

### 📦 Установка проекта

1. Клонировать репозиторий или скачать проект.

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

2. Установить зависимости:

```bash
npm install
```

3. Установить браузеры для Playwright:

```bash
npx playwright install
```

---

### 📋 Запуск всех тестов

```bash
npx playwright test
```

### 🧪 Запуск конкретного тестового файла

```bash
npx playwright test tests/specs/cart.spec.ts
```

### 🖥️ Запуск в режиме видимого браузера (headed)

```bash
npx playwright test --headed
```