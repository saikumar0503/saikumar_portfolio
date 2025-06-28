pipeline {
    agent any

    stages {
        stage('Pull the code from github') {
            steps {
                echo 'Hello World'
                git 'https://github.com/saikumar0503/saikumar_portfolio.git'
            }
        }

    stage('Create image forr docker') {
            steps {
                echo 'Hello World'
                sh'docker build -t sai7032/portfolio:latest .'
            }
        }

    stage('Push to docker hub') {
            steps {
                echo 'Hello World'
                sh'docker push sai7032/portfolio:latest'
            }
        }

    stage('deploy to ec2 server') {
            steps {
                echo 'Hello World'
                sh'docker run -d -p 80:1000 sai7032/portfolio:latest'
            }
        }

    stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }            

    }
}
