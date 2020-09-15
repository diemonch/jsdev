pipeline {
   agent any
    
  tools {nodejs "node"}
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
         stage('Build') { 
            steps {
                git 'https://github.com/diemonch/jsdev.git'
                sh 'npm init' 
                sh 'npm install npm@latest -g'
                sh 'node index.js'
                }
        }
    }
}