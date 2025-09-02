pipeline {
    agent any

    tools {
        nodejs "Node16" // or your configured Node version
    }

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/mustafa7bilal/commit-quality.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --headless --browser chrome --reporter mochawesome --reporter-options reportDir=cypress/reports,json=false,overwrite=false,html=true'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }

        stage('Publish JUnit Results') {
            steps {
                junit 'cypress/results/*.xml'
            }
        }
    }
}
