pipeline {
    agent any

    environment {
        DOCKER_HOST = 'unix:///var/run/docker.sock'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building a new laptop ...'
                sh '''
                    docker run --rm -v "$PWD:/workspace" -w /workspace node:18-alpine sh -c '
                        mkdir -p build
                        touch build/computer.txt
                        echo "Mainboard" >> build/computer.txt
                        cat build/computer.txt
                        echo "Display" >> build/computer.txt
                        cat build/computer.txt
                        echo "Keyboard" >> build/computer.txt
                        cat build/computer.txt
                    '
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
