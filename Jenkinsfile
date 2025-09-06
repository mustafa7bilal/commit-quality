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

        stage('Clean Reports') {
            steps {
                bat 'if exist cypress\\reports del /Q cypress\\reports\\*.*'
                bat 'if not exist cypress\\reports mkdir cypress\\reports'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat "npx cypress run --headed --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=false,json=true"
            }
        }

        stage('Generate HTML Report') {
            steps {
                // Wait for file system to flush
                bat 'ping -n 3 127.0.0.1 > nul'
                bat 'dir cypress\\reports'
                
                // Since we only have one JSON file, just rename it and generate HTML
                bat 'copy cypress\\reports\\mochawesome.json cypress\\reports\\output.json'
                bat 'npx marge cypress\\reports\\output.json --reportDir cypress\\reports --reportFilename index.html'
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
                reportFiles: 'index.html',
                reportName: 'HTML Report'
            ])
        }
    }
}