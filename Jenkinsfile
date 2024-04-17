pipeline {
    agent any
 
    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/ingjuanfg/cypress_framework_examples'
            }
        }
        
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
                sh 'npm install cypress --save-dev'
                sh 'npm install -g npx'
                sh 'npm install -D cypress-xpath'
                sh 'npm install -D cypress-plugin-tab'
            }
        }
        
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm run cypress:run -- --spec "cypress/e2e/*.js"'
            }
        }
    }
    
    post {
        always {
            junit 'cypress/results/*.xml'
            archiveArtifacts 'cypress/screenshots/**'
            archiveArtifacts 'cypress/videos/**'
            cleanWs()
        }
    }
}
