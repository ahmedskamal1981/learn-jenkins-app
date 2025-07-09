pipeline {
    agent any

    stages {
        stage('Greet') {
            steps {
                echo 'Hello, World!'
            }
        }

        stage('Goodbye') {
            steps {
                echo 'Goodbye, World!'
            }
        }
    }

    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}
