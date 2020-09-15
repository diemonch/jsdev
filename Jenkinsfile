pipeline {
   
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
                sh 'node index.js'
                }
        }
    }
}