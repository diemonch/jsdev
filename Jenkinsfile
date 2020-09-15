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
                sh 'node index.js'
                }
        }
    }
}