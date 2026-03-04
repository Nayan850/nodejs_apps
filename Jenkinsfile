pipeline {
 agent any

 stages {

 stage('Clone Code') {
 steps {
 git branch: 'main', url: 'https://github.com/Nayan850/nodejs_apps.git'
 }
 }

 stage('Build Docker Image') {
 steps {
 sh 'docker build -t nodejs-app .'
 }
 }

 stage('Run Container') {
 steps {
 sh '''
 docker stop nodeapp || true
 docker rm nodeapp || true
 docker run -d -p 4000:4000 --name nodeapp nodejs-app
 '''
 }
 }

 }
}
