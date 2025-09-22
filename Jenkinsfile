/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:22.19.0-alpine3.22' } }
    environment {
        REGISTRY_URL = "http://localhost:4873"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm run build'
            }
        }
        stage('hello') {
            echo 'Hello World'
        }
        stage('Publish') {
            when {
                anyOf {
                    branch "main"
                    buildingTag()
                }
            }
            steps {
                withCredentials([string(credentialsId: 'verdaccio-token', variable: 'NPM_TOKEN')]) {
                    sh '''
                        echo "${NPM_TOKEN}" > .npmrc"
                        npm publish --registry=${REGISTRY_URL}
                    '''
                }
            }
        }
    }
    post {
        success {
            echo 'Builkd and published successfully!'
        }
        failure {
            echo 'Build or publish failed.'
        }
    }
}