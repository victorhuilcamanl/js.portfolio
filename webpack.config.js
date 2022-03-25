const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //añadir plugin css

module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js", 
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "main.js"
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.js$/,
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        }
      },
      {     //configuracion de plugin loader css
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
        'css-loader'
      ],
      }
    ]
  },
  // SECCION DE PLUGINS
  plugins: [
    new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
        inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
        template: './public/index.html', // LA RUTA AL TEMPLATE HTML
        filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
    }),
    new MiniCssExtractPlugin(), // utilizacion del plugin css
]
}
