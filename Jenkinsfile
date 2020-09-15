pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
         stage('Build') { 
            steps {
                git 'https://github.com/diemonch/jsdev.git'
                sh 'npm install' 
                sh 'npm test'
                }
        }
    }
}