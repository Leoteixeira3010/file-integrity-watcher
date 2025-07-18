# File Integrity Watcher

Monitora alterações de arquivos em tempo real.

## Funcionalidades:
- Watchdog para eventos de arquivos
- Geração de logs de alteração
- Pode ser usado para detectar ransomwares

Stack: Python + watchdog

## Running Tests

The project includes a small Jest test that loads `index.html` using jsdom to
verify that the banner text and console message are present.

Execute the following commands to install the test dependencies and run the
tests:

```bash
npm install
npm test
```

