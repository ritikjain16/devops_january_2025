pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = "rj1608"
        DOCKER_HUB_PASSWORD = "00@#Doraemon000" // Add Jenkins credentials for Docker Hub
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ritikjain16/devops_january_2025.git'
            }
        }

        stage('Set Up Docker Buildx') {
            steps {
                sh 'docker buildx create --use'
                sh 'docker buildx inspect --bootstrap'
            }
        }

        stage('Build & Push Backend Image') {
            steps {
                sh '''
                docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD
                docker buildx build --no-cache --platform linux/amd64,linux/arm64 \
                -t $DOCKER_HUB_USERNAME/mern-backend:latest --push ./devops_backend
                '''
            }
        }

        stage('Build & Push Frontend Image') {
            steps {
                sh '''
                docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD
                docker buildx build --no-cache --platform linux/amd64,linux/arm64 \
                -t $DOCKER_HUB_USERNAME/mern-frontend:latest --push ./devops_frontend
                '''
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
