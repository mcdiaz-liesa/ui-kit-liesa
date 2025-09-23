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
                dir('liesa-lib') {
                    sh 'npm ci'
                }
            }
        }
        stage('Build') {
            steps {
                dir('liesa-lib') {
                    sh 'node --version'
                    sh 'npm run build'
                }
            }
        }
        stage('Publish') {
            when {
                anyOf {
                    branch "main"
                    buildingTag()
                }
            }
            steps {
                dir('liesa-lib') {
                    withCredentials([string(credentialsId: 'verdaccio-token', variable: 'NPM_TOKEN')]) {
                        sh '''
                            echo "${NPM_TOKEN}" > .npmrc
                            npm publish --registry=${REGISTRY_URL}
                        '''
                    }
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