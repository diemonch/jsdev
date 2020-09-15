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
                sh 'npm install npm@latest -g'
                sh 'node index.js'
                }
        }
    }
}