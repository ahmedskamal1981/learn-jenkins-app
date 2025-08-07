pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
            // Optionally you can add 'args' here if needed, e.g., to mount volumes
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building a new laptop ...'
                sh '''
                    mkdir -p build
                    touch build/computer.txt
                    echo "Mainboard" >> build/computer.txt
                    cat build/computer.txt
                    echo "Display" >> build/computer.txt
                    cat build/computer.txt
                    echo "Keyboard" >> build/computer.txt
                    cat build/computer.txt
                '''
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
