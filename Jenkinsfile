pipeline {
    agent any

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node: 18-alpine'
                    reuseNNode true
                }
            }
            steps {
                echo 'Hello, World!'
            }
        }
    }
}
