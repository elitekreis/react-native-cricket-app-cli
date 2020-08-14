module.exports = {
  root: true,
  extends: [
	//"airbnb",
	// '@react-native-community',
	"standard",
	"plugin:flowtype/recommended",
	"plugin:react/recommended",
	"prettier",
	"prettier/flowtype",
	"prettier/react",
	"prettier/standard",
	"eslint-config-prettier"
],
parser: "babel-eslint",
plugins: [
	"flowtype",
	"react",
	"prettier",
	"standard"
],
parserOptions: {
	sourceType: "module",
	ecmaFeatures: {
		jsx: true
	}
},
env: {
	es6: true,
	node: true
},
rules: {
	"prettier/prettier": "error",
	"react/no-deprecated": "off",
}
};
