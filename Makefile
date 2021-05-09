PATH := node_modules/.bin:$(PATH)

build: node_modules
	yarn webpack --config webpack.config.js --mode=production

dev: node_modules
	yarn webpack --config webpack.config.js --mode=development --watch

lint: node_modules
	yarn eslint --report-unused-disable-directives src

lint-fix: node_modules
	yarn eslint --report-unused-disable-directives --fix src

install:
	ln -s "$(PWD)" "${HOME}/.k8slens/extensions/istio-vs-gateway"

uninstall:
	rm "${HOME}/.k8slens/extensions/istio-vs-gateway"

node_modules: package.json
	yarn && touch $@