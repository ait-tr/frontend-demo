# Шаблон фронтенд приложения

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
- `lint`: - запускает проверку
- `lint:fix`: - исправляет

При нажатии ctrl/cmd + s - происходит автоматическое форматирование.
Если у вас не установлено расширение Prettier - установите его.

## Proxy
В файле `vite.config.ts` прописан proxy - это адрес на который будут проиcходить запросы при разработке.
```
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
			},
		},
```
