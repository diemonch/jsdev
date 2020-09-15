pipeline {
    agent  any
    stages {
        stage('Build') { 
            steps {
                git 'https://github.com/diemonch/jsdev.git'
                sh 'npm install' 
                sh 'sudo docker ps'
            }
        }
    }
}