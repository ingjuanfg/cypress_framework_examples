pipeline {
    agent any

    environment {
        // Define el PATH para incluir la ruta de ejecutables npm
        PATH = "${tool 'npm'}/bin:${env.PATH}"
    }
 
    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/ingjuanfg/cypress_framework_examples'
            }
        }
        
        stage('Instalar Dependencias') {
            steps {
                bat 'npm install'
                bat 'npm install cypress --save-dev'
                bat 'npm install -g npx'
                bat 'npm install -D cypress-xpath'
                bat 'npm install -D cypress-plugin-tab'
            }
        }
        
        stage('Ejecutar Pruebas') {
            steps {
                bat 'npm run cypress:run -- --spec "cypress/e2e/*.js"'
            }
        }
    }
    
    post {
        always {
            junit 'cypress/results/*.xml'
            archiveArtifacts 'cypress/screenshots/**'
            archiveArtifacts 'cypress/videos/**'
        }
    }
}
