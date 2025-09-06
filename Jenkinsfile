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
                bat "npm install"
            }
        }

        stage('Install Cypress binary') {
            steps {
                bat "npx cypress install"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run tests with mochawesome reporter
                bat "npx cypress run --headed --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=false,json=true"
            }
        }

        stage('Generate HTML Report') {
            steps {
                // Merge all JSONs and create HTML
                bat "npx mochawesome-merge cypress/reports/*.json > cypress/reports/output.json"
                bat "npx marge cypress/reports/output.json -f mochawesome -o cypress/reports"
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
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports',
                reportFiles: 'mochawesome.html',
                reportName: 'HTML Report'
            ])
        }
    }
}
