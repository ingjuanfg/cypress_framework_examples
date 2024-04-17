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
            }
        }
        
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm run test'
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
