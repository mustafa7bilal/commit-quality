pipeline {
    agent any

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
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}