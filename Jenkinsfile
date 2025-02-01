pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = "rj16"
        DOCKER_HUB_PASSWORD = credentials('docker-hub-credentials')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ritikjain16/devops_january_2025.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USERNAME/mern-backend ./devops_backend'
                sh 'docker build -t $DOCKER_HUB_USERNAME/mern-frontend ./devops_frontend'
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker push $DOCKER_HUB_USERNAME/mern-backend'
                    sh 'docker push $DOCKER_HUB_USERNAME/mern-frontend'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f kubernetes/deployment.yaml'
                sh 'kubectl apply -f kubernetes/service.yaml'
            }
        }
    }
}
