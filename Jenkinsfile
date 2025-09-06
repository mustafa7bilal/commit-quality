pipeline {
    agent any

    triggers {
        githubPush()
    }

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/*.js", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'edge'], description: "Choose the browser")
    }

    stages {
        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        stage('Install dependencies') {
            steps {
                bat "npm i"
            }
        }
        stage('Install Cypress binary') {
            steps {
                bat "npx cypress install"
            }
        }
        stage('Testing') {
            steps {
                bat "npx cypress run --headed --browser ${params.BROWSER} --spec ${params.SPEC}"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: true, reportDir: 'cypress/reports', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}